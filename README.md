# curtisdarst.github.io

Personal site for Curtis Darst, Senior Solutions Architect in AWS Worldwide Public
Sector. Served by GitHub Pages at <https://curtisdarst.github.io/>.

## What's here

```
index.html            the whole page. Every section lives here
assets/css/style.css  the only stylesheet. Theme tokens are in :root at the top
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
copy a `.repo-card`. Use `<a>` when it links somewhere, `<article>` when it
doesn't. Talks and posts are `<li>` entries in the `.pub-list`.

## Theming

Every color, font, and width is a custom property in the `:root` block at the top
of `assets/css/style.css`. The accent gradient (`--grad`) drives the h1, the
primary buttons, and the rule under the hero.

## Images

`assets/img/headshot.jpg` is the hero portrait (400x400). It displays at 280px,
so it is slightly soft on high-DPI screens. Swap in a 600x600 or larger crop at
the same path when you have one and nothing else needs changing.

`assets/img/og-card.jpg` is the 1200x630 social preview, generated from the
headshot and the site palette. Regenerate it if the headline changes.

## Deliberately left off

Your phone number is on the résumé but not on the page, because a public GitHub
Pages site is indexed and scraped. Add it to the contact section if you want it
there.

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```
