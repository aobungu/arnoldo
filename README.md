# Personal website

A responsive React portfolio for work in healthcare AI, built with Vite.

Website: [https://aobungu.github.io/arnoldo/](https://aobungu.github.io/arnoldo/)

GitHub repository: [aobungu/arnoldo](https://github.com/aobungu/arnoldo)

## GitHub Pages deployment

The website is built from the `main` branch and deployed using `.github/workflows/deploy.yml`. Every push to `main` installs dependencies, builds the React app, and publishes `dist` to GitHub Pages. No separate deployment branch is needed.

In the repository's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. You can also deploy manually from **Actions → Deploy website to GitHub Pages → Run workflow**, selecting `main`. The website URL above becomes available after a successful deployment.

Vite's `base` is set to `/arnoldo/` so assets load correctly at the repository's GitHub Pages URL. If you rename the repository or add a custom domain, update `vite.config.js` accordingly.

## Run locally

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm`.

## Customize

Edit `src/profile.js` to set your name, biography, projects, email, LinkedIn, and GitHub. Contact links appear when populated. The scheduling illustration is decorative, not a screenshot of the linked app.

Styles live in `src/styles.css`. Update the page title and description in `index.html` when adding your name.

## Build

```sh
npm run build
npm run preview
```

The generated `dist` directory is published by the GitHub Pages workflow. Fonts use Google Fonts with local system fallbacks. No analytics or backend services are configured.
