# Gitman Antique Watches & Rarities

![Antique watches and watchmaker tools](assets/social-share.png)

A static website for Howard Gitman's antique watch and horological-rarities business. The site presents services for buying, selling, repairing, and appraising antique watches, clocks, movements, tools, enamels, and music boxes.

## Live site

[dgitman.github.io/gitman-antique-codex-site](https://dgitman.github.io/gitman-antique-codex-site/)

## Local preview

No installation or build step is required. From the repository directory, run:

```sh
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Project structure

```text
.
├── README.md                          # Project documentation
├── index.html                         # Page entry point, SEO, analytics, and sharing metadata
├── assets/
│   ├── index-C6C5fPwS.js             # Bundled site JavaScript
│   ├── index-3UuVP_0Q.css            # Bundled site styles
│   ├── antique-watch-still-life.png  # Main site imagery
│   ├── favicon.png                    # Browser icon
│   ├── apple-touch-icon.png           # iOS home-screen icon
│   └── social-share.png               # 1200x630 Open Graph and X sharing image
└── .github/workflows/deploy-pages.yml # GitHub Pages deployment
```

This repository contains the deployable static site only, so there is no `package.json` or dependency installation step.

## Deployment

GitHub Actions publishes the site to GitHub Pages after every push to `main`. The workflow copies `index.html` and `assets/` into the Pages artifact and deploys it automatically.

The deployment can also be started manually from **Actions → Deploy website to GitHub Pages → Run workflow**.

## Analytics and sharing

- Google Analytics measurement ID: `G-J6LRDMYRNL`
- Open Graph and X card metadata: `index.html`
- Social preview image: `assets/social-share.png`
- Browser and Apple icons: `assets/favicon.png` and `assets/apple-touch-icon.png`

If the public domain changes, update the canonical URL and the absolute `og:url`, `og:image`, and `twitter:image` URLs in `index.html`.
