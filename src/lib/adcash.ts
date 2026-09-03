import { isAdsEnabled } from './monetization';

/** Adcash Autotag zone for the site-wide Auto revenue experiment. */
export const ADCASH_AUTOTAG_ZONE_ID = 'ds1eyc8hds';

export const ADCASH_LIB_SRC = 'https://acscdn.com/script/aclib.js';

/** Ads switch must be on for Autotag output. */
export function isAdcashAutotagEnabled(): boolean {
	return isAdsEnabled();
}
