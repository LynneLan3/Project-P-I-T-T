> Quick answer: The Panel Rack is an automation-stage structure that now requires explicit player interaction and/or upstream commands to receive or return panels; it no longer reliably auto-populates in many recent versions. Use the in-game interaction prompt (check your control mapping) to place or take panels, confirm upstream Automation → Shift Scheduler → Trade Terminal is active, and consult Troubleshooting if panels still don’t appear.

Direct Answer
- The Panel Rack is a player-facing automation tool that must be interacted with using the current in‑game prompt/control mapping (do not rely on a specific hardcoded key name).
- Panels will appear or be retrievable only when the rack is unlocked and when upstream automation or manual commands send them; recent updates changed automatic spawning behavior so you should not expect guaranteed auto-population.

Quick Steps
1. Make sure the Panel Rack structure is unlocked and placed.
2. Verify upstream automation is operating: Automation → Shift Scheduler → Trade Terminal should be configured to send panels downstream.
3. Use the in‑game interaction prompt shown when you look at the rack to spawn/place or retrieve panels (follow your control mapping for the exact key/button).
4. If panels do not show, check the Trade Terminal/Shift Scheduler queues and run basic troubleshooting (see links below).

Prerequisites or What You Need
- The Panel Rack built/unlocked in your current save (unlock and progression are version-sensitive).
- Upstream automation pieces in place and active (Automation, Shift Scheduler, Trade Terminal).
- Correctly mapped controls or an active interaction prompt for the rack (follow the game’s control mapping — do not assume a fixed key).
- A save running the same or newer game version as the Panel Rack’s current behavior (older saves sometimes lack or behave differently).

Full Explanation
- Role in automation chain: Panel Rack sits downstream of the Trade Terminal and upstream of the x300 Combo. Typical flow is Automation → Shift Scheduler → Trade Terminal → Panel Rack → x300 Combo, so missing or misconfigured steps upstream will stop panels from reaching the rack.
- Interaction behavior: Recent full-release changes moved the Panel Rack toward an explicit-interaction model. Players must use the in‑game interaction prompt to insert/remove panels or trigger the rack, and the exact control shown by the HUD/controls screen is the authoritative input.
- Spawning and retrieval: Panel spawning and retrieval are version-sensitive. Current community findings indicate panels do not always spawn automatically at the rack; they may require the Trade Terminal/Shift Scheduler to actively send them or a player action to request/receive them. Likewise, retrieval is done via the rack’s interaction UI rather than via an assumed global “retrieve” shortcut.
- Why panels may not appear automatically:
  - Upstream automation (Shift Scheduler / Trade Terminal) isn’t configured or running.
  - Recent version changes removed or limited automatic rack spawning; many players now need to trigger sends manually.
  - The rack isn’t unlocked in that save or that save predates the feature and hasn’t migrated the structure.
  - There may be inventory/flow blockages earlier in the chain (check queues and connected conveyors).
- Old-save behavior: Older saves created before the operation-change often don’t show the Panel Rack or will have it behave like it did in older versions. Current community reports say upgrading a save can leave the rack absent or needing rebuild; there is no universal migration rule documented here — check your save and consider placing a fresh rack in a test area if migration looks broken.

Common Mistakes
- Expecting automatic spawning in all versions — recent updates changed this expectation.
- Trying to use a hardcoded key name rather than the on-screen interaction prompt or control mapping.
- Not checking upstream systems (Shift Scheduler / Trade Terminal) when panels don’t arrive.
- Assuming an old save will behave exactly like a new one after an update; structure presence and behavior can differ.
- Overlooking blocked queues or lack of supply upstream that prevent panels from being sent.

What To Do Next
- Verify the rack is unlocked and placed, then check the Trade Terminal and Shift Scheduler configuration.
- Use the in-game interaction prompt to try spawning/retrieving panels before assuming a bug.
- If panels still don’t appear, run stepwise troubleshooting: check upstream production and connection points, then consult the Troubleshooting guide.

Related Guides
- [Automation](/guides/automation)
- [Troubleshooting](/guides/troubleshooting)
- [Shift Scheduler](/guides/shift-scheduler)
- [Trade Terminal](/guides/trade-terminal)
- [x300](/guides/x300-combo)

FAQ
Q: How do I unlock tier 3 for the Panel Rack?
A: Community findings and version differences mean there’s no single universal tier-3 unlock recipe we can provide here. Check your in‑game progression/tech tree and the rack’s unlock tooltip; if you don’t see the tier unlocked, you likely need to progress further or follow the in‑game unlock path for your current version.

Q: Why aren’t panels appearing automatically in my rack anymore?
A: Recent full-release changes reduced or changed automatic spawning behavior. Panels are now often dependent on explicit upstream send commands or player interaction. Confirm the Shift Scheduler and Trade Terminal are configured to send panels and use the rack’s interaction prompt.

Q: How do I retrieve panels from the rack?
A: Use the rack’s on-screen interaction prompt or control mapping to retrieve panels. Do not rely on a hardcoded key name — the HUD will show the correct interaction for your current control setup.

Q: My old save doesn’t have a Panel Rack after an update. Is it gone?
A: Older saves commonly show missing or altered behavior after the operation changes. Players consistently report that the rack can be absent or need to be rebuilt in post-update saves. Verify your save version and, if necessary, place a new rack or test on a fresh save.

Q: Is there a universal fix if panels get stuck?
A: There is no single universal retrieval mechanic documented here. The practical steps are: check upstream supply, confirm automation chain operations, use the rack’s interaction prompt, and follow the Troubleshooting guide if the issue persists.
