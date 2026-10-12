# rayhan.dev — Personal Portfolio

Portfolio for Md. Mohayminul Islam Rayhan, built with Next.js (App Router), JavaScript, Tailwind CSS v4, and lucide-react.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Customize

| What | Where |
| --- | --- |
| Email, GitHub, LinkedIn, résumé, "Currently Building" | `src/data/site.js` |
| Projects (links, tech, screenshots) | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Journey timeline | `src/data/journey.js` |
| "What I can build" cards | `src/data/services.js` |
| Colors, fonts, animations | `src/app/globals.css` |

- **Résumé:** add `public/resume.pdf`, then set `resumeUrl: '/resume.pdf'` in `site.js`.
- **Project screenshots:** add images to `public/images/projects/` and set `image: '/images/projects/fitlog.png'` on a project. Without one, a CSS mock preview is shown.
- **Repository links:** set `repoUrl` on a project; `null` shows "Source coming soon".

The contact form opens the visitor's email app (mailto) with the message pre-filled — no backend is required.
