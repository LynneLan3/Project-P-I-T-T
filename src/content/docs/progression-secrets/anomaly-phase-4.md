---
title: "Project P.I.T.T. Cauldron — 1.0.8 Anomaly Recipe Tiers & Use"
description: "Cauldron tiers after Update 1.0.8: which combos make lower/normal/enhanced Anomalies, plus troubleshooting for the Cauldron not working and ejected inputs."
category: progression-secrets
slug: anomaly-phase-4
status: confirmed
featured: true
role: core
assetType: article
sidebar:
  order: 7
intents:
  - project-pitt-cauldron
  - project-pitt-phase-4-cauldron
  - project-pitt-cauldron-not-working
  - project-pitt-anomaly-phase-4
  - project-pitt-how-to-make-anomaly
  - project-pitt-anomaly-workbench-not-working
  - project-pitt-anomaly-recipe
  - project-pitt-phase-4-anomaly
quickAnswer: "After Update 1.0.8: 3 identical products → lower-quality Anomaly; 3 products using only 2 distinct product types (2 different/3 total) → normal-quality Anomaly; one Duck + one Cash Register + one Piñata → enhanced-quality Anomaly. Run one complete manual Cauldron cycle and confirm a successful craft before automating."
related:
  - automation
  - percentage-pipe
  - secret-ending
  - troubleshooting
relations:
  -
    slug: automation
    type: related
  -
    slug: percentage-pipe
    type: related
  -
    slug: secret-ending
    type: next-step
  -
    slug: troubleshooting
    type: related
sources:
  -
    type: steam
    title: "Steam Community — Update 1.0.8 (Cauldron recipe quality)"
    url: https://steamcommunity.com/games/4026250/announcements/detail/689767689898427431
  -
    type: steam
    title: "Steam Community — Phase 4 Anomaly discussions"
    url: https://steamcommunity.com/app/4026250/
  -
    type: official
    title: Project P.I.T.T. Steam store page
    url: https://store.steampowered.com/app/4026250/Project_PITT/
changeSummary: "Updated for 1.0.8 Cauldron three-tier Anomaly recipe; owns project pitt cauldron intent."
eyebrow: Cauldron / Phase 4
facts:
  -
    label: "Cauldron (Anomaly workbench) — Updated 1.0.8"
    value: "The Cauldron is the Anomaly workbench (official 1.0.8 naming). Update 1.0.8 formalizes crafting from three inputs and adds explicit three-tier quality outcomes."
  -
    label: "Recipe tiers (1.0.8 rules)"
    value: "After 1.0.8 there are three quality tiers: 3 of the same product → lower-quality Anomaly; 3 products composed of only 2 distinct product types → normal-quality Anomaly; one-of-each (see enhanced example) → enhanced-quality Anomaly."
  -
    label: Enhanced combo example
    value: "The mapped enhanced-quality example from 1.0.8 is one Duck + one Cash Register + one Piñata. This specific one-of-each set yields enhanced quality; it is an example, not a claim that it is the only possible enhanced set."
  -
    label: "Troubleshooting & ejection (manual first)"
    value: "Always complete one successful manual Cauldron cycle before automating. Inputs must physically enter the Cauldron—items sitting nearby may not register. Piñata items remain fragile in transit and can break. Automation amplifies staging or timing failures. Community reports (not official patch rules) note per-ingredient stock limits can cause items to eject or pop out."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/anomaly-phase-4.md
-->
## Quick Answer
Updated for 1.0.8 — The Cauldron (official name: Anomaly workbench) now has three recipe quality tiers: lower, normal, and enhanced.  
- 3 identical products → lower-quality Anomaly.  
- 3 products made from exactly 2 distinct product types → normal-quality Anomaly.  
- 1 Duck + 1 Cash Register + 1 Piñata (one of each) → enhanced-quality Anomaly.  

Inputs must physically enter the Cauldron’s input slots — items merely sitting nearby do not register. Piñatas are fragile in transit. Complete one successful manual cycle before you automate, because automation amplifies staging and fragility failures. See [Automation](/automation/) for factory builds.

## What Is the Cauldron?
The Cauldron is the Anomaly workbench (official 1.0.8 naming) used in Phase 4 to combine products into Anomalies. It accepts three input items per craft and now evaluates the combination to produce one of three quality tiers (lower, normal, enhanced) under the 1.0.8 rules.

## Cauldron Recipe Tiers After Update 1.0.8
The workshop rules introduced in 1.0.8 map input diversity to quality:

- Lower-quality Anomaly: any three items that are all the same product type (example: Duck + Duck + Duck).  
- Normal-quality Anomaly: any three items that use exactly two distinct product types (example: Duck + Duck + Cash Register, or Duck + Cash Register + Cash Register).  
- Enhanced-quality Anomaly: a set containing one Duck, one Cash Register, and one Piñata. This specific one-of-each combination is the confirmed enhanced recipe.

Notes:
- Enhanced requires one of each Duck + Cash Register + Piñata, but you do not have to use those three for every Anomaly; other combinations produce lower or normal qualities as above.
- The Cauldron still consumes three inputs per cycle.

