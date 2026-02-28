# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Workflowy.ai executive AI training documentation site for PurposeMed, built with **Docusaurus 3.8.1**. Deployed to `https://docs.workflowy.ai` via GitHub Pages. Dark-mode only, docs-only mode (docs served at root `/`).

The content covers 10 AI training domains tailored for healthcare executives: prompting, context management, research, content creation, workflow automation, MCP connections, AI agents, governance/compliance (PIPEDA/PHIPA/HIPAA), ROI measurement, and change management.

## Commands

```bash
npm start          # Dev server at localhost:3000 with hot reload
npm run build      # Production build to build/
npm run serve      # Serve production build locally
npm run typecheck  # TypeScript type checking (tsc)
```

There are no tests, linting, or formatting commands configured.

## Architecture

- **docs/** - MDX/MD training content organized by curriculum section:
  - `prompting/` - AI prompting techniques (Claude & Gemini)
  - `context-and-memory/` - Projects, Gems, session continuity
  - `research-and-content/` - Research workflows, fact-checking, artifacts
  - `automation/` - Workflow automation, MCP, agents, building tools
  - `governance/` - PIPEDA/PHIPA/HIPAA compliance, data classification
  - `leadership/` - ROI, change management, executive role
- **src/theme/MDXComponents.tsx** - Custom MDX component registry. Exposes `Button`, `FAQStructuredData`, `ImageCard`, `ImageCardGrid`
- **src/components/** - Reusable React components (`Card/`, `Button/`)
- **src/css/custom.css** - Global styles, Infima variable overrides, sidebar heading styles
- **docusaurus.config.ts** - Main config: site metadata, plugins, theme, navbar, footer
- **sidebars.ts** - Sidebar structure with HTML category headings (`sidebar-category-heading` class)

### Key Configuration Decisions

- **Docs at root**: `routeBasePath: '/'` — no separate landing page
- **Dark mode forced**: `disableSwitch: true`, `respectPrefersColorScheme: false`
- **Breadcrumbs hidden**: `breadcrumbs: false`
- **Broken links throw**: `onBrokenLinks: 'throw'` — build fails on broken links
- **LLM plugin**: `docusaurus-plugin-llms` generates `llms.txt` and `llms-full.txt` at build time
- **Local search**: `@easyops-cn/docusaurus-search-local` (no Algolia)
- **Content max-width**: 800px via CSS `.main-wrapper main`
- **Blog disabled**: Training site only

## Content Guidelines

- **Prefer markdown over HTML** — use markdown headers, images, lists, emphasis, links, code blocks
- Use Docusaurus admonitions (:::note, :::tip, :::warning, :::danger, :::info)
- Kebab-case filenames
- Images go in `static/img/` with relative paths
- Internal links use relative paths
- Add `sidebar_position` in frontmatter to control ordering
- Training/curriculum tone, second-person voice addressing executives
- Healthcare examples throughout, grounded in PurposeMed context

## Deployment

Automated via `.github/workflows/deploy.yml`: push to `main` triggers build and deploy to GitHub Pages.
