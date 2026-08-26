# Project P.I.T.T. Trade Terminal — evidence brief

## Intent and scope

Create one short, answer-first English blocker page at `/trade-terminal/` for these related intents:

- project pitt trade terminal
- project pitt trading terminal
- project pitt how to use trade terminal
- project pitt clear items
- project pitt remove items
- project pitt cash registers piling up

Use the exact requested structure and keep the page practical, not a machine encyclopedia:

1. Quick Answer
2. Where is the Trade Terminal?
3. How to use the Trade Terminal
4. What does the right switch do?
5. Trade Terminal vs Clear Items
6. Cash Registers piling up / game crashing
7. FAQ

The page must visibly say `Updated for 1.0.5`.

## Verified facts to use

1. The Trade Terminal is used to clear/remove or vacuum products from the scene. Do not claim more detailed device mechanics than the evidence supports.
2. A player report in the Steam Community discussion says the switch on the right of the trading terminal can vacuum all the products. Treat this as current player-tested/community-confirmed evidence, not an official patch-note claim.
3. The official Steam Community 1.0.5 update notes add a `Clear Items` button in the pause menu to remove annoying items that could make the game crash or become unplayable.
4. The same official 1.0.5 update note explicitly says `Clear Items` will not give back any money. Do not describe it as a refund, sale, payout, or recovery of item value.
5. The Steam discussion reports a mountain of Cash Registers piling up in one spot and causing physics lag/crashes; the player later says they could reach the trading terminal only after several crashes, while another player could not reach it. Use this only to explain why the pause-menu fallback matters.
6. The location wording must remain bounded: say the page explains how to use the Terminal once the player can reach it, but do not invent a room name, exact coordinates, unlock condition, or route. If the evidence does not establish a precise location, say so briefly.
7. The other lever/switch function is not reliably evidenced. Do not write what it does or imply that it has a known role.
8. Do not claim that the Trade Terminal refunds money, sells products, or has any other economy behavior. The no-refund fact applies specifically to the official `Clear Items` button.
9. In the article, omit all economy comparisons for the Trade Terminal. Do not write “the Terminal does not refund,” “does not sell,” “no sale,” or similar. Only answer the refund question for `Clear Items`, using the official 1.0.5 wording.
10. Do not add generic interaction, movement, camera, lag-management, route, or performance advice. Do not describe Clear Items as selling, preserving value, selectively removing, or any other behavior beyond removing annoying items and not giving back money. Keep the finished article under 850 words and use only the requested headings/questions.
11. Markdown format is required: render each numbered section as an H2 with `##`, render each FAQ question as an H3 with `###`, and keep the exact requested FAQ wording. Do not output section names as unformatted plain text.

## Required answer-first content

The opening answer must directly communicate all four points:

- The Trade Terminal clears/vacuums products from the scene.
- Player-tested evidence confirms the right-side switch can vacuum products.
- If the pile makes the game stutter/crash or blocks access, use `Pause Menu → Clear Items` in version 1.0.5.
- `Clear Items` does not refund money.

Keep the distinction clear:

- Trade Terminal: use it when the player can reach the Terminal; explain the right switch based on the player report.
- Clear Items: emergency cleanup from the pause menu when the scene is unplayable or the Terminal is buried; official 1.0.5 behavior; no refund.

Do not promise that `Clear Items` preserves, sells, or selectively removes particular objects. Use “items/products” only as supported by the official wording and player report.

## FAQ questions that must appear verbatim as headings or clearly labeled questions

- How do I use the Trade Terminal?
- What does the Trade Terminal remove?
- How do I remove lots of items?
- How do I clear Cash Registers?
- What if I cannot reach the Trade Terminal?
- Does Clear Items refund money?

## Internal links

Include these exact guide-template links in the article’s Related Guides area:

- `[Project P.I.T.T. Automation guide]({{page:automation}})` for the related jam/route problem.
- `[x300 combo guide]({{page:x300-combo}})` only if it can be mentioned naturally as a downstream automation concern; omit it if that would pad the page.

The integrator will add a backlink from the Automation page and a homepage popular-question link separately. Do not invent a Cash Register page that is not present in this repository.

## Evidence sources

- Official/current update notes: https://steamcommunity.com/app/4026250/
- Player report about Cash Registers, crashes, and the right switch: https://steamcommunity.com/app/4026250/discussions/0/587309530805892814

## Editorial boundaries

No invented room names, coordinates, lever functions, keybinds, money values, item counts, unlock timing, economy behavior, or guaranteed performance claims. Do not add a generic introduction, SEO keyword repetition, or a long machine guide. The final English title, meta description, H1, quick answer, facts, body, and FAQ wording must be produced by APIMart.

LAUNCH-WINDOW EXPANSION
- Keep the existing Trade Terminal intent and slug, but make the page a public automation guide rather than only a cleanup fallback.
- Explain what the Terminal does, how the interaction/timing works only to the extent supported by the brief, and how object/cube value should be understood without inventing a price or economy rule. If no reliable numeric value is established, say so plainly.
- Add a short “when it becomes useful” connection to automation, batch cleanup, and jam recovery. Link to Automation and x300 only when natural.
- Prefer a real how-to title such as “How to Use the Trade Terminal in Project P.I.T.T.”; APIMart must choose the final natural title.
