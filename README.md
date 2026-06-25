# webcv

Personal CV site — [iimmags.github.io/webcv](https://iimmags.github.io/webcv/).

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **React Aria Components**, bundled by **Vite**.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/webcv/
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

One-time setup: in the repo → **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.

## Updating content

All CV content lives in [`src/data/cv.ts`](src/data/cv.ts) — edit that file to update summary, skills, experience, education, certifications, or contact links. To replace the downloadable PDF, drop a new file at [`public/cv.pdf`](public/cv.pdf).
