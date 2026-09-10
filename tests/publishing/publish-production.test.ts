import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
	extractIndexingSyncFromLedgerOutput,
	formatPublishResult,
	parseLedgerSummary,
	runProductionPublish,
} from '../../scripts/publish-production.mjs';

function ledgerOutputWithIndexingSync(indexingSync: Record<string, unknown>) {
	const summary =
		'PASS ledger writeback batch=batch-1 interventions=iv-1 baseline=2026-08-23' +
		' indexing=PASS sitemap=PASS inspected=3 current=1 manual=1 needsFix=1 inspectErrors=1';
	return `${summary}\n${JSON.stringify({ indexingSync })}\n`;
}

const HEAD = 'a'.repeat(40);

function workspace() {
	const root = mkdtempSync(path.join(os.tmpdir(), 'hotword-publish-test-'));
	writeFileSync(path.join(root, 'site-spec.yaml'), `
schemaVersion: 1
templateVersion: 2.0.0
mode: generated-site
site:
  id: fixture-site
  siteUrl: https://fixture.example
  title: Fixture Site
  shortName: Fixture Site
game:
  name: Fixture Game
deployment:
  provider: vercel
  orgId: team_fixture
  projectId: prj_fixture
  projectName: fixture-site
  productionUrl: https://fixture.example
`);
	return root;
}

function receipt(overrides: Record<string, unknown> = {}) {
	return {
		schemaVersion: 'hotword-publish-receipt-v1',
		common: {
			site: 'Fixture Site',
			siteId: 'fixture-site',
			game: 'Fixture Game',
			batchId: 'batch-1',
			commitSha: '',
			...((overrides.common as Record<string, unknown>) ?? {}),
		},
		interventions: [
			{
				action: 'UPDATE_PAGE',
				primaryUrl: '/guide/',
				affectedUrls: ['/guide/', '/other/'],
				reason: 'Fixture reason',
				triggerType: 'query',
				...(overrides.intervention as Record<string, unknown> ?? {}),
			},
		],
	};
}

function writeReceipt(root: string, value: unknown) {
	const file = path.join(root, 'receipt.json');
	writeFileSync(file, `${JSON.stringify(value)}\n`);
	return file;
}

function publishOptions(root: string, file: string, extra: Record<string, unknown> = {}) {
	return {
		rootDir: root,
		receiptPath: file,
		skipBuild: true,
		getHead: () => HEAD,
		deployFn: async () => 0,
		verify: async () => ({ ok: true, checks: [] }),
		submitIndexNow: async () => ({ ok: true }),
		writeLedger: async () => ({ ok: true, output: 'PASS ledger writeback batch=batch-1 interventions=iv-1 baseline=2026-08-23' }),
		...extra,
	};
}

test('parseLedgerSummary extracts indexingSync JSON from ledger stdout', () => {
	const output = ledgerOutputWithIndexingSync({
		ok: true,
		sitemapStatus: { ok: true },
		deployedAt: '2026-09-10T01:00:00.000Z',
		inspectedUrls: [
			'https://fixture.example/guide/',
			'https://fixture.example/other/',
			'https://fixture.example/broken/',
		],
		currentUrls: ['https://fixture.example/guide/'],
		manualRequestUrls: [
			{
				url: 'https://fixture.example/other/',
				reason: 'indexable_but_not_current_crawl',
			},
		],
		needsFixUrls: [
			{
				url: 'https://fixture.example/broken/',
				coverageState: 'Excluded',
				verdict: 'FAIL',
			},
		],
		inspectionErrors: [
			{
				url: 'https://fixture.example/error/',
				error: 'URL Inspection failed',
			},
		],
	});
	const summary = parseLedgerSummary(output);
	assert.equal(summary.interventionIds.join(','), 'iv-1');
	assert.equal(summary.baselineDataDate, '2026-08-23');
	assert.ok(summary.indexingSync);
	assert.equal(summary.indexingSync.ok, true);
	assert.deepEqual(summary.indexingSync.manualRequestUrls, ['https://fixture.example/other/']);
	assert.equal(summary.indexingSync.currentUrls.length, 1);
	assert.equal(summary.indexingSync.needsFixUrls[0].url, 'https://fixture.example/broken/');
	assert.equal(summary.indexingSync.inspectionErrors[0].url, 'https://fixture.example/error/');
});

test('legacy ledger stdout without indexingSync remains compatible', () => {
	const summary = parseLedgerSummary(
		'PASS ledger writeback batch=batch-1 interventions=iv-1 baseline=2026-08-23',
	);
	assert.equal(summary.interventionIds.join(','), 'iv-1');
	assert.equal(summary.baselineDataDate, '2026-08-23');
	assert.equal(summary.indexingSync, null);
	assert.equal(extractIndexingSyncFromLedgerOutput('not json\nstill fine'), null);
});

