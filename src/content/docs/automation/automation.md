---
title: "Project P.I.T.T. Automation: Panels, Fans, and Routing"
description: "How to make panels, fans, magnets, pistons, and launchers behave like a reliable production lane without prescribing one best build."
category: automation
slug: automation
status: confirmed
featured: true
role: core
assetType: article
sidebar:
  order: 1
intents:
  - project-pitt-automation
  - project-pitt-how-panels-work
  - project-pitt-fans-magnets-pistons-launchers
quickAnswer: "Build a short, visible lane first: snap panels to stable solid surfaces, use fans or other movers to point products toward one receiver, and leave room to clear jams. Reliability comes from alignment and recovery access, not from the largest possible machine pile."
related:
  - x300-combo
  - 200kg-plate
  - achievements
relations:
  -
    slug: x300-combo
    type: next-step
  -
    slug: 200kg-plate
    type: related
  -
    slug: achievements
    type: related
sources:
  -
    type: steam
    title: Steam Community automation discussion
    url: https://steamcommunity.com/app/4026250/discussions/0/572666820169834610/
  -
    type: steam
    title: Steam Community developer FAQ
    url: https://steamcommunity.com/app/4026250/
  -
    type: official
    title: Project P.I.T.T. Steam store page
    url: https://store.steampowered.com/app/4026250/Project_PITT/
cover: ../../../assets/gameplay/automation.jpg
changeSummary: Initial V1 page focused on reliable principles rather than a claimed best build.
eyebrow: Factory Systems
facts:
  -
    label: First test
    value: "One product, one lane"
  -
    label: Panels
    value: Snap to solid surfaces
  -
    label: Sticky tools
    value: Keeps contact in place
  -
    label: Goal
    value: "Fewer jams, easier recovery"
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/automation.md
-->
## How do panels work in Project P.I.T.T.?

Treat panels as **route walls and surfaces**, not as a finished machine by themselves. Place one panel, aim at a stable solid surface, and use the snap preview: the Steam Community FAQ describes a valid snap as a green highlight. Once the route works with one product, add the next panel and test again.

The developer has also described a **sticky tools** upgrade for keeping a panel in contact with the floor or another stuck object. That makes repeatable lanes easier, but it does not remove the need to test the receiving end.

## What do fans, magnets, pistons, and launchers do?

Use each mover for one clear job in the lane:

- **Fans**: provide directional force. Angle them to feed a receiver, not to create a chaotic cross-current.
- **Magnets**: gather or pull compatible objects. Keep their pickup area away from the exit so they do not recapture a product that already passed.
- **Pistons**: create a repeatable push. Give the stroke a clear landing zone and keep the return path free.
- **Launchers**: add a deliberate transfer between two sections. Test the landing point with one product before increasing the launch rate.

The exact unlock timing and behavior can change with patches. These are operating principles for testing the tools, not a claim that one arrangement is the best build.

## How should I route products?

Build a **short, visible lane**:

1. Pick one source and one receiver.
2. Put panels around the path so products cannot escape sideways.
3. Use one mover to cover the first gap; do not stack fans, magnets, and launchers before you know which one failed.
4. Keep a recovery opening near every bend and the receiver.
5. Feed one product by hand, then watch three to five cycles before scaling.

If a product misses, repair the first miss in the chain. Adding more force usually hides the real alignment problem.

## Why does my automation keep jamming?

Check the lane in this order:

- **Source**: is the machine producing at the expected pace?
- **First transfer**: does the product leave the source cleanly?
- **Containment**: is a panel edge catching or redirecting it?
- **Receiver**: is the target open, or is a previous product blocking it?
- **Recovery**: can you reach the jam without dismantling the whole build?

Clear loose products before a long combo attempt. A factory that is slightly slower but easy to inspect is more useful than a dense pile that cannot be repaired.

If a jam turns into a pile that blocks the scene, see [the Trade Terminal cleanup guide](/trade-terminal/) for the right-side vacuum switch and the 1.0.5 pause-menu fallback.

## Is there a best automation build?

Not for this V1. Steam player reports describe tunnels and fan lanes as workable but imperfect, and also report snapping and output-direction problems. The safe takeaway is to prototype in small sections, keep the lane visible, and scale only after it survives repeated cycles.

## How does automation help the x300 combo?

Once one lane feeds consistently, use it for [the x300 combo attempt](/x300-combo/). Keep the automation page open while you test: every missed receiver is a combo risk, and every recovery opening is time you can save.

### Next question

For the milestone itself, read [how MORE!, EXTRA!, and MEGA! work](/x300-combo/).
