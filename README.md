# Jaya Simha — Cybersecurity / SOC Analyst Portfolio

A premium, cinematic portfolio built with Next.js (App Router), TypeScript and Tailwind CSS — structured for a one-click deploy on [Vercel](https://vercel.com).

## Structure

```
app/                 Routes, layout, global styles
components/          One component per section (Hero, Skills, SOC, Projects, ...)
data/site.ts         ALL editable content: skills, projects, experience, certs, repos, contact
lib/hooks.ts         Shared interaction hooks (reveal-on-scroll, tilt, magnetic buttons, etc.)
lib/recruiter-context.tsx   Recruiter Mode state, shared across the page
public/images/       Replace profile.png, about.jpg, and project/cert images here
public/resume.pdf    Replace with your real resume
```

## Editing content

Everything text-based — skills, proficiency levels, project case studies, experience, certifications, GitHub fallback repos, and contact links — lives in **`data/site.ts`**. You should not need to touch component code to update content.

To go live with real GitHub activity, set `githubHandle` in `data/site.ts` to your GitHub username — the GitHub section fetches `https://api.github.com/users/<handle>/repos` at runtime and falls back to the placeholder repos in `fallbackRepos` if the request fails.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts (link or create a project, accept the detected Next.js framework preset). Run `vercel --prod` to promote to production.

**Option B — Git + Vercel dashboard (recommended)**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every push to your main branch redeploys automatically; every PR gets a preview URL.

No environment variables are required for the default setup (the GitHub section calls the public, unauthenticated GitHub REST API).

## Before you launch

- [ ] Replace `public/images/profile.png` with a real photo (transparent PNG cutout recommended for the hero glass panel)
- [ ] Replace `public/resume.pdf`
- [ ] Update `profile` (email, LinkedIn, GitHub handle, location) in `data/site.ts`
- [ ] Review all "demo data" labels in the SOC Command Center — keep them if you want to preserve the simulation framing; do not replace with unverified real metrics
- [ ] Update `metadataBase` URL in `app/layout.tsx` to your real domain
- [ ] Add a real `public/sitemap.xml` and `public/robots.txt` once the domain is final (Vercel/Next can also generate these via `app/sitemap.ts` and `app/robots.ts` if you prefer)

## Notes on interactive features

- **⌘K / Ctrl+K** — command palette, jumps to any section or triggers actions
- **SOC Command Center** — click any alert to see a simulated triage flow; all metrics are explicitly labeled as demo data, per the brief
- **Ask Jaya AI** — a small rule-based assistant (`components/AIAssistant.tsx`) that only answers from `data/site.ts`; it does not call an external LLM API, so it can never invent experience
- **Security Terminal** — type "terminal" anywhere on the page, or run it from the command palette
- **Recruiter Mode** — hides the more experimental sections (SOC Lab, AI architecture diagram, GitHub feed) for a fast, scannable recruiter pass
