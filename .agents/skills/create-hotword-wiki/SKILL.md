---
name: create-hotword-wiki
description: Generate or check a single-game hotword wiki inside LynneLan3/game-wiki-starter from research input, official assets, site-spec.yaml, and local site-input materials. Explicit invocation only.
---

# create-hotword-wiki

Build or verify one single-game wiki in `LynneLan3/game-wiki-starter` using:

```text
npm run verify:context
→ site-spec.yaml / site-input checks
→ npm run site:generate (--dry-run, then real, then second run)
→ npm run site:generate -- --check
→ npm run validate:generated
→ git status / visual check
```

Codex understands sources and runs the workflow. The generator performs deterministic file writes. Validators block bad results.

Use `validate:generated` after site generation. Do **not** run `validate` / `validate:template` / `verify:template` / `test:context` / `test:generator` as part of the live build flow (those remain for template maintenance and CI).

## Explicit invocation only

Do not start this skill unless the user explicitly asks for `$create-hotword-wiki` / `create-hotword-wiki`.

## Required reading before edits

1. `AGENTS.md`
2. `references/input-contract.md`
3. `references/content-policy.md`
4. `references/asset-policy.md`
5. `references/qa-checklist.md`
6. `references/output-contract.md`
7. `references/repo-context.md`

## Content planning sequence

Before writing `site-spec.yaml` pages, follow this order:

```text
 1. Research real player demand
 2. Define site identity (game, repo, GitHub, Vercel)
 3. Discover official artwork / screenshots and record provenance
 4. Define the theme from the site identity
 5. Define Primary Intents
 6. Plan Guide pages
 7. Assign Categories
 8. Define Player Routes
 9. Order route.pages
10. Define route Fast Answers
11. Configure Homepage Start Here
12. Configure Popular Questions
13. Add eyebrow / facts / quickAnswer
14. Add evidence / sources
15. Define next-step relations
16. Assign useful visuals and run the official asset bootstrap
17. Generate, visually check, and validate
```

Intent first, route journey second, category fallback third. See `references/content-policy.md` for all rules.

## Execution stages (strict order)

1. Run repository identity / context precheck: `npm run verify:context`.
   - Do **not** require the local branch name to equal the Codex UI source branch.
   - Accept `work`, detached HEAD, or other checkout names used by Codex Cloud.
   - Report `identityMode` as `remote-verified` or `content-marker-verified`.
   - Do **not** add, modify, or invent a Git remote.
   - Do **not** claim the container independently verified the Codex Cloud UI source branch when remotes are absent.
2. If `verify:context` fails, stop. Treat this as a **repository identity / context** Error, not a missing-spec Error.
3. Only after context passes: check `site-spec.yaml` and `site-input/**` (and declared assets / usageStatus).
   - Missing `site-spec.yaml` or `site-input/**` must stop generation as an **input** Error.
   - Never report missing input files as a wrong-repository identity failure.
4. Read the reference contracts above.
5. Add `assetBootstrap.allowedHosts` for publisher/developer/press-kit sources, then run `npm run assets:bootstrap -- --spec site-spec.yaml --dry-run` and review that every remote URL is official, Steam, or press-kit.
6. Run the same command without `--dry-run` when official assets are approved for local preview; preserve `sourceUrl`, `sourceType`, `alt`, and `usageStatus`.
7. Run input prechecks (spec parse / source files / assets) via generator dry-run prerequisites.
8. If any Error exists, stop before modifying generated files.
9. Run `npm run site:generate -- --spec site-spec.yaml --dry-run`.
10. Report the generation plan to the user.
11. Run `npm run site:generate -- --spec site-spec.yaml`.
12. Run a second `npm run site:generate -- --spec site-spec.yaml` and confirm idempotency (`written=0` / no unexpected deletes).
13. If needed, edit only non-generated sources (`site-spec.yaml`, `site-input/**`, hand-maintained code). Never hand-edit managed outputs.
14. Run `npm run site:generate -- --spec site-spec.yaml --check`.
15. Run `npm run validate:generated` (manifest → generator check → generated-site validation → Astro check → Astro build).
    - Do **not** run `npm run validate`, `validate:template`, `verify:template`, `test:context`, or `test:generator` in this flow.
14. Run `git diff --check`.
15. Inspect `git status` / diff for unexpected files (secrets, `dist`, `.env`, temp dirs).
16. If browser tooling is available, spot-check desktop and mobile Hub + one guide.
17. Output the standard site report from `references/output-contract.md`, including:
    - current task work branch (may be `work` or detached)
    - current HEAD
    - repository identity mode
    - whether the source branch is independently verifiable inside the container
18. Do not commit or push unless the current user task explicitly authorizes it.
19. Never auto-deploy or auto-merge.

## Stop conditions

Stop immediately when any of these are true:

- `npm run verify:context` fails (wrong remote, missing/mismatched `REPOSITORY_ID`, broken template structure)
- A Git remote exists but points at a repository other than `LynneLan3/game-wiki-starter`
- Unrelated dirty worktree changes are present
- Critical factual sources / `site-spec.yaml` / declared assets are missing (**input** failure after identity passed)
- `usageStatus` is `unknown` and the task requires public shipping clearance
- Target path collides with a non-managed file
- Path / slug collisions
- `validate:generated` or build fails and cannot be fixed safely in scope
- Work requires domain, DNS, payment, backend auth, or production deploy changes
- Work requires deleting unknown user files
- Work requires changing already-live public URLs outside the declared hub/page plan

## Non-failures in Codex Cloud

These alone must **not** fail repository identity:

- Local branch name is `work`
- Detached HEAD
- Empty `git remote -v` when `REPOSITORY_ID` and required template structure verify as `content-marker-verified`

## Output

Always finish with the fixed report sections in `references/output-contract.md`.
