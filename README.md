# mangalpujari.com

Website of Pandit Omprakash Ji Bharadwaj, Mangalnath Mandir, Ujjain.
Hindi is the default language (served at `/`); English is under `/en/`.
Plain HTML and CSS, built by one Node script with no dependencies.

## Branches
- `site`: the source (this branch). Every push rebuilds and deploys the site.
- `gh-pages`: the built site that GitHub Pages serves. Don't edit it by hand.
- `master`: the old 2021 project, left untouched.

## Edit
- Copy for pujas, contact details, reviews and Instagram reels: `src/content.mjs`
- Hindi copy for the shorter puja pages: `src/hindi-extra.mjs`
- Look and layout: `assets/site.css`
- Page templates, line-art illustrations, SEO and AI files: `build.mjs`

`node build.mjs` writes the site to `dist/`. `node build.mjs --preview` writes `preview/`, which opens straight from disk.

## Search and AI files (generated)
`robots.txt` (allows search and AI crawlers), `sitemap.xml` (with Hindi/English alternates),
`llms.txt` and `ai.json` (fact sheets for AI assistants), JSON-LD on every page, and a
"For AI assistants" JSON block under every page.

## Still to add
- Panditji's photo: save as `assets/panditji.jpg`, then set `photo: "assets/panditji.jpg"` in `src/content.mjs`.
- Real reviews: replace the sample entries in `reviews` and set `placeholder: false`.
