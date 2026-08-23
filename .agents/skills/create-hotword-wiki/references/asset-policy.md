# Asset policy

- Official asset bootstrap is allowed only for declared `sourceUrl` entries with
  `sourceType: official`, `store` (Steam / its official CDN), or `press-kit`.
  Competitor sites, search-result hosts, and random image search are rejected.
- `official` and `press-kit` entries must also match the top-level
  `assetBootstrap.allowedHosts` list; `store` entries are restricted to Steam
  and its official CDN hosts.
- Run `npm run assets:bootstrap -- --spec site-spec.yaml --dry-run` to inspect
  the plan, then run it without `--dry-run` before site generation. The
  generator itself remains deterministic and consumes only local files.
- Every asset needs local `source`, `target`, `alt`, `sourceType`, and `usageStatus`.
- `unknown` / `review-required` are **not** commercial clearance.
- Hero images require meaningful alt text.
- `target` must stay under `src/assets/`; path traversal (`..`, backslashes, absolute paths) is a hard error.
- Symlinked `source` files are rejected in V1 (prevents escaping the allowed input tree).
- Do not overwrite unknown/non-managed files; stop on collision instead.
- Keep provenance (`sourceUrl`) for every bootstrapped asset. Asset metadata is
  not a rights clearance: `review-required` still needs human confirmation.
- `sourceType` / `usageStatus` are recorded in `.site-generator-manifest.json` for audit; they are not game UI chrome.
