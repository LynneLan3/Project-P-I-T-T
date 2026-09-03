import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
	ADCASH_AUTOTAG_ZONE_ID,
	ADCASH_LIB_SRC,
	isAdcashAutotagEnabled,
} from '../../src/lib/adcash';
import { isAdsEnabled } from '../../src/lib/monetization';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('Adcash Autotag zone and lib URL are fixed for this experiment', () => {
	assert.equal(ADCASH_AUTOTAG_ZONE_ID, 'ds1eyc8hds');
	assert.equal(ADCASH_LIB_SRC, 'https://acscdn.com/script/aclib.js');
	assert.equal(isAdcashAutotagEnabled(), isAdsEnabled());
});

test('Adcash Autotag mounts once in shared Head and GameShell (not Display zone 12101514)', () => {
	const head = readFileSync(path.join(ROOT, 'src/components/overrides/Head.astro'), 'utf8');
	const shell = readFileSync(path.join(ROOT, 'src/components/experience/GameShell.astro'), 'utf8');
	const autotag = readFileSync(path.join(ROOT, 'src/components/AdcashAutotag.astro'), 'utf8');
	const adcash = readFileSync(path.join(ROOT, 'src/lib/adcash.ts'), 'utf8');

	assert.match(head, /AdcashAutotag/);
	assert.match(shell, /AdcashAutotag/);
	assert.match(autotag, /id="aclib"/);
	assert.match(autotag, /runAutoTag/);
	assert.match(autotag, /ADCASH_AUTOTAG_ZONE_ID|zoneId/);
	assert.match(adcash, /ds1eyc8hds/);
	assert.match(adcash, /acscdn\.com\/script\/aclib\.js/);
	assert.doesNotMatch(adcash, /12101514/);
	assert.doesNotMatch(adcash, /jjbjdferx/);
	assert.doesNotMatch(autotag, /runBanner/i);
});

test('fixed Adsterra banner unit remains in AdSlot (no overlapping global Auto script present)', () => {
	const adSlot = readFileSync(path.join(ROOT, 'src/components/AdSlot.astro'), 'utf8');
	assert.match(
		adSlot,
		/src="https:\/\/pl31055290\.profitableratecpmnetwork\.com\/dcd3a104a99f11ab577ca98dd180ec29\/invoke\.js"/,
	);
	assert.match(adSlot, /id="container-dcd3a104a99f11ab577ca98dd180ec29"/);
	assert.doesNotMatch(adSlot, /popunder|interstitial|aclib|runAutoTag/i);
});
