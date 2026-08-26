Direct Answer — MEGA! (x300 / 300 Combo)
> Quick answer: MEGA! (x300) is earned by sustaining a continuous, recoverable handoff long enough to reach the MEGA tier. The reliable practical pattern confirmed by the community is a short, highly visible lane with a single tested source → route → receiver, backed by basic automation for alignment, containment, and jam recovery. Prioritize your attempt before final/ending progression as a timing precaution (see Safest progression timing).

Quick Steps
1. Build a short, visible lane: keep transfers minimal so you can spot and clear jams quickly.
2. Use one source, one route, one receiver and verify single-item throughput first.
3. Add basic automation for alignment and containment (panels, fans, magnets, pistons, launchers) and a simple jam-recovery path.
4. Ramp up in controlled bursts while watching the lane; stop and fix the first sign of misalignment.
5. Optionally use the Shift Scheduler for timed batches after you’ve confirmed the physical handoff works.

What You Need (Prerequisites)
- A tested single source → route → receiver path.
- A short, visible, recoverable lane (fewer transfer points = safer).
- Access to basic automation components (community guides cover panels, fans, magnets, pistons, launchers, alignment, containment, jam recovery).
- Time to test and iterate before attempting a full MEGA run.
- If you plan timed batches, a tested Shift Scheduler setup.

Reliable Method (Full Explanation)
- Keep the production lane short and visible. The main player problem is maintaining a reliable production handoff rather than simply generating a large burst. Short lanes reduce unseen jams and make manual or automated recovery practical.
- Start by proving a one-item, one-route handoff repeatedly until it succeeds reliably. Only then increase throughput.
- Use containment to prevent uncontrolled backflow or overflow at the receiver. Use alignment devices (fans/magnets/pistons/launchers) to ensure items enter the receiver cleanly.
- Implement simple jam detection and recovery: a diversion or temporary stop that clears the lane and returns items to the source or a safe buffer. Community automation guidance already covers common techniques for these devices.
- Test the full chain under load in short windows. Do not rely on a single long unattended burst until every handoff and recovery path has been validated.

What Resets or Breaks the Combo
- Jams or items getting stuck in the lane break the continuous count.
- Timing mismatches at transfer points (misaligned launches, delayed pistons/fans) will drop or lose items and break the run.
- Losing the tested route to a new build or untested modification can introduce hidden failure points.
- Players consistently report that late-stage progression changes can make attempts riskier; current full-release community findings indicate it’s safer to complete the MEGA attempt before entering final/ending progression. This is a timing recommendation, not a claim that the achievement becomes impossible afterward.

Common Failure Reasons
- Overlong or complex lanes with multiple transfer points.
- Ramping throughput before the single-unit handoff is rock solid.
- Mis-timed actuators (fans/pistons/launchers) or poor alignment.
- No containment or buffer, causing overflow and hard-to-clear jams.
- Relying on an untested Shift Scheduler or automation script without first validating the physical handoff.

How Automation Helps
- Automation stabilizes alignment and repeatable timing for launches, fans, pistons, and magnets so the handoff is consistent.
- Containment logic and panels can prevent overflow and isolate jams.
- Automated jam-recovery routines can clear lanes quickly without losing the route.
- Existing community automation guidance covers panels, fans, magnets, pistons, launchers, alignment, containment, and jam recovery — use those patterns after you’ve confirmed the basic lane. See the Automation guide for setup ideas: [Automation]({{page:automation}}).

How the Shift Scheduler Can Help
- The Shift Scheduler is useful for timed or batched behavior (start/stop windows, repeat bursts) when it’s connected and tested with your lane.
- Do not assume scheduler settings are correct on first try: test scheduler pulses at the exact moment items need to transfer.
- The scheduler is most helpful once the physical handoff and jam-recovery work reliably; for setup and timing examples, consult the Shift Scheduler guide: [the Shift Scheduler Guide]({{page:shift-scheduler}}).

Safest Progression Timing
- Current full-release community findings indicate it’s safer to attempt MEGA! before entering final/ending progression. That recommendation is about risk management and timing, not a confirmed permanent lockout or irreversible state. If you haven’t reached x300 yet, plan the attempt while you still have time to test and iterate.

FAQ
Q: Is MEGA! the same as EXTRA! or MORE!?
A: No. MORE! corresponds to x100, EXTRA! to x200, and MEGA! is the x300 tier. Each tier requires progressively longer reliable handoffs.

Q: Can automation alone guarantee MEGA!?
A: No automation recipe universally guarantees it. Automation greatly increases reliability when applied to a lane that has already been proven manually (one source → one route → one receiver). Community guides provide useful automation patterns, but you must test them on your layout.

Q: Will entering the ending/progression immediately stop me from getting x300?
A: The community advises attempting MEGA! before final/ending progression as a safer choice. This is a timing recommendation based on current full-release findings, not proof of a permanent block.

Q: Should I run multiple lanes in parallel to get MEGA!?
A: Players consistently report that a single short, recoverable lane is the safest practical approach. Multiple lanes add complexity and more potential failure points unless you have robust automation and isolation between lanes.

Q: My lane jammed — can I still recover the run?
A: If you have a tested jam-recovery path or containment that isolates and clears the jam without breaking the route, you can continue. That’s why designing a recoverable lane is a core recommendation.

Related Guides
- [Automation]({{page:automation}}) — lane setup and device patterns.
- [the Shift Scheduler Guide]({{page:shift-scheduler}}) — timed and batch control.
- [the Achievements Guide]({{page:achievements}}) — timing and completion notes.
