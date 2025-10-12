# Saddle River Deli

Source code for Saddle River Deli's website. Pull Requests will generally not be accepted unless it's to fix bugs on the website. The currently deployed rendered HTML can be found in the [latest release](https://github.com/sellas369/saddle-river-deli/releases/latest).

## Building and running the project

- Node 24
- Corepack @ latest
- PNPM (installed from Corepack)

1. Install dependencies - `pnpm i`
2. Run dev server `pnpm dev`
3. Build site `pnpm build`

Site is built with Astro using Svelte components and Sass.

Admin page is powered by [Sveltia CMS](https://github.com/sveltia/sveltia-cms) using PAT (or local for development) authentication.
