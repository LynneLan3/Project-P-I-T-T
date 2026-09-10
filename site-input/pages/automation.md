Direct Answer
> Set up a short visible recoverable lane, stage the three Phase‑4 inputs (Duck / Cash Register / Piñata) on separate lanes, balance supply across those lanes, protect Piñatas during transport, then merge late into the factory hub chain: Automation → [Shift Scheduler]({{page:shift-scheduler}}) → [Trade Terminal]({{page:trade-terminal}}) → [Panel Rack]({{page:panel-rack}}) → [x300 Combo]({{page:x300-combo}}). For recipe/workbench fixes see [Anomaly Phase 4]({{page:anomaly-phase-4}}). Current 1.0.8 piston behavior: pistons can be moved, objects stuck to the head follow it and are pickable again; the earlier 1.0.7 off-lock / resume behavior still applies.

Quick Steps
1. Build a short visible recoverable lane up-front so you can catch overflow and observe failing inputs.
2. Create three distinct input staging lanes for Duck, Cash Register, and Piñata — keep Piñata on its own gentle lane.
3. Use local balancing (splitters/priority routing) so no single input starves the others; keep lanes separate until just before the final merge.
4. Protect Piñatas in transport (separate lane, avoid high-speed impacts or mixing) and test with small batches.
5. Hook each stage into the hub chain: Automation → [Shift Scheduler]({{page:shift-scheduler}}) → [Trade Terminal]({{page:trade-terminal}}) → [Panel Rack]({{page:panel-rack}}) → [x300 Combo]({{page:x300-combo}}).
6. If an input overflows or stops, use the visible lane and isolated shutdowns to diagnose which feed failed.
7. If you need recipe/workbench changes, consult [Anomaly Phase 4]({{page:anomaly-phase-4}}).

Prerequisites or What You Need
- Basic automation components: movers, splitters/routing, pistons (current 1.0.8 piston behavior applies), and local buffers.
- Factory hub components in this chain: [Shift Scheduler]({{page:shift-scheduler}}), [Trade Terminal]({{page:trade-terminal}}), [Panel Rack]({{page:panel-rack}}), [x300 Combo]({{page:x300-combo}}).
- A short, visible recoverable lane (front-end buffer) to observe flow and catch failed output.
- Access to the [Anomaly Phase 4]({{page:anomaly-phase-4}}) page for current recipe/workbench troubleshooting.
- Note community-confirmed behavior: panels snap, tools can stick to moving parts, and each mover type should handle a single job.

Full Explanation
- Short visible recoverable lane first: This front buffer is the quickest way to see which input is backing up or failing. Players consistently report it saves rebuild time and helps spot jammed or empty feeds before they affect the whole chain.
- Three-input staging: Phase‑4 production uses three inputs (Duck / Cash Register / Piñata). Current full-release community findings indicate best uptime when each input is staged separately and balanced before merging.
- Supply balancing: Don’t merge inputs early. Use local splitters or conditional routing so each lane keeps roughly equal throughput into the final assembly. The exact splitter/router settings depend on your local production rates and must be tuned per factory — there is no universal numeric setting.
- Protect fragile Piñatas: Community-confirmed practice is to keep Piñatas on a dedicated, gentle lane and avoid aggressive merges or high‑speed collision zones. Separate the Piñata lane until just before the final combine to reduce breakage.
- Separate lanes before final merge: Keep each input lane distinct through most of the transport path to simplify diagnosis and balancing. Merge late and only after buffers smooth out short bursts.
- Diagnose overflowing / failed input: Use the visible recoverable lane and isolate each feed (stop or slow it) to confirm which input is overflowing or stalled. Visual lane fill levels and stopping one input at a time are the standard community troubleshooting steps. For recipe/workbench fixes and confirmed recipe details, consult [Anomaly Phase 4]({{page:anomaly-phase-4}}).
- Pistons (current 1.0.8, with 1.0.7 history) — verified behavior to include:
  - From Update 1.0.7: tools can stick to piston heads; attached tools follow piston movement; turning a piston off locks its current position; turning it back on resumes the prior motion.
  - From Update 1.0.8: pistons can now be moved; objects stuck to the piston head follow it when the piston is relocated; attached objects are pickable again.
  Treat sticky tools, movable pistons, and on/off locking as part of your transport and timing considerations; do not invent speed, range, load, attachment-count, or reliability numbers beyond these official behaviors.

Common Mistakes
- Merging inputs too early and creating collisions that damage Piñatas or cause downstream jams.
- Skipping the short visible recoverable lane and losing the fastest diagnostic feedback.
- Treating pistons as stateless movers — on/off changes lock/restore position and can leave tools stuck where you don’t expect.
- Forgetting that 1.0.8 made pistons movable and attached objects pickable again when rearranging a layout.
- Assigning multiple jobs to one mover type or relying on panels to compensate for poor routing — panels snap but won’t fix upstream imbalance.
- Forgetting to consult [Anomaly Phase 4]({{page:anomaly-phase-4}}) for recipe/workbench inconsistencies before redesigning automation.

What To Do Next
- Build a minimal three-lane test rig with a small buffer and run short batches to tune balancing.
- Add the hub chain components: [Shift Scheduler]({{page:shift-scheduler}}) rules, [Trade Terminal]({{page:trade-terminal}}) hooks, and output staging into [Panel Rack]({{page:panel-rack}}) → [x300 Combo]({{page:x300-combo}}).
- If a recipe or workbench issue appears, check [Anomaly Phase 4]({{page:anomaly-phase-4}}) for community fixes.
- Track changes and check [Updates]({{page:updates}}) for any engine or piston behavior patches that affect your layout.

Related Guides
- [Anomaly Phase 4]({{page:anomaly-phase-4}}) — recipes and workbench fixes.
- [Shift Scheduler]({{page:shift-scheduler}}) — hub timing and job routing.
- [Trade Terminal]({{page:trade-terminal}}) — economy hookup and export rules.
- [Panel Rack]({{page:panel-rack}}) — panel snapping and output staging.
- [x300 Combo]({{page:x300-combo}}) — final combo handling.
- [Updates]({{page:updates}}) — engine and behavior patch notes.

FAQ
Q: Will a tool attached to a piston stay attached during movement?
A: Yes. Official 1.0.7 behavior confirms tools can stick to piston heads and follow piston movement. Update 1.0.8 adds that objects stuck to the head also follow when the piston itself is moved, and attached objects are pickable again.

Q: Can I move a piston after placing it?
A: Yes in the current 1.0.8 build — pistons can now be moved. Objects stuck to the piston head follow that relocation.

Q: If I turn a piston off, will it return to a home position?
A: No. Turning a piston off locks it in its current position (1.0.7 behavior that still applies); turning it back on resumes the previous motion sequence.

Q: How do I stop Piñatas from breaking in transport?
A: Community findings recommend a dedicated gentle lane for Piñatas, avoiding aggressive merges and late-stage collisions. Keep the Piñata lane separate until the final merge and test with small batches to tune handling.

Q: Where do I check recipe or workbench issues that affect Phase 4 output?
A: See [Anomaly Phase 4]({{page:anomaly-phase-4}}) for the latest community-confirmed fixes and notes on workbench/recipe problems.

Q: What’s the recommended hub chain for Phase 4 automation?
A: Use the known hub chain: Automation → [Shift Scheduler]({{page:shift-scheduler}}) → [Trade Terminal]({{page:trade-terminal}}) → [Panel Rack]({{page:panel-rack}}) → [x300 Combo]({{page:x300-combo}}).
