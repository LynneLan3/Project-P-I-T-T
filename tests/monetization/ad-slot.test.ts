import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { adSlotDatasetFor, type AdPlacement } from '../../src/lib/monetization';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('ads disabled returns no slot dataset', () => {
	assert.equal(adSlotDatasetFor(false, 'guide-before-related'), null);
	assert.equal(adSlotDatasetFor(false, 'hub-after-start-here'), null);
});

test('ads enabled returns a stable data-ad-slot hook', () => {
	assert.deepEqual(adSlotDatasetFor(true, 'guide-before-related'), {
		'data-ad-slot': 'guide-before-related',
	});
	assert.deepEqual(adSlotDatasetFor(true, 'guide-after-answer'), {
		'data-ad-slot': 'guide-after-answer',
	});
	assert.deepEqual(adSlotDatasetFor(true, 'guide-mid-content'), {
		'data-ad-slot': 'guide-mid-content',
	});
	assert.deepEqual(adSlotDatasetFor(true, 'hub-after-start-here'), {
		'data-ad-slot': 'hub-after-start-here',
	});
});

test('unknown placement produces no slot', () => {
	assert.equal(adSlotDatasetFor(true, 'not-a-slot' as AdPlacement), null);
});

test('AdSlot contains the configured Adsterra unit', () => {
	const adSlot = readFileSync(path.join(ROOT, 'src/components/AdSlot.astro'), 'utf8');
	assert.match(adSlot, /data-cfasync="false"/);
	assert.match(
		adSlot,
		/src="https:\/\/pl31055290\.profitableratecpmnetwork\.com\/dcd3a104a99f11ab577ca98dd180ec29\/invoke\.js"/,
	);
	assert.match(adSlot, /id="container-dcd3a104a99f11ab577ca98dd180ec29"/);
});

test('default Guide slot is before related, never before Quick Answer', () => {
	const pageTitle = readFileSync(path.join(ROOT, 'src/components/overrides/PageTitle.astro'), 'utf8');
	const footer = readFileSync(path.join(ROOT, 'src/components/overrides/Footer.astro'), 'utf8');
	assert.doesNotMatch(pageTitle, /AdSlot/);
	assert.match(footer, /placement="guide-before-related"/);
});
