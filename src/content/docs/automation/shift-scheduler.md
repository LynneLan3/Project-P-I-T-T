---
title: "Project P.I.T.T. Shift Scheduler: how to use it, Duck Crank block"
description: "Updated for 1.0.6: Use Project P.I.T.T. Shift Scheduler to schedule automatic or switchable tools; it will not act as a button for the Manual Duck Crank. Re-test old reports."
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
  - project-pitt-shift-scheduler-not-working
  - project-pitt-scheduler-remote
  - project-pitt-scheduler-timer
  - project-pitt-manual-duck-crank-scheduler
quickAnswer: "The Shift Scheduler controls supported automatic or switchable tools; it is not a button-press replacement for a Manual Duck Crank. Community testing shows Remote can work with the Scheduler, and official 1.0.6 notes only say: \"Fixed the shift scheduler inconsistencies.\" Re-test older reports."
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
    title: "Steam Community discussion — Shift Scheduler, Manual Duck Crank, Remote"
    url: https://steamcommunity.com/app/4026250/discussions/0/587309829717073562/
  -
    type: steam
    title: Steam Community developer Update 1.0.6
    url: https://steamcommunity.com/app/4026250/
  -
    type: other
    title: "Project P.I.T.T. Tools & Upgrades — Cannon"
    url: https://projectpitt.online/guides/tools-and-upgrades/
  -
    type: other
    title: "Project P.I.T.T. All Items and Tools List — Cannon"
    url: https://ninewiki.com/item/project-p-i-t-t-all-items-and-tools-list/
changeSummary: "New launch-window guide for Shift Scheduler connections, timed/batch behavior, current-version fixes, and x300 automation use."
eyebrow: Shift Scheduler
facts:
  -
    label: Tool
    value: "Manual Duck Crank is unsupported for Scheduler use; Cannon is documented as linkable in current guides, while Fan and Magnet remain community examples to verify."
  -
    label: Connections
    value: "Remote has community-confirmed compatibility; other automatic or switchable tools require in-game verification."
  -
    label: Timing
    value: "Used for timed or batch-release setups such as gathering output before releasing it together; no undocumented timer values are stated."
  -
    label: Current version
    value: "Updated for 1.0.6 — official note: \"Fixed the shift scheduler inconsistencies.\" The note does not specify the changed behavior."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/shift-scheduler.md
-->
## Quick Answer

Updated for 1.0.6

- Manual Duck Crank: Not supported — the Shift Scheduler is not a button-press replacement for manual machines like the Manual Duck Crank. A Steam player test showed no response when placed beside that crank.
- Supported / switchable tools: Community evidence shows the Scheduler can be used with switchable/automatic tools (examples below). Cannon is documented by two independent up-to-date guides; Remote is community-confirmed to work. Fans and Magnets have community reports but should be verified in-game.
- Remote: Community testing reports the Remote works with the Shift Scheduler.
- 1.0.6 wording: Official patch notes say exactly: “Fixed the shift scheduler inconsistencies.” Re-test old pre-1.0.6 reports against the current build.

Compatibility summary

| Tool | Status | Evidence |
| --- | --- | --- |
| Manual Duck Crank | Unsupported for this use case | Steam player test |
| Remote | Community-confirmed | Steam discussion |
| Cannon | Cross-source confirmed | Two current guides |
| Fan | Community evidence; verify in-game | Steam discussion example |
| Magnet | Community evidence; verify in-game | Steam discussion example |

## How to Use the Shift Scheduler

Use the in-game connection/testing approach: attach the Scheduler to a tool or a Remote setup that is known to be switchable/automatic, then test it in-game to confirm behavior. The Scheduler is intended to toggle or schedule things that can be turned on and off (community guidance); do not expect it to operate manual, one-off button machines. For more on automated setups, see [Automation](/automation/).

## Why It Does Not Work on the Manual Duck Crank

A Steam discussion report shows placing the Scheduler beside the Manual Duck Crank produced no effect. Replies in that thread distinguish machines (manual/button-press devices) from switchable/automatic tools and conclude the Scheduler targets the latter. That Steam test is the verified evidence for the Duck Crank being unsupported for this use case.

## What Tools Work With the Shift Scheduler?

- Cannon: Confirmed by two independent, current guides as manually activatable or Scheduler-linkable.
- Remote: Community-confirmed to work with the Scheduler.
- Fan and Magnet: Mentioned in community replies as examples of things players have used; treat these as community evidence and verify in your game.

Do not assume other devices work; the only cross-source/cross-community evidence is listed above. Re-test any community reports in your own build.

## Shift Scheduler + Remote

Community testing reported in the same Steam discussion indicates Remote can be controlled by the Shift Scheduler. If you plan to use a Remote, connect and test the Remote + Scheduler arrangement in your save — the community report supports compatibility but does not specify interface or behavior details.

## What Is It Actually Useful For?

Community use cases: split off part of a machine’s output, collect or hold product, then release that inventory together for a larger combo or batch release. In practice players use the Scheduler to build controlled lanes and timed/batch release setups that help with combo strategies — a practical next step for players interested in large combos is [x300 Combo](/x300-combo/). Keep testing any particular lane or batch setup in-game to confirm it behaves as you expect.

## 1.0.6 Update Note

Official Steam Community Update 1.0.6 (26 August 2026) states exactly: “Fixed the shift scheduler inconsistencies.”

Old community reports made before 1.0.6 should be re-tested on the current build; the patch note does not specify which behaviors were changed.

## FAQ

### Will the Shift Scheduler operate the Manual Duck Crank?
No. A Steam player test shows no response when the Scheduler was placed beside the Manual Duck Crank; the Scheduler is intended for switchable/automatic tools, not manual button-press machines.

### Does the Remote work with the Shift Scheduler?
Yes — community testing reported in the Steam discussion indicates the Remote can be used with the Scheduler. Always connect and test in your game to confirm the behavior.

### Can the Scheduler control a Cannon?
Cannon control via the Scheduler is documented by two independent current guides; that is cross-source confirmed. Verify in-game for your setup.

### Do Fans and Magnets work with the Scheduler?
Fans and Magnets are mentioned in community replies as examples players use; this is community evidence. Treat them as “verify in-game” — don’t assume universal behavior across builds or setups.

### Does the 1.0.6 fix guarantee my old Scheduler setups will work now?
No guarantee. The patch note only says “Fixed the shift scheduler inconsistencies.” Re-test previous setups under 1.0.6 to confirm whether they behave as you expect.

### How do I confirm whether a specific tool works with the Scheduler?
Connect the Scheduler to that tool or a Remote-controlled arrangement in your save and test it directly. The verified sources recommend in-game verification rather than assuming compatibility.
