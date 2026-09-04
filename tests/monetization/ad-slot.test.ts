import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
	ADSTERRA_CONTAINER_ID,
	ADSTERRA_ENABLED,
	ADSTERRA_INVOKE_SRC,
	adSlotDataset,
	adSlotDatasetFor,
	isAdsterraEnabled,
	type AdPlacement,
} from '../../src/lib/monetization';

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

test('Adsterra soft-offline: switch off, config preserved, slots render nothing', () => {
	assert.equal(ADSTERRA_ENABLED, false);
	assert.equal(isAdsterraEnabled(), false);
	assert.equal(adSlotDataset('guide-before-related'), null);
	assert.equal(adSlotDataset('hub-after-start-here'), null);
	assert.equal(
		ADSTERRA_INVOKE_SRC,
		'https://pl31055290.profitableratecpmnetwork.com/dcd3a104a99f11ab577ca98dd180ec29/invoke.js',
	);
	assert.equal(ADSTERRA_CONTAINER_ID, 'container-dcd3a104a99f11ab577ca98dd180ec29');
});

test('AdSlot keeps Adsterra unit wiring behind the soft switch', () => {
	const adSlot = readFileSync(path.join(ROOT, 'src/components/AdSlot.astro'), 'utf8');
	const monetization = readFileSync(path.join(ROOT, 'src/lib/monetization.ts'), 'utf8');
	assert.match(adSlot, /data-cfasync="false"/);
	assert.match(adSlot, /ADSTERRA_INVOKE_SRC/);
	assert.match(adSlot, /ADSTERRA_CONTAINER_ID/);
	assert.match(
		monetization,
		/https:\/\/pl31055290\.profitableratecpmnetwork\.com\/dcd3a104a99f11ab577ca98dd180ec29\/invoke\.js/,
	);
	assert.match(monetization, /container-dcd3a104a99f11ab577ca98dd180ec29/);
	assert.match(monetization, /ADSTERRA_ENABLED\s*=\s*false/);
});

test('default Guide slot is before related, never before Quick Answer', () => {
	const pageTitle = readFileSync(path.join(ROOT, 'src/components/overrides/PageTitle.astro'), 'utf8');
	const footer = readFileSync(path.join(ROOT, 'src/components/overrides/Footer.astro'), 'utf8');
	assert.doesNotMatch(pageTitle, /AdSlot/);
	assert.match(footer, /placement="guide-before-related"/);
});
