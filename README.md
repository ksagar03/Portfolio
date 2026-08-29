# Sagar K — Developer Portfolio

Personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion — showcasing experience, skills, and projects, with a downloadable resume and dark/light mode support.

🔗 **Live site:** https://portfolio-three-beryl-95.vercel.app

## Tech stack

- **Framework:** [Next.js 13](https://nextjs.org/) (Pages Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Material UI Icons](https://mui.com/material-ui/material-icons/)
- **Language:** JavaScript (React 18)

## Features

- **Home** — animated intro, short bio, résumé download, and a "Hire Me" mailto link
- **About** — detailed bio, an orbiting skills diagram, a scroll-animated experience timeline, and education history
- **Projects** — featured project cards (with live demo, GitHub, and Android build links where applicable) plus smaller project cards
- **Dark / light mode** — toggle in the nav bar, persisted and synced with system preference on first load
- **Responsive** — mobile-first layout with a hamburger nav on smaller screens

## Updating content

All personal content — bio text, skills, work experience, education, and project details — lives in one file:

```
src/data/profile.js
```

Edit that file to update your info; every page and component reads from it, so **you never need to touch component code just to change text**. See the comment at the top of the file for details (e.g. how bold text works in the bio fields).

The only things that stay outside that file are:
- **Images** — Next.js requires static `import` statements for image optimization, so project screenshots and profile photos are imported directly in `src/pages/projects.js`, `src/pages/index.js`, and `src/pages/about.js`. `profile.js` refers to them by an `imgKey` string that maps to the imported image.
- **Your résumé PDF** — replace `public/SagarKrishna-resume.pdf` with a new file of the same name; the Download CV button on the Home page picks it up automatically.

## Project structure

```
src/
├── components/       # Reusable UI: NavBar, Footer, Skills, Experience, Education, etc.
├── data/
│   └── profile.js    # Single source of truth for all portfolio content
├── pages/            # Route files (Home, About, Projects) + Next.js _app/_document
└── styles/           # Global CSS + Tailwind config

public/
├── images/           # Profile photos and project screenshots
├── SVGs/             # Icon assets
└── SagarKrishna-resume.pdf
```

## Getting started

Requires [Node.js](https://nodejs.org/) (LTS) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Run the production build locally
npm run lint    # Lint the codebase
```

## Deployment

The site is set up to deploy on [Vercel](https://vercel.com/) with zero configuration — push to your connected branch and it builds automatically. Any other Next.js-compatible host (Netlify, Render, etc.) works too.
