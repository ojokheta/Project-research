# Project RESET

Awareness site for Project RESET, a student-led movement at the University of Ibadan for substance-misuse prevention, early support, and recovery-friendly communities.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Apple Human Interface principles: clarity, deference, depth, large type, springy press states

## Deployment

Deployed on Vercel. The framework preset and build command are pinned in
`vercel.json` (`nextjs` / `next build`) so the leftover Vite entry files from the
earlier version of this site can't make Vercel build the wrong thing.
