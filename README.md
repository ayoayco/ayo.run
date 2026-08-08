# Ayo.Run - What's Running?

Site: [ayo.run](https://ayo.run)

Built with [Eleventy](https://www.11ty.dev/). The list of running apps lives in
`src/_data/apps.json` — edit that file to add, remove, or reorder an entry, and
the page is regenerated from it.

## Add an app

Append an object to `src/_data/apps.json`:

```json
{
  "name": "Readeck",
  "project": "https://readeck.org",
  "url": "https://read.ayo.run",
  "label": "read.ayo.run"
}
```

- `name` — how the app is called, linked to `project`
- `project` — the upstream project's homepage or README
- `url` — where it's running (the href, e.g. a deep link to a status page)
- `label` — the link text for `url`, usually the bare subdomain

## Set up local server

```bash
npm i
npm start
# or...
npm run dev
```

Then open the URL Eleventy prints (http://localhost:8080 by default). It rebuilds
and reloads when you edit `src/`.

## Build

```bash
npm run build
```

Writes the static site to `_site/`.
