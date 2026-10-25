# Nebula Lab Docs

Source of the Nebula Lab documentation site, <https://nebulalab.app/>. The site is
built with [VitePress](https://vitepress.dev/) and written in Chinese; this README
is for maintainers.

## Repository layout

| Path | Contents |
| --- | --- |
| `docs/` | Site pages: home page (`index.md`), `manual/`, `tutorials/`, `roadmap/` |
| `docs/.vitepress/config.ts` | Site configuration: root base path `/`, clean URLs, local search, sitemap for `https://nebulalab.app/` |
| `docs/.vitepress/theme/` | Custom theme: home page and navigation components, styles |
| `docs/public/` | Static files served from the site root (logo, favicons, screenshots) |
| `docs/superpowers/` | Internal plans and design specs, excluded from the site by `srcExclude` |
| `docs-writing/` | AI-assisted manual-writing workflow: style guide, terminology, fact packs, page briefs, prompts, review checklist |
| `docs-ai.config.example.json` | Config template for that workflow; copy it to the git-ignored `docs-ai.config.local.json` |
| `redirect/` | Redirect shells for legacy GitHub Pages URLs (see [Legacy URLs](#legacy-urls)) |
| `scripts/build-legacy-user-pages.mjs` | Builds the `legacy-user-pages` artifact for the legacy personal Pages site |
| `scripts/make-favicon.py` | Regenerates the favicon set from `docs/public/logo.png` (needs Pillow) |
| `test/legacy-redirect.test.mjs` | `node:test` tests for the redirect shells |
| `AGENTS.md` | Rules for coding agents working in this repository |

## Local development

CI uses Node.js 24; use the same major version locally. Dependencies are locked in
`package-lock.json` (VitePress 1.6.4).

```bash
npm ci                                    # install exactly what the lockfile pins
npm run docs:dev                          # dev server with hot reload
npm run docs:build                        # production build into docs/.vitepress/dist
npm run docs:preview                      # serve the production build locally
node --test test/legacy-redirect.test.mjs # redirect shell tests
```

## Workflows

| Workflow (file) | Trigger | What it does | Secrets |
| --- | --- | --- | --- |
| Deploy docs to Cloudflare Pages (`cf-pages.yml`) | Push to `main`, unless every changed file is under `redirect/` or is `deploy.yml`; manual | Builds the site and uploads it to Cloudflare Pages | `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` |
| Redirect legacy Pages URL to nebulalab.app (`deploy.yml`) | Push to `main` that changes `redirect/**` or `deploy.yml`; manual | Publishes `redirect/` to this repository's GitHub Pages site | None |
| Docs Compatibility (`docs-compatibility.yml`) | Every pull request; manual | Redirect tests, `npm ci`, full build; uploads the `docs-site` and `legacy-user-pages` artifacts | None |
| AI PR Review (`ai-pr-review.yml`) | Pull request opened, reopened, marked ready or pushed; `/review` comment | Three-lane AI review posted as PR comments | `PR_AGENT_LANE_{A,B,C}_KEY`, `PR_AGENT_LANE_{A,B,C}_API_BASE` |
| Claude Code Review (`claude-review.yml`) | Pull request to `main` (only when enabled); `@claude` comment | Claude review of documentation PRs | `CLAUDE_CODE_OAUTH_TOKEN` |

All jobs run on GitHub-hosted `ubuntu-latest` runners.

## Deployment

The site is built in GitHub Actions, not by Cloudflare. `cf-pages.yml` runs
`npm ci` and `npm run docs:build` on Node.js 24, then uploads
`docs/.vitepress/dist` with Wrangler to the Cloudflare Pages project
`nebulalab-docs` (branch `main`), so Cloudflare needs no access to this
repository. There is no scheduled rebuild; the home page looks up release
information in the browser.

## Legacy URLs

Already-released app builds link to `https://tshygo.github.io/NebulaLab-Docs/`.
Two GitHub Pages sites serve the redirect shell:

| URL | Served from | Updated by |
| --- | --- | --- |
| `https://tshygo.github.io/NebulaLab-Docs/` (legacy) | [TshyGO/tshygo.github.io](https://github.com/TshyGO/tshygo.github.io) | Committing a reviewed `legacy-user-pages` artifact by hand |
| `https://ptjworks.github.io/NebulaLab-Docs/` (this repository's own Pages site) | This repository | `deploy.yml` |

The shells forward any path under `/NebulaLab-Docs/` or
`/NebulaLab-Docs-compat-check/` to the same path on `https://nebulalab.app/`,
keeping the query and fragment. The target origin is fixed; the incoming path is
never interpreted as a URL. Forwarding needs JavaScript: with scripts disabled the
page shows a link to the site instead of a timed redirect that would drop the URL
state.

On `tshygo.github.io` the root `404.html` (from `redirect/user-site-404.html`)
forwards only those two namespaces. Any other missing URL on that site gets a
generic 404 page with no forwarding.

## PTJ Works ownership transition

The repository moved from `TshyGO` to
[ptjworks/NebulaLab-Docs](https://github.com/ptjworks/NebulaLab-Docs) on
2026-10-25. Its immutable repository ID is `1235769167`. GitHub redirects the old
repository URL; never recreate `TshyGO/NebulaLab-Docs`, as that would break those
redirects.

The canonical site is still `https://nebulalab.app/`; its domain, root base path
and Cloudflare Pages project do not depend on the repository owner. The existing
Lane and Cloudflare secret names are unchanged, and no private repository is part
of the migration.

The legacy `/NebulaLab-Docs/` namespace is now served by the personal Pages
repository [TshyGO/tshygo.github.io](https://github.com/TshyGO/tshygo.github.io),
independently of this repository. That repository holds only these
compatibility routes; publish there only while that is true, and never replace an
existing personal site wholesale. Nothing syncs it automatically. To update it:

1. Once the change is merged, run `Docs Compatibility` manually on `main` and take
   the `legacy-user-pages` artifact from that run, so the published shell matches
   `main` rather than an unmerged pull request. The workflow builds it with
   `node scripts/build-legacy-user-pages.mjs out/legacy-user-pages`. The script
   only writes to a new directory inside the checkout and refuses to overwrite
   existing output, so use a fresh directory for a repeat local build.
2. Commit its contents to `TshyGO/tshygo.github.io`, and update that
   repository's README, which records the run and source commit it was
   generated from.
3. In a browser, open
   `https://tshygo.github.io/NebulaLab-Docs-compat-check/manual/workflow?from=legacy#start`
   to probe the fallback, then real old `/NebulaLab-Docs/` root and deep links.
   Each must land on `https://nebulalab.app/` with path, query and fragment
   intact. Do the same after any hosting change. `curl` only shows the shell
   (with a 404 status for deep links), because forwarding runs in JavaScript.

The AI review caller (`ai-pr-review.yml`) pins the same full
[TshyGO/ci-central](https://github.com/TshyGO/ci-central) commit SHA in its
`uses:` reference and in `central_workflow_sha`; keep the two identical when
updating the pin. ci-central has review configurations registered for both the
`TshyGO/NebulaLab-Docs` and `ptjworks/NebulaLab-Docs` identities.

## Pull requests and review

The `main` ruleset requires a pull request with one approving review and all
review threads resolved; pushes dismiss stale approvals, and force pushes and
branch deletion are blocked. No status checks are required by the ruleset, so
confirm Docs Compatibility passed before merging.

- **AI PR Review** calls the reusable workflow
  `TshyGO/ci-central/.github/workflows/pr-review.yml`. Each round updates one
  status comment and one comment per lane (A, B, C) and takes roughly 5–15
  minutes. Opening or pushing to a pull request starts a round on its own. An
  owner, member or collaborator can comment `/review` to request one; if a review
  for the current head is already running, a guard job leaves a note and stands
  down instead of cancelling it.
- **Claude Code Review** reviews automatically only when the Actions variable
  `CLAUDE_REVIEW_ENABLED` is `true`. It is not set for this repository, and
  recent runs show the automatic job skipped. A PR comment that mentions
  `@claude` starts an on-demand run.
- `.coderabbit.yaml` turns off CodeRabbit's automatic reviews and chat replies.

Manual pages follow the workflow in [`docs-writing/`](docs-writing/README.md):
page facts come from current product sources, roadmap items are never presented
as current features, and every page PR gets human review before merge.
