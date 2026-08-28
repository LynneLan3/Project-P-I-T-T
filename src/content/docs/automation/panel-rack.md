---
title: How to Use the Panel Rack in Project P.I.T.T.
description: "How to use the Panel Rack after recent operation changes, including current interaction prompts, panel retrieval, unlock questions, old saves, and automation flow."
category: automation
slug: panel-rack
status: confirmed
featured: true
role: core
assetType: article
sidebar:
  order: 6
intents:
  - project-pitt-panel-rack
  - project-pitt-how-to-use-panel-rack
  - project-pitt-panel-rack-tier-3
quickAnswer: "The Panel Rack is a current automation tool whose operation changed in recent versions; use the in-game interaction prompt, do not assume automatic panel spawning, and check the current unlock UI and upstream automation state for your save."
related:
  - automation
  - shift-scheduler
  - trade-terminal
  - troubleshooting
  - x300-combo
relations:
  -
    slug: automation
    type: related
  -
    slug: shift-scheduler
    type: related
  -
    slug: trade-terminal
    type: related
  -
    slug: troubleshooting
    type: related
  -
    slug: x300-combo
    type: next-step
sources:
  -
    type: steam
    title: Steam Community automation discussion
    url: https://steamcommunity.com/app/4026250/discussions/0/572666820169834610/
  -
    type: steam
    title: Steam Community developer FAQ and updates
    url: https://steamcommunity.com/app/4026250/
changeSummary: "New launch-window guide for current Panel Rack operation, panel retrieval, unlock/tier questions, old saves, and automation use."
eyebrow: Panel Rack
facts:
  -
    label: Tool
    value: "Current automation tool in the Automation → Shift Scheduler → Trade Terminal → Panel Rack → x300 chain."
  -
    label: Current operation
    value: "Recent versions changed how the Panel Rack operates; older instructions may be stale."
  -
    label: Panel retrieval
    value: Panel spawning and retrieval are version-sensitive and are not guaranteed to happen automatically.
  -
    label: Unlocks
    value: Check the in-game unlock/progression UI rather than assuming tier requirements or costs.
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/panel-rack.md
-->
Direct Answer

> After 1.0.6 the Panel Rack uses a dedicated Panel Rack key (use your current mapping). After you place a panel the rack will not auto-dispense another one — press the Panel Rack key again to obtain the next panel.

Quick Steps

1. Place one panel from the rack as normal.
2. Press the dedicated Panel Rack key (your current mapping) to get the next panel.
3. Repeat step 2 for each panel you want to retrieve.

Prerequisites or What You Need

- Panel Rack is an automation tool found under Automation → Shift Scheduler → Trade Terminal → Panel Rack → x300 Combo.
- Make sure the Panel Rack key is mapped in your controls; the key is a dedicated binding and uses your current mapping.
- Tier/unlock status: check the in-game unlock UI for whether the rack (and higher tiers) are available.

Full Explanation

- Keybind behavior (verified for 1.0.6): Panel Rack now has its own dedicated keybind. That key is the explicit control to dispense the next panel after you place one.
- Dispense change (verified for 1.0.6): The rack no longer automatically provides the next panel after a placement. You must press the dedicated Panel Rack key each time you want another panel.
- Where it fits: Panel Rack remains under Automation → Shift Scheduler → Trade Terminal → Panel Rack → x300 Combo.
- Unlock/tier questions: there is no reliable, community-confirmed formula for Tier 3 unlock requirements available. Use the in-game unlock UI to see exact prerequisites and costs for your save.
- Old-save behavior: players have reported differences between older saves and the current update state. Exact migration rules or whether older saves automatically gain the Panel Rack are not confirmed.

Common Mistakes

- Expecting automatic dispense: assuming panels will appear without pressing the Panel Rack key (this was changed in 1.0.6).
- Not checking key mapping: the rack uses its own binding — if it’s unbound you won’t get panels.
- Relying on outdated info: older guides or demos may describe automatic dispensing; full-release behavior changed.
- Assuming unlock conditions: attempting to follow a single community “formula” for Tier 3 — no universally confirmed formula exists.

What To Do Next

- Verify and bind the Panel Rack key in your control settings.
- Test on a rack: place a panel, press the Panel Rack key to confirm the next panel dispenses.
- If the rack doesn’t appear in your build menu, open the in-game unlock/progression UI to confirm availability.
- If you run into problems, consult [Troubleshooting](/troubleshooting/) for general checks and diagnostics.

FAQ

Q: Why doesn’t another panel appear automatically after I place one?
A: As of 1.0.6 this is intended behavior: the rack no longer auto-dispenses the next panel. Press the dedicated Panel Rack key (your current mapping) to obtain the next panel.

Q: What exactly does the Panel Rack key do?
A: The key is the explicit dispense command for the Panel Rack. After placing a panel, press that key to receive the next panel.

Q: Why isn’t the Panel Rack unlocked for me / how do I unlock Tier 3?
A: Unlock conditions vary and an exact Tier 3 prerequisite is not reliably confirmed by the community. Check the in-game unlock UI for your save to see current requirements.

Q: My save is from before 1.0.6 and the rack is different — is that a bug?
A: Players report older-save/update-state differences, but exact migration behavior isn’t confirmed. Check the unlock UI and [Troubleshooting](/troubleshooting/) if things look missing.

Related Guides

- [Automation](/automation/)
- [the x300 Combo guide](/x300-combo/)
- [Troubleshooting](/troubleshooting/)
