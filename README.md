# Jingxi Chen — personal research site

Source for [codingrex.github.io](https://codingrex.github.io/). The visual style is adapted from
[Botao He's homepage](https://github.com/Bottle101/bottle101.github.io).

GitHub Pages builds the site with Jekyll. Most updates only touch data files:

- `_config.yml` contains the name, header lines, tagline, optional job note, bio, and contact links.
- `_data/publications.yml` lists the selected publications, newest first.
- `_data/authors.yml` maps author ids to names and websites. The entry with `is_me: true` is shown in bold.
- `_data/experiences.yml` lists the experience timeline. Use `kind: work` for the left side and `kind: education` for the right side. An optional `highlight` adds an emphasized line.
- `_data/honors.yml` lists fellowships, awards, and service.

Thumbnails and preview videos are stored in `images/`. If a publication's `image_mouseover` is an `.mp4`, the video autoplays and `image` is its poster.

`index.html` is the page template and `css/style.css` holds the styles. `js/script.js` docks the navbar at the top while you scroll and sizes each publication figure to the height of its text.

To preview locally:

```sh
bundle exec jekyll serve
```
