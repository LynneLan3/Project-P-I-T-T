---
title: How to Use the Trade Terminal in Project P.I.T.T.
description: "Updated for 1.0.5: Learn how to use the Trade Terminal, its player-tested right-side vacuum switch, and the Pause Menu → Clear Items fallback."
category: automation
slug: trade-terminal
status: confirmed
featured: true
role: core
assetType: article
sidebar:
  order: 3
intents:
  - project-pitt-trade-terminal
  - project-pitt-trading-terminal
  - project-pitt-how-to-use-trade-terminal
  - project-pitt-clear-items
  - project-pitt-remove-items
  - project-pitt-cash-registers-piling-up
quickAnswer: "Updated for 1.0.5 — the Trade Terminal clears/vacuums products, its player-tested right-side switch can vacuum them, and Pause Menu → Clear Items is the no-refund fallback when piles block access."
related:
  - automation
  - x300-combo
  - shift-scheduler
relations:
  -
    slug: automation
    type: related
  -
    slug: x300-combo
    type: related
sources:
  -
    type: steam
    title: "Project P.I.T.T. Steam Community — Update 1.0.5"
    url: https://steamcommunity.com/app/4026250/
  -
    type: steam
    title: "Steam Community discussion — Cash Register pileup and Trading Terminal"
    url: https://steamcommunity.com/app/4026250/discussions/0/587309530805892814
changeSummary: "Public automation guide for Terminal use, right-side interaction, object/value questions, cleanup mistakes, and the 1.0.5 fallback."
eyebrow: Trade Terminal
facts:
  -
    label: Function
    value: Clears/removes or vacuums products from the scene.
  -
    label: Right-side switch
    value: "Player-tested report: the switch on the terminal's right can vacuum products (Steam discussion)."
  -
    label: Pause Menu Clear Items
    value: "Official 1.0.5 patch adds a 'Clear Items' button to remove items that may cause crashes or unplayable scenes."
  -
    label: No refund
    value: "Official 1.0.5 note: 'Clear Items' will not give back any money."
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/trade-terminal.md
-->
## Quick Answer

- The Trade Terminal is used to clear/vacuum products/items from the scene.
- Current player-tested community findings report the switch on the right side of the Terminal can vacuum all the products.
- If a pile of items makes the game stutter, crash, or blocks access to the Terminal, use Pause Menu → Clear Items (new in 1.0.5) as an emergency fallback.
- Clear Items will not give back any money (official 1.0.5 update note).

Updated for 1.0.5

## Where is the Trade Terminal?

This page explains how to use the Terminal once you can reach it. The available evidence does not establish a single fixed room name, exact coordinates, or a guaranteed route — location and access can vary by run. Do not assume a specific placement from this guide.

## How to use the Trade Terminal

- Purpose: it is a scene-cleanup device for products/items; use it when you can physically access its interface.
- Community-tested behavior: players report a right-side switch that vacuums products from the scene. That is the only reliably reported action tied to the Terminal in current community findings.
- When it becomes useful: the Terminal is practical for batch cleanup, jam recovery, and as part of automation or larger tidy-up routines once you can reach it. See [Project P.I.T.T. Automation guide](/automation/). For downstream automation concerns that mention high-volume clearing, see the [x300 combo guide](/x300-combo/).

## What does the right switch do?

Current player-tested community findings indicate the right-side switch can vacuum products — players report flipping it removes products from the scene. Other switch/lever functions are not reliably evidenced; available reports do not establish a confirmed role for the other controls.

## Trade Terminal vs Clear Items

- Trade Terminal: community-tested cleanup/vacuum function you use when you can reach the device; right-side switch reported to pull products. The Terminal's behavior beyond that community finding is not established in the available evidence.
- Pause Menu → Clear Items: official 1.0.5 emergency cleanup option intended to remove annoying items that can make the game crash or become unplayable. Official note: Clear Items will not give back any money.

Use the Terminal when reachable for normal cleanup. Use Clear Items from the pause menu when the scene is unplayable, the Terminal is buried, or the game is unstable.

## Trade Terminal vs Clear Items vs removing placed tools

- Trade Terminal: current player-tested community behavior is a product vacuum/cleanup function.
- Pause Menu → Clear Items: official 1.0.5 emergency cleanup for annoying items that may make the game crash or become unplayable; official wording: Clear Items will not give back any money.
- Placed tools / panels: the available evidence does not establish a general way to delete or recover placed tools. Do not assume Clear Items or the Terminal selectively removes or refunds placed tools; there is no reliable community or official confirmation on that point.

## Cash Registers piling up / game crashing

Players have reported a mountain of Cash Registers (or similar piled items) causing physics lag and crashes. Some reports say the Terminal was only reachable after several crashes; other players could not reach it at all. These reports illustrate why the pause-menu Clear Items option (1.0.5) matters as an emergency fallback when the scene becomes unplayable or the Terminal is inaccessible.

## FAQ

### How do I use the Trade Terminal?
Use it when you can reach it to clear or vacuum products from the scene. Community reports identify a right-side switch that vacuums products; further interaction details beyond that are not established by the available evidence.

### What does the Trade Terminal remove?
Community-tested findings indicate it removes/vacuums products/items from the scene. Exact selection rules or economy behavior beyond that community finding are not established.

### How do I remove lots of items?
If you can reach the Trade Terminal, use its cleanup function (players report the right switch vacuums products). If the pile prevents access or makes the game unstable, use Pause Menu → Clear Items (added in 1.0.5) as an emergency cleanup.

### How do I clear Cash Registers?
Community reports show piled Cash Registers can cause severe lag/crashes. If you can reach the Trade Terminal, its vacuuming behavior (right switch) is the community-tested option. If the pile blocks access or the game is crashing, use Pause Menu → Clear Items.

### What if I cannot reach the Trade Terminal?
If the Terminal is buried or you cannot reach it because of crashes or piled items, use Pause Menu → Clear Items (1.0.5) to clear annoying items from the scene.

### Does Clear Items refund money?
No. The official 1.0.5 update notes explicitly state: Clear Items will not give back any money.

## Related Guides

- [Project P.I.T.T. Automation guide](/automation/)
- [x300 combo guide](/x300-combo/)
