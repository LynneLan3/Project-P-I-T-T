---
title: "How to Fix Project P.I.T.T. Crashes, Low FPS, Saves & Missing Tools"
description: "Grouped Project P.I.T.T. troubleshooting for crashes, low FPS, mouse control, saves, lost tools, lava drops, Clear Items, and ending-save issues."
category: automation
slug: troubleshooting
status: confirmed
featured: true
role: core
assetType: article
sidebar:
  order: 5
intents:
  - project-pitt-troubleshooting
  - project-pitt-low-fps
  - project-pitt-broken-save
  - project-pitt-missing-tools
quickAnswer: "Start with current-version guidance and Pause Menu → Clear Items for bulk cleanup, then use the grouped steps for crashes, low FPS, mouse control, unreliable saves, and lost or stuck tools; persistent cases remain evidence-aware rather than universal fixes."
related:
  - automation
  - trade-terminal
  - panel-rack
  - up-achievement-fuses
relations:
  -
    slug: automation
    type: related
  -
    slug: trade-terminal
    type: related
  -
    slug: panel-rack
    type: related
  -
    slug: up-achievement-fuses
    type: related
sources:
  -
    type: steam
    title: Steam Community developer FAQ and updates
    url: https://steamcommunity.com/app/4026250/
  -
    type: steam
    title: Steam Community automation discussion
    url: https://steamcommunity.com/app/4026250/discussions/0/572666820169834610/
changeSummary: "New grouped launch-window troubleshooting asset for crashes, performance, saves, mouse control, tools, cleanup, and ending continuation."
eyebrow: Troubleshooting
facts:
  -
    label: Crashes
    value: "Recent full-release versions fixed multiple issues, but some reports remain unresolved."
  -
    label: Performance
    value: Low FPS and high-polling-rate mouse control problems are reported in the current issue cluster.
  -
    label: Saves
    value: "Broken or unreliable saves and continue-after-ending behavior need cautious, version-aware handling."
  -
    label: Tools
    value: "Lost, stuck, inaccessible, or lava-fallen tools belong in the grouped recovery guide."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/troubleshooting.md
-->
## Direct Answer

Short: 1.0.6 ships several intended reliability and recovery improvements (saving, some crashes, mouse polling, lost-tool recall and lava-respawn, and continuing-after-ending). However, community reports show residual problems remain (infinite ending loop, intermittent crashes, unreliable saves, UV Light pickup softlocks, and mouse/FPS issues). Treat 1.0.6 as an improvement attempt, not a universal fix; use conservative save habits and file support reports for unresolved cases.

> Quick summary: 1.0.6 aims to improve saves, mouse polling, and lost-tool respawns, but do not assume every affected playthrough is fixed — back up saves and report repeat failures.

## Quick Steps

1. Before risky actions (near endings, big automation runs, or Secret Ending steps) make a manual backup of your save files.
2. If you hit a crash or corrupted save, note timestamps and reproduce steps if possible; include those when reporting.
3. If a tool is missing, check recent autosave slots and load the most recent safe backup before the loss; see the Fuse recovery note in Full Explanation.
4. For mouse/FPS problems, try a clean game restart and lower background input utilities; 1.0.6 improves some high-polling-rate cases but not all.
5. If you encounter an infinite ending loop or cannot restore free play after the ending, stop using that save and report with details — do not rely on an automatic universal workaround.

## Prerequisites or What You Need

- Game updated to 1.0.6 (verify via launcher/store).
- A copy of your current saves (make backups before troubleshooting).
- Time stamps and a short reproduction note for support reports (what you did immediately before the issue).
- If asking the community, include platform and approximate runtime before failure.

## Full Explanation

### Official 1.0.6 intended changes
Answer-first: 1.0.6 is intended to improve saving reliability; fix being stuck when continuing after the main ending; address high-polling-rate mouse FPS problems; improve lost unique tool recall; and add lava-lost tools respawn behavior. These are intended fixes and improvements, not guaranteed universal resolutions.

### Crashes
Answer-first: Crashes still occur for some players after 1.0.6.
- Community-confirmed: players still report crashes during long sessions and crashes on quit. 1.0.6 reduces some cases but does not prove all crashes are resolved.
- Troubleshooting: capture when it happens, reproduce steps, and include logs/timestamps in a support report.

### Low FPS
Answer-first: Low FPS reports persist despite 1.0.6 improvements.
- Evidence-aware: players consistently report low FPS in some situations. 1.0.6 may mitigate some mouse-polling-related FPS drops but does not universally fix every FPS scenario.

