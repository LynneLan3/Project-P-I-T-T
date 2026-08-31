---
title: "How to Get a 300 Combo in Project P.I.T.T. — x300 Achievement Guide"
description: "Operational steps to earn the MEGA! x300 combo in Project P.I.T.T.: build one reliable feed lane with a short visible recoverable section, keep product arrival continuous, test MORE! x100 and EXTRA! x200 runs first, use Automation and the Shift Scheduler to maintain flow, and time the final attempt before any ending progression."
category: automation
slug: x300-combo
status: confirmed
featured: true
role: core
assetType: checklist
sidebar:
  order: 2
intents:
  - project-pitt-x300-combo
  - project-pitt-mega-achievement
  - project-pitt-combo-guide
quickAnswer: "Build one reliable feed lane with a short visible recoverable section, keep arrivals continuous and avoid gaps, store a safety margin above exactly 300 products, test MORE! x100 and EXTRA! x200 first, use Automation and the Shift Scheduler to sustain flow, and prioritize the attempt before final-ending progression to prevent jams and resets."
related:
  - automation
  - shift-scheduler
  - achievements
relations:
  -
    slug: automation
    type: related
  -
    slug: achievements
    type: related
sources:
  -
    type: official
    title: Project P.I.T.T. Steam store page
    url: https://store.steampowered.com/app/4026250/Project_PITT/
  -
    type: other
    title: "Exophase achievement index — combo milestones"
    url: https://www.exophase.com/game/project-p-i-t-t-steam/achievements/
  -
    type: steam
    title: Steam Community automation discussion
    url: https://steamcommunity.com/app/4026250/discussions/0/572666820169834610/
cover: ../../../assets/gameplay/combo.jpg
changeSummary: "Operational refresh for 300 Combo reliability, x100/x200 testing, safety margin, and jam prevention."
eyebrow: Combo Milestones
facts:
  -
    label: x300 target
    value: "Progression names: MORE! x100, EXTRA! x200, MEGA! x300. Maintain a safety margin above exactly 300 products so the combo does not fall short during the final release."
  -
    label: Practice milestones
    value: "Test runs at x100 and x200 before attempting x300. Build one reliable feed lane, keep product arrival continuous, and avoid gaps that reset the combo. Use a short visible recoverable lane to spot and recover small interruptions quickly."
  -
    label: Automation
    value: "Use Automation and the Shift Scheduler to keep feed timing consistent, reduce manual gaps, and flag potential jams before they affect the lane. Automation helps sustain continuous arrival during an x300 attempt."
  -
    label: Timing
    value: "Prioritize the x300 attempt before any final-ending progression as a precaution. Prevent jams before the final release, maintain continuous arrival without gaps, and rely on the short visible recoverable lane to correct small disruptions."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/x300-combo.md
-->
Direct Answer
> Build and run one reliable feed lane with a short, visible recoverable buffer, keep product arrival continuous (no gaps), hold a safety margin above 300 products, test with MORE! x100 and EXTRA! x200 runs, and use Automation or the Shift Scheduler to stabilize input timing before releasing for the MEGA! x300 attempt.

Quick Steps
1. Pick a single feed lane and commit to it — do not split product sources.
2. Add a short, visible recoverable lane/buffer that you can monitor and manually clear.
3. Configure feeders (or Automation/Shift Scheduler) so products arrive with no gaps.
4. Run a MORE! x100 attempt, then an EXTRA! x200 to validate throughput and jam handling.
5. Build up products until you have a safety margin above the 300 mark, then release.
6. Prevent jams at merge points and before the release trigger; retry if any pauses occur.

Prerequisites or What You Need
- One reliable single feed lane (short path, no alternate infeed).
- A short, visible recoverable lane/buffer you can watch and clear manually.
- Means to control steady input: in-game Automation or the Shift Scheduler (where available).
- Practice runs at x100 and x200 to confirm timing and jam resistance.
- Awareness to perform the attempt before final-ending progression events as a precaution.

Full Explanation
- Why a single feed lane: multiple lanes or merged sources introduce timing variance and micro-gaps. Community findings show a single, dedicated feed lane is the most consistent way to avoid resets caused by intermittent arrival.
- Continuous arrival and no gaps: the combo breaks on detectable arrival gaps. Use steady feeder settings, automation scripts, or a Shift Scheduler profile to keep cadence uniform. If you must use manual input, keep finger/trigger discipline and avoid any pause longer than the normal product spacing.
- Short visible recoverable lane: place a short buffer between feeder and combo counter so you can see and fix problems immediately. This lane should be short enough to reset quickly but long enough to store enough items for brief corrections.
- Test x100 and x200 first: players consistently report that validating the full feed and jam-tolerance at lower milestones exposes timing and mechanical issues without wasting attempts. Treat x100 as a throughput check and x200 as a stress test.
- Safety margin above 300: don’t aim to have exactly 300 items at release. Current community guidance is to hold a margin above the target so small, unavoidable production variance won’t drop you below the threshold during the final sequence.
- Prevent jams before final release: clear intersections, avoid tight merges, and ensure any release triggers are far enough downstream of potential jam points. If your layout has a known clog spot, resolve it before starting the MEGA! attempt.
- Automation and Shift Scheduler: where players have verified these tools, they’re used to lock a steady input tempo and remove human-induced pauses. Link your Automation profiles to the feed lane and/or schedule a continuous shift that spans the full attempt window to reduce operator error. See [Automation](/automation/) and [Shift Scheduler](/shift-scheduler/).
- Prioritize before final-ending progression: make the attempt early enough in a session or run so end-of-run progression events (which can alter spawns or logistics) won’t interfere. This is a precaution players use to avoid unexpected resets late in progression.

Common Mistakes
- Splitting inputs or using multiple lanes (creates micro-gaps and timing variance).
- Relying on invisible/long queues instead of a short visible buffer.
- Releasing with exactly 300 items rather than holding a safety margin.
- Not testing x100/x200 first — missing throughput problems until too late.
- Letting jams form at merges or intersections that are upstream of the final release.
- Starting attempts close to end-of-run progression events that change logistics.
- Expecting manual timing to match automation — human input is more error-prone.

What To Do Next
1. Build the single feed lane and a short visible buffer.
2. Configure Automation or a Shift Scheduler profile to deliver steady feed.
3. Run MORE! x100 and EXTRA! x200 tests; fix any jams or timing drift.
4. When stable, accumulate a safety margin above 300 and attempt MEGA! x300.
5. If the attempt fails, inspect the recoverable lane for gaps/jams and iterate.

Related Guides
- [Automation](/automation/)
- [Shift Scheduler](/shift-scheduler/)
- [Achievements](/achievements/)

FAQ
Q: Do I need Automation or the Shift Scheduler to reach MEGA! x300?
A: No, they aren’t strictly required, but current full-release community findings indicate Automation or Shift Scheduler greatly reduce timing gaps and operator error. If you use manual control, compensate with a larger visible buffer and conservative pacing.

Q: How large should the safety margin be?
A: The brief evidence recommends storing a margin above the 300 target rather than trying to hit exactly 300. Do not rely on an exact count; keep extra products so minor variance won’t drop you below the threshold.

Q: Why did my combo reset even though items were coming?
A: Resets are usually caused by short arrival gaps, merged-lane collisions, or a jam clearing that temporarily pauses input. Use a single feed lane and a short visible recoverable buffer to diagnose the exact moment the flow pauses.

Q: Is it better to attempt MEGA! x300 early in a run?
A: Yes. Prioritize the attempt before final-ending progression events as a precaution — players report fewer unexpected changes to spawn/logistics early in progression.
