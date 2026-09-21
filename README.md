# curtisdarst.github.io

Personal site for Curtis Darst — Senior Solutions Architect, AWS Worldwide Public
Sector. Served by GitHub Pages at <https://curtisdarst.github.io/>.

## What's here

```
index.html            the whole page — every section lives here
assets/css/style.css  the only stylesheet; theme tokens are in :root at the top
assets/js/script.js   mobile nav, footer year, email assembled at runtime
assets/img/           profile image
favicon.svg
```

No build step, no dependencies, no Jekyll. GitHub Pages serves the files as they
are, so anything committed to the default branch is live within a minute.

## Sections

`01 About` · `02 Experience` · `03 Projects` · `04 Education` ·
`05 Speaking & Writing` · `06 Certifications` · `07 Contact`

To add a role, copy an `<li class="role">` block in `#experience`. For a project,
copy a `.repo-card` — use `<a>` when it links somewhere, `<article>` when it
doesn't. Talks and posts are `<li>` entries in the `.pub-list`.

## Theming

Every color, font, and width is a custom property in the `:root` block at the top
of `assets/css/style.css`. The accent gradient (`--grad`) drives the h1, the
primary buttons, and the rule under the hero.

## Still to add

- **`assets/img/headshot.jpg`** — a square photo, 600×600 or larger. Currently
  showing a placeholder silhouette. Once added, point the `hero-photo` `src` at
  it and update the `og:image` / JSON-LD `image` paths.
- **`images/og-card.jpg`** — 1200×630, for link previews in Slack, LinkedIn, and
  iMessage. Until it exists, shared links show no image.
- **`Curtis-Darst-Resume.pdf`** — the nav and two buttons link to it.
- **AWS Compute Blog URL** — the 2023 Application Composer post in
  `#speaking` has no link yet; wrap the title in an `<a>` when you have the URL.

## Deliberately left off

Your phone number is on the résumé but not on the page — a public GitHub Pages
site is indexed and scraped. Add it to the contact section if you want it there.

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```
