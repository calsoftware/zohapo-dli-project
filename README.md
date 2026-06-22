# Zohapo — DLI Assignment Microsite

An AI-powered employability readiness platform concept, presented as a premium single-page
product microsite that also satisfies the Digital Learning Institute assignment structure
(Why / Who / What / How of Learning, Assessment, and the What If Checklist).

Built with React + Vite + Tailwind CSS + Framer Motion + lucide-react. No backend — all
dashboards, AI coach conversations and tutor analytics are static, representative mock-ups.

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server prints a local URL such as `http://localhost:5173/` — the app is configured
with `base: "/"` because it is deployed to the **root** of a subdomain, not a sub-path.

## Building for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to dliproject.drolajide.uk (subdomain)

This site is built to be served from the **root** of a subdomain. That requires two things on
the hosting side that only you can do (I don't have access to your hosting account/DNS):

**Step 1 — Create the subdomain (in cPanel or your host's control panel)**
1. Go to *Domains → Subdomains* (or *Domains* in newer cPanel versions).
2. Create `dliproject` as the subdomain of `drolajide.uk`.
3. When asked for a document root, point it at a **dedicated** folder — e.g.
   `public_html/dliproject` (cPanel usually suggests this automatically). Do not reuse a folder
   that's also the document root of another site.
4. Wait for DNS to propagate (usually minutes, occasionally longer) — this is what fixes the
   `DNS_PROBE_FINISHED_NXDOMAIN` error you saw.

**Step 2 — Upload the build**
1. Run `npm run build` (already done — see `dist/`).
2. Upload the *contents* of `dist/` (not the `dist` folder itself) into the document root you
   set in Step 1 (e.g. `public_html/dliproject`), via FTP/SFTP or the cPanel File Manager.
3. Confirm `index.html` and the `assets/` folder sit directly inside that document root.
4. Visit `https://dliproject.drolajide.uk/`.

If you'd prefer the path-based URL instead (`https://drolajide.uk/dliproject/`, no subdomain
needed), change `base: "/"` back to `base: "/dliproject/"` in `vite.config.js`, rebuild, and
upload into `public_html/dliproject` under the main domain instead.

No environment variables, database or server-side process is required; this is a fully static
build.

## Project structure

```
/src
  main.jsx, App.jsx, index.css      Entry point, page composition, global styles
  /data/content.js                  All copy, statistics, personas, modules, competitors,
                                     references — edit here to update site content
  /hooks/useActiveSection.js        Scroll-spy hook for the sticky nav
  /components
    Header, Hero, ProjectOverview
    ResearchSection, EvidenceSection
    WhySection, PersonasSection, WhatSection, HowSection
    AssessmentSection, ImpactSection (Tutor Intelligence + Product Mockups + Competitors)
    ImplementationSection, FinalSection, Footer, BackToTop
    /ui  Card, StatCard, Accordion, Tabs, ProgressRing, Badge, SectionHeading, iconMap
```

## Content sourcing and assumptions

- All statistics in the Evidence of Need section come only from the three supplied source
  documents (Executive Summary; Short Justification Paragraph; Why/Who/What/How of Learning).
  No figures were invented.
- The Competitor section uses the ten products actually analysed in the Executive Summary
  (LearnKey, Getmee, CareerVillage COACH, Bodyswaps, StandOut, InterviewsBy.AI, Pathful, Access
  Careers Centre, SkillLab) rather than products named in the build brief but absent from the
  source material.
- No logos, photos or licensed illustrations were available, so persona avatars use
  initials-in-colour rather than stock imagery, and the product mock-ups are built from styled
  HTML/CSS/SVG rather than image assets.

## DLI requirements checklist

| Requirement | Where it lives |
|---|---|
| Why of Learning (context, drivers, gap, outcomes) | `#why` |
| Who of Learning (6 personas incl. career returner & trades) | `#who` |
| What of Learning (8-module content map) | `#what` |
| How of Learning (flipped classroom, modalities, formats, Core & Spoke) | `#how` |
| Assessment strategy mapped to outcomes | `#assessment` |
| Research and needs analysis | `#research` |
| Evidence of need (cited statistics) | `#research` → Evidence of Need |
| Tutor analytics / impact | `#impact` |
| Competitor positioning | `#impact` → Where Zohapo Stands Out |
| Implementation & What If Checklist (budget, timeline, team, tech, risks) | `#implementation` |
