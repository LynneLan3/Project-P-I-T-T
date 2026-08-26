---
title: How to Use the Shift Scheduler in Project P.I.T.T.
description: "How to use the Shift Scheduler with fans, magnets, remote outputs, and timed or batch automation for controlled lanes and x300 Combo setups."
category: automation
slug: shift-scheduler
status: confirmed
featured: true
role: core
assetType: article
sidebar:
  order: 4
intents:
  - project-pitt-shift-scheduler
  - project-pitt-how-to-use-shift-scheduler
  - project-pitt-timed-batch-automation
quickAnswer: "The Shift Scheduler is a full-release automation tool for timed or batch releases; connect it to tested fans, magnets, or remote outputs, then use it for controlled lanes and x300 Combo attempts without assuming it guarantees a combo."
related:
  - automation
  - trade-terminal
  - panel-rack
  - x300-combo
relations:
  -
    slug: automation
    type: related
  -
    slug: x300-combo
    type: next-step
  -
    slug: trade-terminal
    type: related
  -
    slug: panel-rack
    type: related
sources:
  -
    type: steam
    title: Steam Community automation discussion
    url: https://steamcommunity.com/app/4026250/discussions/0/572666820169834610/
  -
    type: steam
    title: Steam Community developer FAQ and updates
    url: https://steamcommunity.com/app/4026250/
changeSummary: "New launch-window guide for Shift Scheduler connections, timed/batch behavior, current-version fixes, and x300 automation use."
eyebrow: Shift Scheduler
facts:
  -
    label: Tool
    value: Current full-release automation tool for controlled releases.
  -
    label: Connections
    value: "Commonly connected to fans, magnets, and remote outputs."
  -
    label: Timing
    value: Supports timed or batch behavior for tested automation lanes.
  -
    label: Current version
    value: Recent version changes fixed Shift Scheduler inconsistencies.
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/shift-scheduler.md
-->
Direct Answer
> The Shift Scheduler is the full-release automation device for timed or conditional releases in Project P.I.T.T. — use it to trigger lanes, fans, magnets and remote signals once you’ve tested the physical lane. It supports both timed and batch-style behavior; current full-release behavior is stable after recent fixes, but it will not magically create a combo — you must validate the lane and sequence first.

Quick Steps
1. Place the Shift Scheduler where it can send a signal to the target lane or control panel.
2. Connect its output to the actuator(s) or control input for the lane (fans, magnets, release points) and verify the signal path reaches remote racks if needed.
3. Choose the scheduler mode you want (timed or batch/conditional) and set your release conditions — then run a test pass with inert items to confirm the physical lane behaves as expected.
4. Iterate: adjust timing/conditions, check buffers and item flow, and only enable for live combo attempts after the lane passes tests.

Prerequisites or What You Need
- A tested physical lane (fans/magnets/rails) that reliably moves items when triggered.
- A complete signal path between the Shift Scheduler and the controlled actuators or remote panel/rack.
- Enough buffer/storage or staging so batch releases or timed pulses don’t clog or starve the lane.
- Awareness that the Shift Scheduler is part of Automation → Shift Scheduler → x300 Combo flow; use neighboring tools like the [Trade Terminal](/trade-terminal/) or [Panel Rack](/panel-rack/) for supporting automation tasks.

Full Explanation
- What it is: The Shift Scheduler is the game’s in‑world automation node for scheduling releases or conditional shifts of items/actuators. It sits inside the Automation toolchain and is intended to coordinate repeated actions without manual input.
- Timed vs batch/conditional behavior: Community and current full-release documentation indicate the Scheduler supports both release-on-time behavior and conditional/batch release behavior. In the current version, these modes act consistently with the settings you choose — recent updates fixed earlier inconsistent triggering. Use timed mode when you want a regular pulse; use batch/conditional when you want releases tied to counts or state.
- What to connect: Connect the Scheduler’s output to the lane’s control inputs — fans and magnets are commonly connected to move items into/out of lanes. The Scheduler can also send signals to remote racks or panels when the in‑game signal path is properly routed.
- Fans and magnets: Players consistently report that fans and magnets behave like any other actuator when driven by the Scheduler: they will affect item movement only if placed and tuned in the lane. The Scheduler triggers them; correct physical placement and strength of fans/magnets still determines whether items move as desired.
- Remote usage: The Scheduler can trigger remote devices when a valid signal route exists (through wiring, panel racks or intermediary automation nodes). Always confirm the route with a test pulse — remote triggers will not work if the signal path is interrupted or gated.
- Automation and x300 combos: The intended workflow is Automation → Shift Scheduler → x300 Combo. The Scheduler is useful for controlled lanes and for producing repeatable states needed by x300 combos, but the community consensus is clear: it helps execute combos after the lane and sequence are proven — it does not guarantee a combo on its own.

Common Mistakes
- Skipping lane testing: Expecting the Scheduler to fix a poorly designed physical lane. Test the lane manually before automating.
- Missing or broken signal path: Remote triggers fail when wiring, racks or panels aren’t actually connected.
- Mixing modes without testing: Switching between timed and batch modes without a dry run leads to unexpected releases.
- Ignoring buffers: Not providing staging/buffer space causes jams during batch releases.
- Assuming old behavior: Prior versions had sporadic triggering; the current release fixed many issues — if you’re following old community tricks, re-test them in the current version.

What To Do Next
1. Run dry tests: trigger fans/magnets manually and with single Scheduler pulses to confirm the physical response.
2. Start with conservative settings: small batches or slow timing while validating flow.
3. Use the Scheduler for a lane only after it reliably passes manual tests; then gradually increase automation complexity toward a combo attempt.
4. If you need supporting tools, consult [Panel Rack](/panel-rack/) for signal routing and the [Trade Terminal](/trade-terminal/) for interacting with item flows outside the lane.

Related Guides
- [Automation](/automation/)
- [Trade Terminal](/trade-terminal/)
- [Panel Rack](/panel-rack/)
- [x300 Combo](/x300-combo/)

FAQ
Q: Why does my Shift Scheduler seem to not do anything?
A: Most commonly the signal path to the actuators is missing or the physical lane isn’t responding. Confirm wiring/panel connections and manually trigger the actuators to verify the lane before relying on scheduled triggers. Recent version fixes reduced random non‑triggers; if behavior still seems wrong, double‑check connections and mode settings.

Q: Can the Scheduler drive fans and magnets remotely?
A: Yes — current full‑release behavior supports remote triggers when a valid signal route exists. Players consistently report success when the signal is routed through the correct panels/racks and the remote device is reachable.

Q: Will using the Shift Scheduler guarantee an x300 combo?
A: No. The Scheduler helps execute repeatable sequences, but it does not create a combo by itself. Current community findings indicate it’s useful for x300 combo setups only after the physical lane and timing have been validated.

Q: Should I use timed or batch mode?
A: Use timed mode when you want regular, predictable pulses. Use batch/conditional mode when releases should wait for a count or a state. Current full‑release behavior respects the chosen mode consistently; pick the mode that matches how the lane is designed and test thoroughly.

Q: I used community tips from older posts — could they be wrong now?
A: Possibly. Recent version changes fixed inconsistencies with the Shift Scheduler; older recipes or workarounds may rely on pre‑fix behavior. Re-test any older method before assuming it still works.
