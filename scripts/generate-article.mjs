import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JOBS_ROOT = path.join(PROJECT_ROOT, 'content-jobs');
const DEFAULT_APIMART_BASE_URL = 'https://api.apimart.ai/v1';
const DEFAULT_TIMEOUT_MS = 120_000;
const MAX_TOKENS = 8_000;

function fail(message) {
	throw new Error(message);
}

function relativePath(filePath) {
	return path.relative(PROJECT_ROOT, filePath) || '.';
}

function firstEnv(names) {
	for (const name of names) {
		const value = process.env[name]?.trim();
		if (value) return { name, value };
	}
	return null;
}

function parseArgs(argv) {
	const dryRun = argv.includes('--dry-run');
	const metadata = argv.includes('--metadata');
	const positional = argv.filter((arg) => !arg.startsWith('--'));
	if (positional.length !== 1) fail('Usage: node scripts/generate-article.mjs <slug> [--dry-run] [--metadata]');
	const [slug] = positional;
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail(`Invalid slug "${slug}".`);
	return { dryRun, metadata, slug };
}

function resolveJobSlug(slug) {
	const aliases = {
		'up-achievement-fuses': 'fuses',
	};
	return aliases[slug] || slug;
}

function resolveConfig(requireComplete) {
	const apiKey = firstEnv(['APIMART_API_KEY', 'ANTHROPIC_AUTH_TOKEN', 'ANTHROPIC_API_KEY']);
	const baseUrl = firstEnv(['APIMART_BASE_URL'])?.value || DEFAULT_APIMART_BASE_URL;
	const model = firstEnv(['APIMART_MODEL', 'ANTHROPIC_MODEL', 'ANTHROPIC_DEFAULT_SONNET_MODEL']);
	const timeoutMs = Number(process.env.APIMART_TIMEOUT_MS || DEFAULT_TIMEOUT_MS);
	if (!Number.isInteger(timeoutMs) || timeoutMs < 1_000) fail('APIMART_TIMEOUT_MS must be at least 1000 milliseconds.');
	if (requireComplete && (!apiKey || !model)) {
		fail('Missing APIMart configuration: APIMART_API_KEY (or compatible auth variable) and APIMART_MODEL (or compatible model variable) are required.');
	}
	return { apiKey, baseUrl, model, timeoutMs };
}

function chatCompletionsUrl(baseUrl) {
	const url = new URL(baseUrl);
	if (!/^https?:$/.test(url.protocol)) fail('APIMART_BASE_URL must use http or https.');
	const pathname = url.pathname.replace(/\/+$/, '');
	url.pathname = pathname.endsWith('/chat/completions')
		? pathname
		: pathname.endsWith('/v1')
			? `${pathname}/chat/completions`
			: `${pathname}/v1/chat/completions`;
	return url.toString();
}

function extractText(payload) {
	const candidates = [
		payload?.data?.content,
		payload?.content,
		payload?.data?.choices?.[0]?.message?.content,
		payload?.choices?.[0]?.message?.content,
	];
	for (const content of candidates) {
		if (typeof content === 'string' && content.trim()) return content.trim();
		if (Array.isArray(content)) {
			const text = content
				.filter((part) => part?.type === 'text' && typeof part.text === 'string')
				.map((part) => part.text)
				.join('')
				.trim();
			if (text) return text;
		}
	}
	return '';
}

function parseMetadata(article) {
	let metadata;
	try {
		metadata = JSON.parse(article);
	} catch {
		fail('APIMart metadata response was not valid JSON.');
	}
	if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) {
		fail('APIMart metadata response must be a JSON object.');
	}
	for (const field of ['title', 'description', 'h1', 'quickAnswer']) {
		if (typeof metadata[field] !== 'string' || !metadata[field].trim()) {
			fail(`APIMart metadata is missing a non-empty ${field}.`);
		}
	}
	if (metadata.h1 !== metadata.title) {
		fail('APIMart metadata title and h1 must match for the generated guide template.');
	}
	if (!Array.isArray(metadata.facts) || metadata.facts.length !== 4 || metadata.facts.some((fact) =>
		!fact || typeof fact.label !== 'string' || !fact.label.trim() || typeof fact.value !== 'string' || !fact.value.trim()
	)) {
		fail('APIMart metadata must contain exactly four labeled facts.');
	}
	return metadata;
}

