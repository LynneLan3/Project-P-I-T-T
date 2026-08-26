> Quick answer: Use a short, visible, recoverable lane with one source and one receiver as your Phase 4 automation hub, keep each mover (fan, magnet, piston, launcher) doing one clear job, use panels as fixed routing surfaces, then chain into timed control and cleanup: Automation → [Shift Scheduler](../shift-scheduler) → [Trade Terminal](../trade-terminal) → [Panel Rack](../panel-rack) → [x300 Combo](../x300-combo).

Direct Answer
- Start with a short, single-source → single-receiver lane and treat panels as walls/surfaces for routing.
- Give each actuator (fan, magnet, piston, launcher) one dedicated purpose and use sticky tools to keep contact where needed.
- Once that lane is stable, plug it into timed control and cleanup hubs in this natural chain: Automation → [Shift Scheduler](../shift-scheduler) → [Trade Terminal](../trade-terminal) → [Panel Rack](../panel-rack) → [x300 Combo](../x300-combo).

Quick Steps
1. Build one short lane: one source, one receiver, visible and recoverable.
2. Use panels as fixed routing walls/surfaces; watch for a green snap preview when placing.
3. Assign exactly one job per mover: fan = push, magnet = hold/steer, piston = extend/retract, launcher = send.
4. Use the sticky tool to keep pieces contacting during movement or adjustments.
5. Add the [Shift Scheduler](../shift-scheduler) for batching/timing when you need controlled windows.
6. Add the [Trade Terminal](../trade-terminal) to consolidate and clean up outputs.
7. Add the [Panel Rack](../panel-rack) for consistent panel retrieval/spawn behavior before attempting the [x300 Combo](../x300-combo).

Prerequisites or What You Need
- Panels that can act as walls/surfaces for routing.
- Movers: fans, magnets, pistons, launchers (one clear job each).
- Sticky tool(s) to maintain contact during movement.
- A clearly visible lane (short, recoverable) with one source and one receiver.
- Sufficient space to test and visually observe jams and timing.
- Patience for timing adjustments — Phase 4 progression introduces more timing sensitivity (community findings).

Full Explanation
- Lane design: A short, visible, recoverable lane is the recommended starting pattern because it makes jams, timing, and spawn behavior easy to see and fix. Players consistently report that longer lanes mask timing problems and increase recovery time.
- Panels as routing: Panels can act as route walls and surfaces. When placing, a green snap preview indicates a valid snap — use that to ensure predictable alignment. Panels are reliable anchoring points for movers and reroutes.
- Movers and responsibilities: Fans, magnets, pistons, and launchers each perform best when assigned one clear job. Mixing duties (for example, using one launcher to both align and send) increases failure modes and debugging time.
- Sticky tool: Use sticky tools to keep contact during adjustments or to prevent unintended separation. It’s an inexpensive way to make setups recoverable.
- Automation hub chain (what plugs into what):
  - Automation hub: your tested short lane. Keep it stable before adding complexity.
  - [Shift Scheduler](../shift-scheduler): adds timed/batch control and launch windows. Use it when you need precise windows for launchers or to batch several outputs.
  - [Trade Terminal](../trade-terminal): used mainly for cleanup and consolidation of outputs before storage or combos. Players use terminals to remove stray items and tidy lanes.
  - [Panel Rack](../panel-rack): controls panel retrieval/spawn behavior and is useful when you need predictable panel delivery for repeated runs.
  - [x300 Combo](../x300-combo): the combo attempt is the end goal for many Phase 4 runs; feed it only after the previous hubs are stable.
- Phase 4 (concise, evidence-aware): Current full-release community findings indicate Phase 4 increases emphasis on timing, spawn consistency, and integrated cleanup. At a high level, focus on building robust short lanes, then add timed control (Shift Scheduler) and a Trade Terminal for cleanup before tackling panel-rack consistency and combo attempts. The exact unlocks and order are not universal; follow the natural hub chain above and adapt to what your progression has opened.
- Common progression blockers (what players report): long unseen lanes, movers sharing unclear roles, missed green snaps, insufficient staging before the scheduler, panel-spawn unpredictability, and timing mismatches between scheduler windows and launcher behavior.

Common Mistakes
- Making lanes too long — hidden jams and slow recovery.
- Letting one mover try to do multiple jobs (e.g., a magnet that also tries to steer and time launches).
- Ignoring the green snap preview and misplacing panels.
- Not using sticky tools where temporary contact is needed during tuning.
- Adding the scheduler or terminal before the lane is debugged — this hides root causes.
- Expecting Panel Rack behavior to be identical across every run; panel spawn/retrieval can be finicky and needs testing.

What To Do Next
1. Stabilize one short lane until it’s reliably recoverable.
2. Add scheduled windows with the [Shift Scheduler](../shift-scheduler) to control batch timing for launchers or pistons.
3. Add the [Trade Terminal](../trade-terminal) to clean stray outputs and consolidate flows.
4. Integrate the [Panel Rack](../panel-rack) only after you understand panel spawn behavior in your current layout.
5. Attempt the [x300 Combo](../x300-combo) once lane, scheduler, terminal, and rack are behaving consistently.

Related Guides
- [Shift Scheduler](../shift-scheduler) — timed and batch control
- [Trade Terminal](../trade-terminal) — cleanup and consolidation
- [Panel Rack](../panel-rack) — panel retrieval and spawn behavior
- [x300 Combo](../x300-combo) — combo attempt workflow

FAQs
Q: Should I try to automate multiple lanes at Phase 4 right away?
A: No — start with one short, recoverable lane. Players consistently report a single reliable lane let them debug timing and jams faster before scaling.

Q: How do I tell a panel is placed correctly?
A: A green snap preview on placement indicates a valid snap and predictable alignment; avoid placements that don’t show that green preview.

Q: When do I add the Shift Scheduler or Trade Terminal?
A: Add them after your lane is stable. The scheduler is for timed windows and batching; the trade terminal is for cleanup. Adding them too early hides lane problems.

Q: What causes the most common jams?
A: Long unseen lanes, movers with mixed duties, and timing mismatches between launch windows and item arrival. Keep roles strict and lanes short for easier diagnosis.
