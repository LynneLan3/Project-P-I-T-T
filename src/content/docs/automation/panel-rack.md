---
title: How to Use the Panel Rack in Project P.I.T.T.
description: "Updated for 1.0.7: bind the interact key on Panel Rack, use the auto dispense toggle, and understand how dispensing differs from 1.0.6 manual-only behavior."
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
  - project-pitt-how-to-get-panel-rack-upgrades
  - project-pitt-how-to-use-panel-rack
  - project-pitt-panel-rack-breaks-game
quickAnswer: "Updated for 1.0.7 — bind the interact key and use the auto dispense toggle; 1.0.6 required pressing the dedicated key for each panel with no auto-dispense, while 1.0.7 lets you turn automatic dispensing on or off."
related:
  - automation
  - shift-scheduler
  - trade-terminal
  - troubleshooting
  - updates
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
    slug: updates
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
changeSummary: "Updated for 1.0.7 interact binding, auto dispense toggle, and 1.0.6 vs 1.0.7 behavior comparison."
eyebrow: Panel Rack
facts:
  -
    label: Unlock
    value: Check the current in-game unlock UI for your save.
  -
    label: 1.0.7 binding
    value: Panel Rack can bind the interact key in 1.0.7.
  -
    label: Auto dispense
    value: "New auto dispense toggle — turn automatic dispensing on or off in 1.0.7."
  -
    label: vs 1.0.6
    value: "1.0.6 required manual press for each panel; 1.0.7 adds optional auto dispense."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/panel-rack.md
-->
## Quick Answer
Updated for 1.0.7 — The Panel Rack is unlocked and upgraded through the in‑game unlock UI. In 1.0.7 the rack can use your interact key and adds an Auto Dispense toggle you can turn on or off. If Auto Dispense is on, the rack will automatically present the next panel after placement; if off, you must press the interact key to get the next panel. Old saves may behave differently; see Old Saves and Missing Rack.

## How to Unlock the Panel Rack
- Open the in‑game unlock UI and purchase the Panel Rack like other buildable automation items.
- There is no confirmed public formula for a Tier 3 unlock (check the unlock UI in your game for exact requirements).

## How to Get Panel Rack Upgrades
- Upgrades appear in the same in‑game unlock or upgrade UI used for other automation tools.
- Confirm upgrade availability and costs in the UI; exact Tier 3 recipe has not been publicly verified.

## How to Use the Panel Rack in 1.0.7
- Place the Panel Rack from your build menu after unlocking.
- Equip the interact key (see next section) or use the rack with the default interact binding.
- If Auto Dispense is off: press the interact key to have the rack dispense a single panel, place the panel, then press interact again for another panel.
- If Auto Dispense is on: dispense once and the rack will automatically present the next panel after you place one.
- Updated for 1.0.7: the Auto Dispense toggle gives you explicit control over automatic handing out of panels.

Interact-key binding
- In 1.0.7 the rack can use your interact key (the same binding used for most object interactions). You can rebind this in your controls if desired.
- The rack no longer requires a separate dedicated keybind in 1.0.7; it uses the interact binding or the toggle state to determine behavior.

## Auto Dispense Toggle
- Location: the Auto Dispense toggle is available on the rack’s context menu or in the rack UI after placement.
- How to turn it on/off: open the rack UI (interact), flip the Auto Dispense toggle to ON to enable continuous dispensing or OFF to require manual interact presses.
- Effect: ON = rack automatically readies the next panel after placement. OFF = only dispenses when you press the interact key.

## Why Panels Keep Dispensing
- The most common cause is Auto Dispense being set to ON. When enabled the rack will constantly hand out panels as you place them or as long as conditions for dispensing are met.
- If you think panels are "lost," verify Auto Dispense is OFF and watch the rack’s inventory; panels dispensed but not placed may be removed or used by other systems.

## 1.0.6 vs 1.0.7 Behavior
- 1.0.6:
  - Panel Rack had a dedicated keybind / distinct interact binding.
  - After placing a panel, the rack did NOT auto-dispense the next panel.
  - You pressed the Panel Rack key each time to dispense the next panel.
- 1.0.7 (NEW):
  - The rack can use the standard interact key binding (no separate default required).
  - A new Auto Dispense toggle lets players choose automatic dispensing or manual dispensing.
  - Do not assume 1.0.6 behavior is the current default — 1.0.7 adds the toggle and interact-key integration.

## Old Saves and Missing Rack
- Some players report differences when loading older saves and the rack may behave or appear differently after an update.
- Exact migration behavior is unconfirmed; if your rack is missing or acting oddly, check the unlock UI and rebuild if necessary.

## Common Mistakes
- Leaving Auto Dispense ON when you intended to be manual.
- Assuming 1.0.6 manual-only behavior still applies.
- Not checking the unlock/upgrade UI for required parts or tiers.
- Rebinding interact without confirming the rack responds to the new binding.

## Automation Use
- Use the Panel Rack in build sequences to speed repetitive panel placement.
- Combine with other automation items and the [x300 Combo guide](/x300-combo/) for high-throughput builds.
- For broader automation setups see [Automation](/automation/).

## FAQ
### How to Use the Panel Rack in Project P.I.T.T. FAQ
- Q: Why do panels keep coming out?
  - A: Auto Dispense is likely ON. Turn it OFF in the rack UI to stop automatic dispensing.
- Q: I updated from 1.0.6 — why is behavior different?
  - A: 1.0.7 added the Auto Dispense toggle and standardized interact-key binding; manual-only behavior from 1.0.6 is no longer the only option.
- Q: Where do I unlock upgrades?
  - A: Check the in‑game unlock UI. There’s no confirmed public Tier 3 formula.

For troubleshooting specific issues see [Troubleshooting](/troubleshooting/). For patch notes and other changes see the [Updates hub](/updates/).

## Related Guides
- [Automation](/automation/)
- [Troubleshooting](/troubleshooting/)
- [Updates hub](/updates/)
- [x300 Combo guide](/x300-combo/)
