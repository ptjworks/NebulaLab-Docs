# Nebula Lab Docs

Public documentation site for Nebula Lab.

Local preview:

```bash
npm install
npm run docs:dev
```

Build:

```bash
npm run docs:build
```

The site is published to Cloudflare Pages at:

```text
https://nebulalab.app/
```

Cloudflare Pages settings: build command `npm run docs:build`, output directory
`docs/.vitepress/dist`, environment variable `NODE_VERSION=24`.

The legacy GitHub Pages path `https://tshygo.github.io/NebulaLab-Docs/` now serves a
redirect shell only (see `redirect/` and `.github/workflows/deploy.yml`), so the docs
links baked into already-released app builds keep working.

## PTJ Works ownership transition

The public repository moved to [ptjworks/NebulaLab-Docs](https://github.com/ptjworks/NebulaLab-Docs)
on 2026-10-25. Its immutable repository ID is `1235769167`.

The canonical site remains `https://nebulalab.app/`; its domain, root base path
and Cloudflare Pages project do not change with the repository owner.

The reviewed `legacy-user-pages` CI artifact is published from
[TshyGO/tshygo.github.io](https://github.com/TshyGO/tshygo.github.io). This personal
Pages site retains `/NebulaLab-Docs/` independently of the documentation
repository. Never recreate `TshyGO/NebulaLab-Docs`: that would break GitHub's
repository redirects. The personal site's root 404 shell only redirects the
exact Docs namespace and its compatibility-check namespace, leaving unrelated
personal Pages paths alone.
The personal Pages repository must be absent or dedicated to this compatibility
site before publication; never replace an existing personal site wholesale.
Unrelated missing URLs receive a generic 404 page, with no automatic forwarding.

`Docs Compatibility` runs browser-script routing tests and a complete VitePress
build on a remote hosted runner, then produces the static personal Pages
artifact with `node scripts/build-legacy-user-pages.mjs out/legacy-user-pages`.
For future checks, use `/NebulaLab-Docs-compat-check/manual/workflow?from=legacy#start`
to probe the personal site's fallback, and verify actual old `/NebulaLab-Docs/`
root/deep links after any hosting change.
Both must reach the canonical site with path, query and fragment retained.
Automatic forwarding requires JavaScript; browsers with scripts disabled receive
a manual canonical-site link instead of a timed redirect that drops URL state.
The artifact builder intentionally requires a fresh output directory and refuses
to remove or overwrite existing output; use a new directory for a repeat build.

The AI review caller pins the same immutable central SHA in both fields, with
both repository identities registered. Existing Lane and Cloudflare credential
slots remain unchanged; no private repository is part of this migration.
