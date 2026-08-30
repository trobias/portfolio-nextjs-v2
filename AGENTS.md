<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project policy

## Sources of truth

- Start with `SPEC.md`; it is the canonical current-state handoff, acceptance contract and boundary map.
- Read `PRODUCT.md` before changing product claims or audience strategy.
- Read `DESIGN.md` before changing layout, palette, typography, components or motion.
- Read `PROJECTS.md` before adding a demo, repository, screenshot or private project claim.
- Read `VERIFICATION.md` before changing quality-gate status or public-link evidence.
- Keep `NEXT_STEPS.md` current when a blocker is resolved or a new publishing requirement appears.
- Use `tasks/plan.md` for sequencing and `tasks/todo.md` for the executable backlog. Do not restart completed baseline work.

## Architecture

- Next.js App Router, React, TypeScript and CSS live in `app/`, `components/` and `lib/`.
- Project content and the three archive groups are centralized in `lib/projects.ts`; every project must keep a stable slug, route, specific `category` and top-level `group`.
- Historical evidence lives under `public/proyectos/`; new verified demo captures live under `public/project-covers/`.
- The legacy root `index.html` and `styles.css` are preserved until the user explicitly approves archiving or deletion.

## Repository and hosting

- This codebase belongs to `https://github.com/trobias/portfolio-nextjs-v2` and deploys as the separate Vercel project `portfolio-nextjs-v2`.
- The production alias is `https://tarnowski-portafolio.vercel.app`; keep metadata, sitemap and robots aligned with it unless a custom domain is explicitly approved.
- The legacy `trobias/PORTFOLIO` project remains separate and is published at `https://antiguoportafoliotarnowski.vercel.app`.
- Never push this Next.js code to the legacy `trobias/PORTFOLIO` repository.

## Design and motion

- Use only the orange signal accent defined in `DESIGN.md`; do not add a second brand color or gradient text.
- Preserve the editorial, asymmetric, sharp-cornered composition. Pills are for primary actions, not generic containers.
- Keep one continuous marquee maximum. Motion must use shared easing, transform/opacity or bounded clipping, and respect `prefers-reduced-motion`.
- Reuse `components/animated-pill-link.tsx` for primary pill links; its bottom-in/top-out fill sweep is part of the signature interaction and must retain keyboard and reduced-motion behavior.
- Keep `/proyectos` grouped into the three documented archive chapters and preserve its compact 4/2/1 responsive grid unless the information architecture changes in `SPEC.md` and `DESIGN.md` first.
- Content must remain visible if animation JavaScript fails. Gate hover motion behind `(hover: hover) and (pointer: fine)`.
- All interactive targets need keyboard focus and at least 44px of usable touch area.

## Project privacy

- Never publish Dokploy administration URLs, IPs, credentials, environment values, client data or repository URLs that are not public.
- A demo link requires a verified no-login public route. A GitHub link requires a public repository with an unambiguous project match.
- Use the editorial placeholder for private cases; never fabricate a screenshot, metric or technical claim.

## Quality commands

- `npm run typecheck`
- `npm run build`
- `npm run lint`
- Known gate: `npm run lint` currently exits with code 2 because the bundled `typescript-eslint` does not support the pinned TypeScript 7.0.2; do not change versions or claim the gate passes without approval and a successful rerun.
- After UI changes, test 390px, 768px and 1440px, keyboard focus, reduced motion and browser console output.

## Change discipline

- Use pinned dependency versions and ask before installing or changing them.
- Do not deploy, push, delete legacy material or expose a private system without explicit authorization.
- The user has granted standing authorization for this repository to commit each verified functional change separately, write commit messages in Spanish and push it to `main`; do not batch unrelated work into one commit.
- Keep `AGENTS.md` and `CLAUDE.md` aligned; `CLAUDE.md` imports this file.

## New-agent handoff

1. Read `SPEC.md`, then `PRODUCT.md`, `DESIGN.md`, `PROJECTS.md`, `VERIFICATION.md` and `NEXT_STEPS.md` in that order.
2. Inspect `tasks/todo.md` and choose the first unblocked task; preserve all checked baseline work.
3. Revalidate only the links or claims touched by the selected task. Evidence is time-sensitive.
4. Update the spec or source document before implementing a durable scope or architecture change.
5. End every task by synchronizing affected docs and recording actual verification, including blocked gates.