test('indexingSync enters structured result and final output lists only manual URLs', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	const currentUrl = 'https://fixture.example/guide/';
	const manualUrl = 'https://fixture.example/other/';
	const needsFixUrl = 'https://fixture.example/needs-fix/';
	const errorUrl = 'https://fixture.example/inspect-error/';
	const result = await runProductionPublish(publishOptions(root, file, {
		writeLedger: async () => ({
			ok: true,
			output: ledgerOutputWithIndexingSync({
				ok: true,
				sitemapStatus: { ok: true },
				deployedAt: '2026-09-10T01:00:00.000Z',
				inspectedUrls: [currentUrl, manualUrl, needsFixUrl, errorUrl],
				currentUrls: [currentUrl],
				manualRequestUrls: [{ url: manualUrl, reason: 'indexable_but_not_current_crawl' }],
				needsFixUrls: [{ url: needsFixUrl, coverageState: 'Excluded', verdict: 'FAIL' }],
				inspectionErrors: [{ url: errorUrl, error: 'quota exceeded' }],
			}),
		}),
	}));
	assert.equal(result.status, 'PUBLISH_COMPLETE');
	assert.ok(result.indexingSync);
	assert.deepEqual(result.indexingSync.manualRequestUrls, [manualUrl]);
	assert.equal(result.indexingSync.currentUrls.length, 1);

	const report = formatPublishResult(result);
	assert.match(report, /GSC Indexing Follow-up:/);
	assert.match(report, /Sitemap: PASS/);
	assert.match(report, /Inspection: PARTIAL/);
	assert.match(report, /Current: 1/);
	assert.match(report, /GSC Manual Request Indexing:\n- https:\/\/fixture\.example\/other\//);
	assert.match(report, /GSC Needs Fix:\n- https:\/\/fixture\.example\/needs-fix\//);
	assert.match(report, /technical blocker; Request Indexing will not fix this/);
	assert.match(report, /GSC Inspection Errors:\n- https:\/\/fixture\.example\/inspect-error\/: quota exceeded/);

	const manualBlock = report.match(
		/GSC Manual Request Indexing:\n([\s\S]*?)(?=\nGSC Needs Fix:|\nGSC Inspection Errors:|\nRESULT:)/,
	)?.[1] || '';
	assert.match(manualBlock, /- https:\/\/fixture\.example\/other\//);
	assert.doesNotMatch(manualBlock, /guide\//);
	assert.doesNotMatch(manualBlock, /needs-fix/);
	assert.doesNotMatch(manualBlock, /inspect-error/);
	// currentUrls appear as count only, never as an expanded bullet list.
	assert.doesNotMatch(report, /- https:\/\/fixture\.example\/guide\//);
	assert.match(report, /RESULT: PUBLISH_COMPLETE/);
});

test('empty manualRequestUrls prints NONE and omits empty fix/error sections', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	const result = await runProductionPublish(publishOptions(root, file, {
		writeLedger: async () => ({
			ok: true,
			output: ledgerOutputWithIndexingSync({
				ok: true,
				sitemapStatus: { ok: true },
				deployedAt: '2026-09-10T01:00:00.000Z',
				inspectedUrls: ['https://fixture.example/guide/'],
				currentUrls: ['https://fixture.example/guide/'],
				manualRequestUrls: [],
				needsFixUrls: [],
				inspectionErrors: [],
			}),
		}),
	}));
	assert.equal(result.status, 'PUBLISH_COMPLETE');
	assert.deepEqual(result.indexingSync.manualRequestUrls, []);
	const report = formatPublishResult(result);
	assert.match(report, /GSC Manual Request Indexing: NONE/);
	assert.doesNotMatch(report, /GSC Needs Fix:/);
	assert.doesNotMatch(report, /GSC Inspection Errors:/);
	assert.doesNotMatch(report, /- https:\/\/fixture\.example\/guide\//);
});

test('legacy ledger without indexingSync keeps PUBLISH_COMPLETE output without GSC block', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	const result = await runProductionPublish(publishOptions(root, file));
	assert.equal(result.status, 'PUBLISH_COMPLETE');
	assert.equal(result.indexingSync, null);
	const report = formatPublishResult(result);
	assert.doesNotMatch(report, /GSC Indexing Follow-up:/);
	assert.doesNotMatch(report, /GSC Manual Request Indexing:/);
	assert.match(report, /RESULT: PUBLISH_COMPLETE/);
});