## How to Make Your First Anomaly (Manual)
Follow these steps to verify placements and behavior before automating:

1. Decide which quality you want to test (enhanced, normal, or lower) and gather the corresponding three items per the tier rules above. For confirmed enhanced testing, prepare exactly: 1 Duck, 1 Cash Register, 1 Piñata.  
2. Bring items to the Cauldron area and set up single-item staging spots so each item can be routed cleanly into an input. Do not leave items just “near” the workbench — they must fully enter the input zone.  
3. Insert items one at a time, ensuring each object is accepted (you should see the item disappear into the input). The order of insertion is not a documented quality rule; the key is acceptance into the input.  
4. Observe the Cauldron’s cycle and collect the produced Anomaly. Confirm the quality matches the combination rules (lower / normal / enhanced).  
5. Repeat the manual cycle at least once to confirm consistent acceptance and to learn the exact physical positions and timing your automation will need.

Complete a clear manual success before scaling to machines — this single success is the physical reference point for lanes, buffer sizes, and insertion timing.

## Why the Cauldron Looks Like It Is Not Working
If the Cauldron appears inactive, the most common cause is delivery — one or more inputs never actually entered the workbench. Items sitting adjacent to the inputs do not count. Other delivery problems include misalignment when multiple items arrive at once or items being destroyed before insertion (see Piñata fragility). Always verify each object truly entered the Cauldron before assuming a bug.

## Why Items Get Ejected From the Cauldron
Community reports (not official patch rules) indicate the Cauldron can eject or “pop” objects when too many of a single ingredient are fed or when inputs collide while staging. Treat this as community-observed behavior rather than an official 1.0.8 mechanic. To reduce ejections:
- Use single-item buffers so only one object reaches the input at a time.  
- Avoid tight clustering of multiple inputs.  
- Confirm each item has been accepted before sending the next.

Automation tends to amplify these staging problems; small misalignments that are recoverable by hand become repeatable failures when automated.

## Why the Piñata Breaks Before It Arrives
Piñatas remain fragile in transit under 1.0.8. They commonly break from collisions, intersecting lanes, or long/high-traffic routes. Prevent breakage by:
- Routing Piñatas on short, isolated lanes.  
- Using dedicated buffers that prevent other items from colliding with them.  
- Testing a manual run to confirm the Piñata survives the path before adding automated throughput.

Broken Piñatas will not count as valid inputs, and a broken Piñata can make a cycle fail or produce an unexpected result.

## When to Automate Phase 4
Automate only after you can reliably run the Cauldron manually and reproduce the same quality result repeatedly. Reasons:
- Automation multiplies alignment and fragility failures.  
- A confirmed manual cycle provides exact spatial and timing references for conveyor lanes and inserters.  
- Start automation with low throughput and single-item buffers; scale only after monitoring for ejections and breakage.

For full factory designs and lane examples, see [Automation](/automation/).

## Common Mistakes
- Assuming “near” equals “accepted” — items must fully enter the Cauldron input.  
- Sending Piñatas through mixed or high-traffic lanes and losing them to breakage.  
- Trying to automate before a verified manual cycle (automation amplifies errors).  
- Allowing multiple inputs to collide at the Cauldron and trigger rejects/ejections.  
- Treating community reports about ejection/stock limits as official patch rules — they are observational and should guide staging caution, not design certainty.

## FAQ
### What is the Cauldron?
The Cauldron is the Anomaly workbench (official 1.0.8 name) used in Phase 4 to combine three inputs into an Anomaly; quality depends on the variety of inputs.

### What happens with 3 same products?
Three identical products produce a lower-quality (lesser) Anomaly.

### What happens with 2 different product types (3 total)?
Three inputs composed of exactly two distinct product types produce a normal-quality Anomaly.

### What happens with one of each (Duck + Cash Register + Piñata)?
One Duck + one Cash Register + one Piñata produces an enhanced-quality Anomaly (confirmed in 1.0.8).

### Which recipe produces enhanced Anomaly?
The enhanced recipe is exactly: 1 Duck + 1 Cash Register + 1 Piñata.

### Why are items ejected / popped out of the Cauldron?
Players report (community evidence) that feeding too many of one ingredient or allowing inputs to collide can cause ejections. This is community-observed behavior and not stated as an official patch rule; use single-item staging to reduce the risk.

### How do I run the first Phase 4 Anomaly manually?
Stage one set of three items per the desired tier, ensure each object fully enters the Cauldron input, run the cycle, and confirm the produced quality. Repeat until consistent, then consider automation.

### When should I automate?
Only after at least one successful manual cycle. Automation multiplies alignment and fragility problems; verify positions and timing first.

## Related Guides
- [Automation](/automation/) — factory setup and Phase 4 lanes  
- [Secret Ending](/secret-ending/) — where Anomalies connect in progression  
- [Percentage Pipe](/percentage-pipe/) — 10 Anomalies × 10% = 100%  
- [Troubleshooting](/troubleshooting/) — save and tool issues  
- [Updates](/updates/) — Update 1.0.8 patch notes hub
