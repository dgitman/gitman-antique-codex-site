# Gitman Antique Watches & Rarities

A responsive website for Howard Gitman’s antique watch and horological rarities business, built from the original printed advertisement.

## Local development

```bash
npm install
npm run dev
```

The production build is generated in `dist/client`:

```bash
npm run build
```

## Publish with GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The included `Deploy website to GitHub Pages` workflow will build and publish the site after each push to `main`.

The site uses relative asset paths, so it works from either a user/organization Pages domain or a repository subpath.
