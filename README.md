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

The canonical site remains `https://nebulalab.app/`; its domain, root base path
and Cloudflare Pages project do not change with the repository owner.

Before transferring this repository to `ptjworks`, publish the reviewed
`legacy-user-pages` CI artifact from `TshyGO/tshygo.github.io`. This personal
Pages site retains `/NebulaLab-Docs/` independently of the documentation
repository. Never recreate `TshyGO/NebulaLab-Docs`: that would break GitHub's
repository redirects. The personal site's root 404 shell only redirects the
exact Docs namespace and its compatibility-check namespace, leaving unrelated
personal Pages paths alone.

`Docs Compatibility` runs browser-script routing tests and a complete VitePress
build on a remote hosted runner, then produces the static personal Pages
artifact with `node scripts/build-legacy-user-pages.mjs out/legacy-user-pages`.
Verify `/NebulaLab-Docs-compat-check/manual/workflow?from=legacy#start` before
transfer, and the actual old `/NebulaLab-Docs/` root/deep links afterwards.
Both must reach the canonical site with path, query and fragment retained.

The AI review caller pins the same immutable central SHA in both fields, with
both repository identities registered. Existing Lane and Cloudflare credential
slots remain unchanged; no private repository is part of this migration.