### High-polling-rate mouse / mouse control
Answer-first: 1.0.6 targets high-polling-rate mouse FPS issues but residual problems remain.
- Community findings indicate improvements for some setups, while others still see poor responsiveness or jitter. Do a clean restart and disable third-party input utilities when testing; results vary by system.

### Save reliability
Answer-first: Saving reliability was an intended 1.0.6 target, but save problems continue for some users.
- Players still report broken or unreliable saves. Use manual save backups and avoid relying on a single autosave slot when performing high-risk actions.

### Infinite ending loop / continue-after-ending saves
Answer-first: Reports of an infinite ending loop remain after 1.0.6; this is a current unresolved/residual issue for some players.
- Community reports: a save made near the ending trigger can retrigger the ending automatically, return you to the menu, and on load return you to just before the ending — making free play unreliable.
- No verified universal workaround exists. Conservative save handling (multiple backups, separate profiles) is recommended. Report instances with reproduction notes and timestamps.

### Missing / stuck / lava-lost tools
Answer-first: 1.0.6 intends to improve unique tool recall and add lava-lost tool respawn, but behavior can still be inconsistent.
- If a unique key item/tool is missing, check alternate save backups first.
- For missing key items that gate progress, consult the Fuse recovery guidance on the Fuse page: [Fuse](/up-achievement-fuses/).
- Do not assume automatic respawn in every case; treat respawn as intended behavior but not guaranteed for every player/report.

### UV Light softlock
Answer-first: UV Light pickup can softlock for some players; this is a reported residual issue affecting Secret Ending progression.
- Current full-release community findings indicate attempting to pick up the UV Light can make it disappear in some runs, blocking the Secret Ending route for those saves.
- If you plan Secret Ending attempts, back up saves before the pickup and consult the community guide: [the Secret Ending guide](/secret-ending/).

### Clear Items / bulk removal
Answer-first: Pause Menu → Clear Items permanently removes items without refunding money.
- Verified: using Clear Items will delete items and does not restore spent resources. Use backups before bulk clears or experimental cleanups.
- For panel cleanup and automation issues related to panels, see [Panel Rack](/panel-rack/) and related automation/cleanup pages.

## Common Mistakes

- Relying on a single autosave slot near the ending or Secret Ending actions (use multiple manual backups).
- Assuming 1.0.6 completely fixes every crash, save, or respawn case — residual reports persist.
- Using Clear Items without backing up saves when attempting a large cleanup.
- Treating an item disappearance as a guaranteed respawn instead of reporting it for investigation.

## What To Do Next

1. Back up your saves now (especially before endings or Secret Ending attempts).
2. Reproduce the bug if possible and collect timestamps, platform, runtime length, and steps.
3. Attach logs/screenshots and submit a support report for crashes, infinite ending loops, UV Light softlocks, or missing tools.
4. For missing key items that prevent progression, check your backups and the [Fuse](/up-achievement-fuses/) recovery guidance.
5. For panel cleanup or automation failures, consult [Panel Rack](/panel-rack/) and neighboring pages (Trade Terminal, Automation) for clean-up strategies.
6. Track community threads for any emerging reliable workarounds; do not assume a single reported fix applies universally.

## Related Guides

- [the Secret Ending guide](/secret-ending/)
- [Achievements](/achievements/)
- [Panel Rack](/panel-rack/)
- For missing key-item guidance, see [Fuse](/up-achievement-fuses/)

## FAQ

Q: Did 1.0.6 fix the infinite ending loop?
A: 1.0.6 aimed to fix continue-after-ending issues, but current residual reports show the infinite ending loop still affects some saves. There is no verified universal workaround; use conservative save backups and report occurrences.

Q: Will 1.0.6 stop my crashes and broken saves?
A: 1.0.6 targets saving and crash improvements, and some players see benefits, but crashes and unreliable saves are still reported. Collect logs/timestamps and report repeat failures.

Q: I lost a unique tool — will it always respawn?
A: 1.0.6 intends improved recall and lava-lost tool respawn, but behavior has been inconsistent across reports. Check backups and the Fuse recovery guidance; do not count on guaranteed respawn.

Q: Picking up the UV Light made it disappear — can I still get the Secret Ending?
A: This UV Light softlock has been reported in the full release. Back up saves before attempting the pickup and consult [the Secret Ending guide](/secret-ending/) for community advice. Report the softlock if it occurs.

Q: Does Clear Items refund money or resources?
A: No — Pause Menu → Clear Items removes items and does not refund spent money. Back up before bulk removal.
