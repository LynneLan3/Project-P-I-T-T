# APIMart content brief: Project P.I.T.T. 200kg — community weight table refresh

TARGET URL
/200kg-plate/

## Intent Brief

```json
{
  "primaryQuery": "project pitt 200kg",
  "queryCluster": [
    "project pitt 200kg",
    "project pitt 200 kg",
    "project pitt weight",
    "project pitt heaviest item",
    "project pitt heaviest items",
    "project pitt sponge"
  ],
  "userJob": "Find heavy, stable objects fast enough to push the platform to at least 200kg, and learn which item weights already have community-tested readings.",
  "intentOwnerStatus": "KEEP",
  "serpPromise": "Explain how to reach >=200kg with stable mass, show community-tested item weights as observed values, and remind players that the live platform readout beats any fixed recipe.",
  "secondaryIntents": [
    { "query": "project pitt 200 kg", "action": "KEEP_SUPPORTING" },
    { "query": "project pitt weight", "action": "KEEP_SUPPORTING" },
    { "query": "project pitt heaviest item", "action": "KEEP_SUPPORTING" },
    { "query": "project pitt heaviest items", "action": "KEEP_SUPPORTING" },
    { "query": "project pitt sponge", "action": "KEEP_SUPPORTING" }
  ]
}
```

## Metadata Update

HOLD / NO_CHANGE unless there is a genuine mismatch with the Intent Brief.

Existing Title (healthy CTR — do NOT rewrite for SEO cosmetics):
How to Reach 200kg in Project P.I.T.T. — Best Heavy Items & What to Do Next

Existing page CTR is healthy (~10.5% at avg position ~4.7). Do not force a Title rewrite for a single 0-click query. NO_CHANGE is the expected metadata outcome.

## Content Gap To Fill

Current page lacks a concrete community-tested weight table and FAQ still says exact weights are unavailable. Add a clearly labeled community-tested / observed table.

## Community-Tested Weights (NOT official)

Cross-checked community sources (projectpitt.online item-weights / tools / panels guides; research date 2026-09-05):

Confirmed / consistently reported on-platform readings:

| Item | Observed weight | Evidence label |
| --- | --- | --- |
| Panel | 2 kg | community-tested / observed |
| Basketball Hoop | 3 kg | community-tested / observed |
| Piston | 5 kg | community-tested / observed |
| Wheeled Cart | 6 kg | community-tested / observed |
| Industrial Turbine / Fan Level 3 | 8 kg | community-tested / observed |

Conflicting / state-dependent (report cautiously):

| Item | Notes |
| --- | --- |
| Gambling Crate | Community reports vary by opened/unopened state and contents (~5 kg vs ~10 kg reports). Do not pick one official value. |
| Bumper | ~5 kg community report; verify on platform |
| Remote | ~1 kg; too light for practical bulk load |
| Sponge | Exists as a tool for wiping markings; not a practical heavy load for 200kg. Do not invent a sponge weight. |

## Must Include Facts

- Goal is kilograms (>= 200kg), not object count
- Fuse progression is a prerequisite
- Live platform readout always outranks any fixed recipe or table
- Arithmetic examples are examples only — not the only best route; exact 200 not required
- After success → Percentage Pipe
- Keep “Already reached 200kg?” callout linking Percentage Pipe
- Label the table community-tested / observed — never official

## Arithmetic Examples (examples only)

- 25 × Industrial Turbine (8 kg) = 200 kg
- 34 × Wheeled Cart (6 kg) = 204 kg
- 40 × Piston (5 kg) = 200 kg
- Mixed: 20 Turbines (160) + 7 Carts (42) = 202 kg

State clearly: example math only; not unique best path; >=200kg is enough.

## Forbidden Claims

- Do not present community weights as official publisher data
- Do not invent a single official heaviest item
- Do not invent sponge weight just because sponge appears in secondary queries
- Do not change slug /200kg-plate/

## Internal Links

- [the Fuse Box guide]({{page:up-achievement-fuses}})
- [the Percentage Pipe Guide]({{page:percentage-pipe}})

## Writing Rules

- Body content: Shared Writer / APIMart must write the English article
- Metadata: prefer NO_CHANGE for title/description/h1 unless genuine mismatch
- If metadata writer is run, it may return the existing title unchanged
- Update FAQ so it no longer claims “no reliable specific weights” — point to the community-tested table with the evidence boundary intact
