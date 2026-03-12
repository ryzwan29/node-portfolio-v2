# Ryddd — Validator Portfolio

Personal portfolio website for a blockchain validator operator. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Pages

- **Home** — Overview, bento grid, stats, and approach phases
- **Network** — Live validator table with mainnet, testnet, and archive filter
- **Project** — DeFi apps, infrastructure tools, and explorer projects
- **Tools** — External services: explorer, monitoring, docs, restake, alerts

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — Page transitions & animations
- [Three.js](https://threejs.org/) — 3D globe on home page
- [Sentry](https://sentry.io/) — Error monitoring

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```

## Managing Networks

All network data lives in `data/index.ts`. Split into three arrays:

```ts
// Tambah mainnet baru → mainnetNetworks
// Tambah testnet baru → testnetNetworks
// Network selesai    → archiveNetworks
```

Stats di halaman Network & Footer otomatis ngitung dari panjang array — tidak perlu update manual.

## Managing Projects

Projects juga di `data/index.ts` dalam array `projects`. Kategori yang tersedia:

| Category | Color |
|---|---|
| `defi` | Emerald |
| `developer-tool` | Cyan |
| `security` | Red |
| `infrastructure` | Indigo |
| `explorer` | Yellow |

## Project Structure

```
app/
  home/         → Home page
  network/      → Validator network table
  project/      → Projects & tools page
  tools/        → External tools/links page
components/
  ui/           → Reusable UI components
data/
  index.ts      → All site data (networks, projects, tools, etc.)
public/         → Static assets & network icons
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` branch to trigger auto-deploy.