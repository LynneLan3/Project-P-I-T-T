import { game } from '../config/game';

export const AD_PLACEMENTS = [
	'guide-after-answer',
	'guide-mid-content',
	'guide-before-related',
	'hub-after-start-here',
] as const;

export type AdPlacement = (typeof AD_PLACEMENTS)[number];

export function isMonetizationEnabled(): boolean {
	return game.monetization?.enabled === true;
}

export function isAffiliateEnabled(): boolean {
	return isMonetizationEnabled() && game.monetization?.affiliate.enabled === true;
}

export function isAffiliateDisclosureEnabled(): boolean {
	return isAffiliateEnabled() && game.monetization?.affiliate.disclosure !== false;
}

export function isAdsEnabled(): boolean {
	return isMonetizationEnabled() && game.monetization?.ads.enabled === true;
}

/**
 * Soft runtime switch for Adsterra / Profitablerate Native Banner (AdSlot).
 * Keep false to soft-offline; flip true to restore without rewriting Zone/script IDs.
 */
export const ADSTERRA_ENABLED = false;

/** Preserved Adsterra invoke.js URL (Zone pl31055290 / unit dcd3a104…). */
export const ADSTERRA_INVOKE_SRC =
	'https://pl31055290.profitableratecpmnetwork.com/dcd3a104a99f11ab577ca98dd180ec29/invoke.js';

/** Preserved Adsterra Native Banner container id. */
export const ADSTERRA_CONTAINER_ID = 'container-dcd3a104a99f11ab577ca98dd180ec29';

/**
 * Soft runtime switch for Adsterra / Profitablerate Social Bar (AdScript).
 * Operator-enabled Zone pl31231216 — independent of Native Banner soft-offline.
 */
export const ADSTERRA_SOCIAL_BAR_ENABLED = true;

/** Adsterra Social Bar / global script (Zone pl31231216). */
export const ADSTERRA_SOCIAL_BAR_SRC =
	'https://pl31231216.profitableratecpmnetwork.com/43/d2/c8/43d2c861a84252e5b8334b896f240154.js';

/** Native Banner only when the soft switch and ads master switch are both on. */
export function isAdsterraEnabled(): boolean {
	return ADSTERRA_ENABLED && isAdsEnabled();
}

/** Social Bar only when its soft switch and ads master switch are both on. */
export function isAdsterraSocialBarEnabled(): boolean {
	return ADSTERRA_SOCIAL_BAR_ENABLED && isAdsEnabled();
}

/** Ads load only on production builds (hostname checked client-side in Autotag / AdScript). */
export function isAdRuntimeEnabled(): boolean {
	return isAdsEnabled() && import.meta.env.PROD;
}

/** Social Bar scripts load only when soft switch + ads + production. */
export function isAdsterraSocialBarRuntimeEnabled(): boolean {
	return isAdsterraSocialBarEnabled() && import.meta.env.PROD;
}

export function adScriptSrc(): string | undefined {
	if (!isAdsterraSocialBarEnabled()) return undefined;
	return ADSTERRA_SOCIAL_BAR_SRC;
}

/** When Adsterra Native Banner is off, AdSlot renders nothing (no empty box, no CLS). */
export function adSlotDatasetFor(
	adsEnabled: boolean,
	placement: AdPlacement,
): { 'data-ad-slot': AdPlacement } | null {
	if (!AD_PLACEMENTS.includes(placement)) return null;
	if (!adsEnabled) return null;
	return { 'data-ad-slot': placement };
}

export function adSlotDataset(placement: AdPlacement): { 'data-ad-slot': AdPlacement } | null {
	return adSlotDatasetFor(isAdsterraEnabled(), placement);
}
