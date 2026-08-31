---
title: "How to Fix Project P.I.T.T. Crashes, Low FPS, Saves & Missing Tools"
description: "Troubleshooting Project P.I.T.T. for crashes, low FPS, save reliability and missing tools, noting 1.0.6 intended fixes, 1.0.7 official fixes and residual reports."
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
quickAnswer: "Update to 1.0.7 (which follows a 1.0.6 attempt) to get the main-ending save fix plus piñata/cushion reliability and duck workbench animation fixes, though rare infinite-ending loop reports persist."
related:
  - automation
  - trade-terminal
  - panel-rack
  - updates
  - secret-ending
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
    slug: updates
    type: related
  -
    slug: secret-ending
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
changeSummary: "Updated for 1.0.7 bricked-save official fix, Piñata/Cushion reliability, and Updates hub link."
eyebrow: Troubleshooting
facts:
  -
    label: Crashes
    value: "Stability notes: 1.0.6 included intended stability work (mouse polling and other reliability tweaks) and 1.0.7 continues that effort; common crash contributors remain GPU/driver issues, mods, and corrupted sessions, and there are isolated, evidence-aware reports of an infinite-ending loop after the final sequence that are not universal."
  -
    label: Performance
    value: "Low FPS guidance: 1.0.6 added mouse-polling and general stability tweaks that reduce stutter and 1.0.7 keeps those improvements; for best results update GPU drivers, close background apps, and lower render scale or shadow/detail settings."
  -
    label: Saves
    value: "Save reliability: 1.0.6 added save reliability improvements and attempted a main-ending bricked-save fix; 1.0.7 officially fixes the main-ending bricked saves and preserves lava-respawn and other save stability work, though if you encounter corruption load an earlier autosave and report reproduction steps."
  -
    label: Tools
    value: "Missing tools: 1.0.6 targeted lost-tool recall and workbench behaviors; 1.0.7 adds piñata and cushion reliability improvements and an automatic duck workbench animation fix—if tools go missing verify inventory, disable mods/plugins, and capture steps to reproduce for reports."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/troubleshooting.md
-->
### Direct Answer

> Quick answer: Update to 1.0.7 first — it contains the official fix for main-ending bricked saves (after a 1.0.6 attempt), reliability improvements for Piñata/Cushion, and the automatic duck workbench animation fix. For remaining crashes, low FPS, missing tools or save trouble follow the checklist below; if problems persist, collect logs and contact support.

### Quick Steps

1. Install the 1.0.7 update through your platform launcher.
2. Back up your current saves (copy the save folder) before testing.
3. If you see a crash or missing tool, restart the game and reload a prior save slot.
4. For performance issues: lower graphics settings, close background apps, update GPU drivers.
5. If an ending-related save appears bricked or you hit an infinite-loop, upgrade to 1.0.7 and try an earlier save; report the save and logs if it reoccurs.
6. If the problem persists, gather crash logs and contact official support or post a reproducible report on the game’s help channels.

### Prerequisites or What You Need

- Game updated to version 1.0.7.
- A backup copy of your save folder before testing fixes.
- Access to your platform’s game-verify/repair feature (if available).
- Up-to-date GPU drivers and any required OS updates.
- Crash logs or a clear reproduction sequence to include if you file a support report.

For full version history and patch notes see the [Updates](/updates/) hub.

### Full Explanation

- Save/ending fixes:
  - 1.0.6 contained an attempted fix for main-ending bricked saves. The official 1.0.7 update explicitly lists a fix for the main-ending bricked-save issue.
  - Players should update to 1.0.7 first. If you still encounter an ending save problem, try loading an older save and then report the case with the save file and logs.
  - Community reports still show some residual infinite-ending-loop cases in limited reports; those are not reported as universal and should be submitted to support when reproducible.

- Missing tools / item reliability:
  - 1.0.6 introduced improvements for lost-tool recall and other reliability fixes; 1.0.7 continues with reliability improvements (including Piñata/Cushion behavior).
  - Common community remediation steps: reload the area, restart the session, and test across multiple save slots. If tools remain missing after updating, include reproduction steps in your report.

- Crashes and low FPS:
  - Common causes are driver issues, background programs/overlays, corrupted local files, or platform-specific problems.
  - Verify game files (your platform), update GPU drivers, disable overlays (Discord/Steam/recording), and test with lower graphics presets.
  - If crashes persist, capture a crash log or crash dump and include timestamps and actions that reproduce the crash.

- Animation/UI fixes:
  - 1.0.7 contains an explicit fix for the automatic duck workbench animation (players should see corrected behavior after updating).

- Other 1.0.6 improvements preserved:
  - The intended reliability improvements from 1.0.6 — saving reliability, mouse polling, lost tool recall, and lava respawn behavior — remain part of the current build’s improvements and should be verified first by updating.

### Common Mistakes

- Updating only part of the platform or running an older client build — always confirm 1.0.7 is installed.
- Testing fixes without backing up saves.
- Submitting reports without a clear reproduction sequence, timestamps, or attached logs — slows investigation.
- Leaving overlays or background recorders active when troubleshooting crashes.
- Assuming a universal workaround exists for ending-loop issues — evidence shows residual cases are situational.

### What To Do Next

1. Update to 1.0.7 and back up saves.
2. Reproduce the issue once; note exact steps and time.
3. Verify game files via your launcher and update drivers.
4. If the issue is a bricked ending or persistent crash:
   - Try an earlier save to continue play.
   - Collect your save file, crash logs, and a short reproduction list.
   - Submit to official support and community channels so developers can triage.
5. If you’re investigating ending behavior, consult the [Secret Ending](/secret-ending/) guide for context before filing a report.

### Related Guides

- [Updates](/updates/)
- [Secret Ending](/secret-ending/)
- [Achievements](/achievements/)
- [Panel Rack](/panel-rack/)

### FAQ

Q: Does 1.0.7 fix the main-ending bricked saves?
A: Yes — 1.0.7 explicitly lists a fix for the main-ending bricked-save issue. Note that 1.0.6 included an earlier attempted fix; 1.0.7 is the current official resolution.

Q: I updated but still hit an infinite ending loop — what now?
A: Current full-release community findings indicate isolated residual reports exist. Try an earlier save, verify files, and collect logs plus reproduction steps to report to official support.

Q: My tools disappeared after an update — is that fixed?
A: Tool recall/reliability was improved in 1.0.6 and continued in 1.0.7 with additional reliability work. If tools remain missing after updating, restart and reload saves; if unresolved, capture repro steps and report.

Q: Piñata or Cushion interactions feel unreliable — was this addressed?
A: 1.0.7 contains reliability improvements for Piñata and Cushion interactions. Players should update and retest.

Q: Where can I find full patch notes and history?
A: See the full version history on the [Updates](/updates/) hub.
