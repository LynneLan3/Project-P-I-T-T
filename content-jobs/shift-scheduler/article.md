## Quick Answer

- The Shift Scheduler toggles switchable / automatic tools (things that can be turned on and off), not manual one-off button machines. It is not a button-press replacement for the Manual Duck Crank — a Steam player test showed no response when the Scheduler was placed beside that crank.
- Fastest working test: connect the Scheduler to a Remote-controlled device or a confirmed Scheduler-compatible tool (Cannon is cross-source confirmed) and run a simple in-game on/off test to observe the effect.
- Remote: community testing reports the Remote works with the Scheduler.
- 1.0.6: official patch notes say exactly “Fixed the shift scheduler inconsistencies.” Re-test older setups on the current build to confirm behavior.

## What the Shift Scheduler Should Connect To
The Scheduler is intended to control devices that can be programmatically toggled or switched on/off (community language: “switchable/automatic tools”). Verified or community-confirmed examples are listed in the compatibility table below. Do not expect it to operate manual, single-action machines.

See [Automation]({{page:automation}}) for general automation patterns; use the Scheduler where a tool or chain can be repeatedly turned on and off.

## Fastest Working Test
To verify your build quickly:

1. Place a Scheduler and connect it to a Remote or a tool already reported as compatible (Cannon is cross-source confirmed).
2. In your save, trigger a short on/off test (activate the Scheduler and observe whether the connected device turns on/off or acts differently).
3. If nothing happens, try the same Scheduler connection with a Remote in-between (see next section) or test a different confirmed tool.

This quick in-game test is the recommended way to confirm behavior — community sources emphasize testing rather than assuming compatibility.

## Why Manual Duck Crank Does Nothing
A Steam player test placed the Scheduler next to the Manual Duck Crank and observed no effect. Community replies in that thread explain the distinction: the Duck Crank is a manual, single-action machine (button-press style), while the Scheduler targets switchable/automatic devices. The Steam test is the verified evidence for the Duck Crank being unsupported for Scheduler control.

## Shift Scheduler + Remote
Community-confirmed reports indicate the Remote works with the Shift Scheduler. That makes Remote a useful intermediary if you want the Scheduler to control a device indirectly or to group multiple outputs behind a Remote-controlled switch. Because the community evidence does not describe precise interface steps, always connect and test the Remote + Scheduler arrangement in your save.

## What Tools Work With the Shift Scheduler?

| Tool | Status | Evidence |
| --- | --- | --- |
| Manual Duck Crank | Unsupported for this use case | Steam player test |
| Remote | Community-confirmed | Steam discussion |
| Cannon | Cross-source confirmed | Two current guides |
| Fan | Community evidence; verify in-game | Steam discussion example |
| Magnet | Community evidence; verify in-game | Steam discussion example |

Notes:
- Cannon: documented as either manually activatable or Scheduler-linkable in two current guides referenced by the community.
- Fan and Magnet: mentioned by players as examples; treat these as community reports and verify in your build.
- The table preserves cautious labels — re-test any community-reported device in-game before relying on it in a production setup.

## What Is It Actually Useful For?
Community use cases (reported by players):

- Split a machine’s output and hold part of the product, then release that held batch together to build larger combos.
- Create controlled lanes or timed/batch releases to improve combo timing or manage throughput.

These are practical automation patterns rather than guaranteed shortcuts — test the specific lane or batch setup in your save to confirm it behaves as you expect. For combo-focused strategies, see [x300 Combo]({{page:x300-combo}}).

## Common Mistakes
- Expecting the Scheduler to mimic a button press (Manual Duck Crank). The Duck Crank test shows this is not how the Scheduler works.
- Assuming every device mentioned in community threads will behave the same across builds. Community evidence often needs in-game verification.
- Skipping a simple Remote test when a direct connection fails — the Remote is community-confirmed and can help isolate whether the Scheduler or the target device is the issue.

## 1.0.6 Update Note
Official Steam Community Update 1.0.6 (26 Aug 2026) states exactly: “Fixed the shift scheduler inconsistencies.” The note does not specify which behaviors changed. Re-test any pre-1.0.6 setups on the current build — there is no guarantee old setups will behave identically now.

Do not assume there is a newer, separate Scheduler rule in 1.0.8; the research brief contains no official 1.0.8 Scheduler change.

## FAQ

Q: Will the Shift Scheduler operate the Manual Duck Crank?
A: No. A Steam player test shows no response when the Scheduler was placed beside the Manual Duck Crank; the Scheduler is intended for switchable/automatic tools, not manual button-press machines.

Q: Does the Remote work with the Shift Scheduler?
A: Yes — community testing reported in the Steam discussion indicates the Remote can be used with the Scheduler. Connect and test in your save to confirm behavior.

Q: Can the Scheduler control a Cannon?
A: Cannon control via the Scheduler is documented by two independent, current guides; that is cross-source confirmed. Verify in-game for your setup.

Q: Do Fans and Magnets work with the Scheduler?
A: Fans and Magnets are mentioned in community replies as examples players have used; treat these as community evidence and verify them in your game.

Q: Does the 1.0.6 fix guarantee my old Scheduler setups will work now?
A: No guarantee. The patch note only says “Fixed the shift scheduler inconsistencies.” Re-test previous setups under 1.0.6 to confirm whether they behave as you expect.

Q: How do I confirm whether a specific tool works with the Scheduler?
A: Connect the Scheduler to that tool or a Remote-controlled arrangement in your save and test it directly. Community sources recommend in-game verification rather than assuming compatibility.

## Related Guides
- [Automation]({{page:automation}})
- [Trade Terminal]({{page:trade-terminal}})
- [Panel Rack]({{page:panel-rack}})
- [x300 Combo]({{page:x300-combo}})