async function readRequired(filePath, label) {
	try {
		const value = await readFile(filePath, 'utf8');
		if (!value.trim()) fail(`${label} is empty: ${relativePath(filePath)}`);
		return value;
	} catch (error) {
		if (error?.code === 'ENOENT') fail(`${label} not found: ${relativePath(filePath)}`);
		throw error;
	}
}

async function requestArticle(config, prompt, brief) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), config.timeoutMs);
	try {
		const response = await fetch(chatCompletionsUrl(config.baseUrl), {
			method: 'POST',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${config.apiKey.value}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				model: config.model.value,
				max_tokens: MAX_TOKENS,
				stream: false,
				messages: [
					{ role: 'system', content: prompt },
					{ role: 'user', content: brief },
				],
			}),
			signal: controller.signal,
		});
		const raw = await response.text();
		let payload;
		try {
			payload = JSON.parse(raw);
		} catch {
			fail(`APIMart returned malformed JSON (HTTP ${response.status}).`);
		}
		if (!response.ok) {
			const providerMessage = typeof payload?.error?.message === 'string'
				? payload.error.message
				: typeof payload?.message === 'string' ? payload.message : `HTTP ${response.status}`;
			fail(`APIMart returned an HTTP error: ${providerMessage}`);
		}
		const article = extractText(payload);
		if (!article) fail('APIMart returned an empty article body.');
		return article;
	} catch (error) {
		if (error?.name === 'AbortError') fail(`APIMart request timed out after ${config.timeoutMs} ms.`);
		throw error;
	} finally {
		clearTimeout(timer);
	}
}

async function main() {
	const { dryRun, metadata, slug } = parseArgs(process.argv.slice(2));
	const jobSlug = resolveJobSlug(slug);
	const jobDir = path.join(JOBS_ROOT, jobSlug);
	const briefFile = path.join(jobDir, 'research.md');
	const articleFile = path.join(jobDir, 'article.md');
	const metadataFile = path.join(jobDir, 'metadata.json');
	const defaultPromptFile = path.join(PROJECT_ROOT, 'scripts', 'prompts', metadata ? 'game-guide-metadata-writer.md' : 'game-guide-writer.md');
	const jobPromptFile = path.join(jobDir, metadata ? 'metadata-prompt.md' : 'article-prompt.md');
	const brief = await readRequired(briefFile, 'Content brief');
	let prompt;
	try {
		prompt = await readFile(jobPromptFile, 'utf8');
		if (!prompt.trim()) fail(`Writer prompt is empty: ${relativePath(jobPromptFile)}`);
	} catch (error) {
		if (error?.code !== 'ENOENT') throw error;
		prompt = await readRequired(defaultPromptFile, 'Writer prompt');
	}
	const config = resolveConfig(!dryRun);
	if (dryRun) {
		console.log('dry-run: PASS');
		console.log(`input file: ${relativePath(briefFile)}`);
		console.log(`mode: ${metadata ? 'metadata' : 'article'}`);
		console.log('API call: skipped');
		return;
	}
	const article = await requestArticle(config, prompt, brief);
	await mkdir(jobDir, { recursive: true });
	const outputFile = metadata ? metadataFile : articleFile;
	const output = metadata ? `${JSON.stringify(parseMetadata(article), null, 2)}\n` : `${article}\n`;
	const temporaryFile = `${outputFile}.tmp-${process.pid}`;
	try {
		await writeFile(temporaryFile, output, 'utf8');
		await rename(temporaryFile, outputFile);
	} finally {
		await rm(temporaryFile, { force: true });
	}
	console.log(`model: ${config.model.value}`);
	console.log(`requested slug: ${slug}`);
	console.log(`job slug: ${jobSlug}`);
	console.log(`input file: ${relativePath(briefFile)}`);
	console.log(`mode: ${metadata ? 'metadata' : 'article'}`);
	console.log(`output file: ${relativePath(outputFile)}`);
	console.log(`output character count: ${article.length}`);
}

try {
	await main();
} catch (error) {
	console.error(`Error: ${error?.message || error}`);
	process.exitCode = 1;
}
