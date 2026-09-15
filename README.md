# Jonathan Ventura — Portfolio

A static, one-page software engineering portfolio focused on clear project narratives, accessible presentation, and a small operational footprint.

Live site: https://jventuradev.github.io/

## Stack

- [Astro](https://astro.build/) with static output
- Strict TypeScript
- Plain CSS with design tokens and system light/dark themes
- `astro check`, `html-validate`, and a local link checker for release confidence

The rendered portfolio ships no application JavaScript. Astro components generate semantic HTML at build time.

## Development

Requirements: Node.js 24.8 or newer and npm 11 or newer.

```powershell
npm ci
npm run dev
```

The development server prints its local URL. Production output is generated in `dist/`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server. |
| `npm run typecheck` | Run Astro and TypeScript diagnostics. |
| `npm run build` | Build the static site. |
| `npm run validate:html` | Build, then validate generated HTML. |
| `npm run check:links` | Validate generated internal routes, anchors, styles, and assets without network requests. |
| `npm run check` | Run type checking, build, generated HTML validation, and internal link validation. |
| `npm run preview` | Preview the production build locally. |

## Structure

```text
src/
  components/  Page sections and reusable presentation components
  data/        Typed portfolio, profile, skills, and contact content
  layouts/     Shared document metadata and page shell
  pages/       Static routes
  styles/      Global styles and design tokens
  types/       Shared content types
  utils/       Base-path-safe URL helpers
scripts/       Repository validation utilities
public/        Approved local project media
```

## Deployment

The production build targets the GitHub user site at `https://jventuradev.github.io/` with a root base path. Pull requests and pushes to `main` run validation in GitHub Actions; pushes to `main` also deploy the generated `dist/` artifact through the official GitHub Pages workflow.

## Private project policy

Aiko is represented only through approved, high-level information and textual screenshot placeholders. This repository must not include its source code, repository URL, demo URL, credentials, private architecture details, or real screenshots until those materials are explicitly cleared for publication.

## Media strategy

Approved Calculator and SayUI screenshots live locally in `public/images/` with explicit dimensions and descriptive alternative text. They are never hotlinked from external services. polish-engine is represented with semantic HTML/CSS API and pipeline evidence instead of a fabricated product interface.

The public CV used by the portfolio is stored at `public/cv/Jonathan-Ventura-CV.pdf`.

Aiko intentionally retains textual screenshot placeholders. No Aiko image, favicon, or social preview asset is included until a real asset is explicitly approved. The layout supports optional favicon and social metadata without referencing files that do not exist.
