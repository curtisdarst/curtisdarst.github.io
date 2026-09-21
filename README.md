# curtisdarst.github.io

Personal site for Curtis Darst, served by GitHub Pages at
<https://curtisdarst.github.io/>.

## What's here

```
index.html            the whole page — every section lives here
assets/css/style.css  the only stylesheet; theme colors are at the top
assets/img/           profile photo, favicon
```

No build step, no dependencies, no Jekyll. GitHub Pages serves the files as
they are, so anything you commit to the default branch is live within a minute.

## Editing

Content lives in `index.html`, section by section, with `<!-- EDIT: ... -->`
comments explaining what each one wants.

Anything still to be written is wrapped in `class="todo"`, which renders with a
striped highlight so unfinished copy is obvious on the page. Replace the text
and delete the `todo` class as you go; once nothing carries it, delete the
`.todo` rule from `style.css`.

To add another job, degree, or article, copy an existing `.entry` block. To add
a project or focus area, copy a `.card`.

## Theming

Every color, font, and width is a custom property in the `:root` block at the
top of `assets/css/style.css`. Dark mode is a second block of the same
properties under `prefers-color-scheme: dark` — change a color in both places
and the whole page follows.

## Profile photo

`assets/img/profile.svg` is a placeholder. Drop a square image in as
`assets/img/profile.jpg` (600×600 or larger) and point the `hero__portrait`
`src` at it.

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Still to add

- `assets/img/profile.jpg` — a real photo (also what the social preview points at)
- `assets/curtis-darst-cv.pdf` — the CV the header chip links to, or delete that chip
