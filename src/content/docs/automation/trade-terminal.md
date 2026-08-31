---
title: How to Use the Trade Terminal in Project P.I.T.T.
description: "Updated for 1.0.7 — Use the Project P.I.T.T. Trade Terminal to vacuum scene items; long-press the tool lever to wipe placed tools. Right-side switch vacuums; Pause Menu Clear Items is emergency fallback (no refund)."
category: automation
slug: trade-terminal
status: confirmed
featured: true
role: core
assetType: article
sidebar:
  order: 3
intents:
  - project-pitt-trade-terminal
  - project-pitt-trading-terminal
  - project-pitt-how-to-use-trade-terminal
  - project-pitt-clear-items
  - project-pitt-remove-items
  - project-pitt-wipe-placed-tools
quickAnswer: "Updated for 1.0.7: The Trade Terminal vacuums scene items (long-press the tool lever to wipe all placed tools); the player-tested right-side switch can vacuum items, and Pause Menu → Clear Items is an emergency no-refund fallback."
related:
  - automation
  - x300-combo
  - shift-scheduler
  - updates
relations:
  -
    slug: automation
    type: related
  -
    slug: x300-combo
    type: related
  -
    slug: updates
    type: related
sources:
  -
    type: steam
    title: "Project P.I.T.T. Steam Community — Update 1.0.5"
    url: https://steamcommunity.com/app/4026250/
  -
    type: steam
    title: "Steam Community discussion — Cash Register pileup and Trading Terminal"
    url: https://steamcommunity.com/app/4026250/discussions/0/587309530805892814
changeSummary: "Updated for 1.0.7 wipe-all placed tools, Gambling Crate cleanup, and destructive cleanup guidance."
eyebrow: Trade Terminal
facts:
  -
    label: Updated
    value: "Updated for 1.0.7 — long-pressing the tool lever will wipe all placed tools; Trade Terminal / Clear All now also handles Gambling Crates."
  -
    label: Terminal action
    value: Trade Terminal clears and vacuums products from the scene.
  -
    label: Right-side switch
    value: "Player-tested (Steam report): the right-side switch can vacuum products."
  -
    label: Pause Menu fallback
    value: "Official 1.0.5: Pause Menu → Clear Items removes stranded items as an emergency fallback; this does not refund resources."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/trade-terminal.md
-->
Direct Answer

> Updated for 1.0.7 — Quick answer: Long-press the Trade Terminal’s tool lever to wipe all placed tools. The terminal’s normal Clear/Vacuum action (right-side switch) still removes loose products, and the Pause Menu → Clear Items emergency option remains (no refund). In 1.0.7 the terminal’s Clear All also removes Gambling Crates.

Quick Steps

1. Approach the Trade Terminal.
2. Long-press the tool lever to perform a wipe-all of placed tools.
3. Use the right-side switch to vacuum loose products normally.
4. If things are still stuck, use Pause Menu → Clear Items as an emergency fallback (no refund).

Prerequisites or What You Need

- Access to a Trade Terminal (in-game).
- A controller or input that supports a distinguishable long press on the tool lever.
- Awareness that wipe-all is destructive: it removes placed tools and cannot refund spent resources.

Full Explanation

- What the long-press does: Updated for 1.0.7, a long press on the Trade Terminal tool lever triggers a wipe-all that removes placed tools from the scene. This is intended for destructive cleanup before rebuilding or when tools block progress.
- Normal Trade Terminal use: The terminal’s right-side switch is used to vacuum loose products and cleared items from the scene. This behavior is player-tested and remains the routine, non-destructive cleanup method.
- Gambling Crates: As of 1.0.7, the Trade Terminal’s Clear All (wipe/clear actions) now handles Gambling Crates as well. You can include them in a Clear All; this is a confirmed change in 1.0.7.
- Pause Menu → Clear Items: Official 1.0.5 behavior still applies — the Pause Menu Clear Items option will remove items from the scene as an emergency fallback but provides no refunds and is not intended as a primary cleanup tool.
- Destructive vs non-destructive: Use the right-side switch or short clears when you only need to remove loose products. Use long-press wipe-all when you want to remove placed tools and crates as part of a rebuild or full teardown.

Common Mistakes

- Expecting refunds: Using wipe-all or Pause Menu → Clear Items does not refund resources. This is destructive removal.
- Confusing inputs: A short press and a long press on the tool lever are different actions. Long press = wipe-all; short press = normal tool interaction (do not expect wipe-all).
- Relying on Clear Items for targeted cleanup: Pause Menu clear is an emergency fallback, not a precise method for selective cleanup.
- Assuming old Demo behavior or coordinates: Do not rely on demo-era specifics or invented room names — follow in-game prompts and the terminal’s current controls.

What To Do Next

- If you plan to rebuild, long-press the tool lever to remove tools first, then re-place tools in the new layout.
- If only loose products block belts or machines, try the right-side switch vacuum first to avoid destructive teardown.
- If items persist after standard clears, use Pause Menu → Clear Items as a last resort (no refund).

Related Guides

- [Automation](/automation/)
- [x300 combo guide](/x300-combo/)
- [Updates hub](/updates/)

FAQ

Q: How do I wipe all placed tools?
A: Updated for 1.0.7 — long-press the Trade Terminal’s tool lever. This triggers a wipe-all that removes placed tools from the scene. This action is destructive and does not refund spent resources.

Q: Does wipe-all remove Gambling Crates?
A: Yes. In 1.0.7 the Trade Terminal’s Clear All/wipe functions handle Gambling Crates as part of the cleared items.

Q: When should I use wipe-all vs normal cleanup?
A: Use the right-side switch (vacuum) for routine removal of loose products. Use long-press wipe-all when you need to teardown placed tools or perform a full rebuild. Use Pause Menu → Clear Items only as an emergency fallback; it removes items without refund.
