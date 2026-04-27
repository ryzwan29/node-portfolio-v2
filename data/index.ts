// ─────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────
export const navItems = [
  { name: "Home",    link: "/home"    },
  { name: "Project", link: "/project" },
  { name: "Network", link: "/network" },
  { name: "Tools",   link: "/tools"   },
  { name: "Product", link: "/product" },
];

// ─────────────────────────────────────────────
//  HOME PAGE — Bento Grid
// ─────────────────────────────────────────────
export const gridItems = [
  {
    id: 1,
    title: "Committed to Network Security & Decentralization",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Securing Decentralized Networks with Trusted Validation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My services",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building trust in decentralized networks.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Optimizing blockchain consensus and security.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Looking to collaborate on blockchain validation and infrastructure?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// ─────────────────────────────────────────────
//  HOME PAGE — Work/Service Cards
// ─────────────────────────────────────────────
export const workExperience = [
  {
    id: 1,
    title: "Highly Secured",
    desc: "RydOne is highly secured with 24/7 monitoring, ensuring the integrity and safety of transactions and stakeholder assets.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Reliable Node Operations",
    desc: "Ensuring 99% uptime and efficient node operations for seamless blockchain participation.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Service Guide",
    desc: "We provide comprehensive setup documents and guides for our community, empowering users to navigate and utilize our platform effectively.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Fully Comply",
    desc: "We fully comply with blockchain governance protocols, actively participating in chain governance, updates, and upgrades to ensure network stability and innovation.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// ─────────────────────────────────────────────
//  HOME PAGE — Approach / Deployment Process
// ─────────────────────────────────────────────
export const approachPhases = [
  {
    id: 1,
    order: "Phase 1",
    title: "Planning & Strategy",
    description:
      "We develop a comprehensive strategy for deploying and maintaining a highly efficient validator node. This includes infrastructure planning, security hardening, network optimization, and compliance with protocol requirements. Our approach ensures maximum uptime, performance, and long-term sustainability within the blockchain ecosystem.",
    canvasColor: "bg-emerald-900",
    animationSpeed: 5.1,
    colors: undefined as number[][] | undefined,
    dotSize: undefined as number | undefined,
  },
  {
    id: 2,
    order: "Phase 2",
    title: "Development & Implementation",
    description:
      "After finalizing the strategy, I focus on setting up and configuring the validator node. This includes deploying the necessary infrastructure, optimizing system performance, and implementing security measures to ensure network integrity. I follow best practices for node synchronization, data consistency, and fault tolerance to maintain a reliable and efficient operation within the blockchain ecosystem.",
    canvasColor: "bg-pink-900",
    animationSpeed: 3,
    colors: [[255, 166, 158], [221, 255, 247]] as number[][],
    dotSize: 2,
  },
  {
    id: 3,
    order: "Phase 3",
    title: "Deployment & Monitoring",
    description:
      "The validator node is set up and deployed with a focus on security, efficiency, and network compliance. Once operational, continuous monitoring ensures optimal performance, uptime, and responsiveness to network changes. Automated alerts and real-time analytics help detect and resolve potential issues, maintaining the integrity and reliability of the node within the blockchain ecosystem.",
    canvasColor: "bg-sky-600",
    animationSpeed: 3,
    colors: [[125, 211, 252]] as number[][],
    dotSize: undefined as number | undefined,
  },
];

// ─────────────────────────────────────────────
//  HOME PAGE — Footer Content
// ─────────────────────────────────────────────
export const footerContent = {
  heading: "Let's optimize your",
  headingHighlight: "Blockchain Network",
  subheading: "for maximum performance, security, and reliability.",
  body: "Reach out to me today and let's discuss how I can help you strengthen your network.",
  ctaLabel: "Contact Us",
  ctaEmail: "mailto:infra@rydone.xyz",
  copyright: "Copyright © 2026 RydOne. All rights reserved.",
};

// ─────────────────────────────────────────────
//  PRODUCT PAGE — Services / Products
// ─────────────────────────────────────────────
export const products = [
  {
    id: 1,
    name: "RPC Private",
    tag: "Infrastructure",
    description:
      "Dedicated private RPC endpoint with low-latency access, no rate limiting, and 99.9% uptime SLA. Ideal for dApps, bots, and high-frequency blockchain interactions.",
    features: ["No rate limit", "Low latency", "Custom chain support", "99.9% uptime SLA"],
    contactEmail: "mailto:infra@rydone.xyz?subject=Inquiry%3A%20RPC%20Private",
    icon: "/rpc.png",
    accent: "#00d4ff",
  },
  {
    id: 2,
    name: "Archive Node",
    tag: "Infrastructure",
    description:
      "Full historical archive node access for deep on-chain data queries. Perfect for indexers, analytics platforms, and researchers needing complete state history.",
    features: ["Full state history", "Fast query response", "REST & gRPC support", "Multiple networks"],
    contactEmail: "mailto:infra@rydone.xyz?subject=Inquiry%3A%20Archive%20Node",
    icon: "/archieve.png",
    accent: "#7b8fff",
  },
  {
    id: 3,
    name: "Dedicated Server",
    tag: "Hosting",
    description:
      "High-performance bare-metal dedicated servers for running validator nodes, indexers, or any compute-intensive blockchain workload. Full root access, your config.",
    features: ["Bare-metal performance", "Full root access", "DDoS protection", "24/7 monitoring"],
    contactEmail: "mailto:infra@rydone.xyz?subject=Inquiry%3A%20Dedicated%20Server",
    icon: "/dedicated.png",
    accent: "#00ffcc",
  },
  {
    id: 4,
    name: "Virtual Private Server",
    tag: "Hosting",
    description:
      "Affordable virtual private servers optimized for blockchain nodes, testnets, and light validator setups. Scalable specs, SSD storage, and instant deployment.",
    features: ["SSD NVMe storage", "Scalable resources", "Instant deployment", "Linux ready"],
    contactEmail: "mailto:infra@rydone.xyz?subject=Inquiry%3A%20VPS",
    icon: "/vps.png",
    accent: "#f59e0b",
  },
];


export const socialMedia = [
  { id: 1, name: "GitHub",   img: "/git.svg",      link: "https://github.com/ryzwan29" },
  { id: 2, name: "Twitter",  img: "/twit.svg",     link: "https://x.com/Ryddd29"       },
  { id: 3, name: "Telegram", img: "/telegram.svg", link: "https://t.me/Ryddd29"        },
];

// ─────────────────────────────────────────────
//  PROJECT PAGE — Tools / Apps
// ─────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "DeFi Republic",
    description: "Testnet DeFi app on Republic AI. Swap, add/remove LP, stake validator, AI contract analyzer, and daily missions for points. Social login coming soon.",
    launchLink: "https://app-republic.rydone.xyz",
    launchAvailable: true,
    category: "defi",
  },
  {
    id: 2,
    title: "DeFi Pushchain",
    description: "Testnet DeFi app on Pushchain. Swap, add/remove LP, stake validator, AI contract analyzer, and daily missions for points. Social login coming soon.",
    launchLink: "#",
    launchAvailable: false,
    category: "defi",
  },
  {
    id: 3,
    title: "Contract Analyzer",
    description: "AI-powered smart contract security scanner. Detects reentrancy, overflow, access control, and logic vulnerabilities in Solidity and CosmWasm.",
    launchLink: "#",
    launchAvailable: false,
    category: "security",
  },
  {
    id: 4,
    title: "Multi-Chain Faucet",
    description: "Dispenses testnet tokens across 20+ networks. Rate-limited, captcha-protected, and Discord-integrated for seamless developer onboarding.",
    launchLink: "https://faucet.rydone.xyz",
    launchAvailable: true,
    category: "developer-tool",
  },
  {
    id: 5,
    title: "Chain Registry",
    description: "Unified JSON registry of RPC endpoints, peer nodes, genesis files, and snapshots maintained for every supported network.",
    launchLink: "#",
    launchAvailable: false,
    category: "infrastructure",
  },
  {
    id: 6,
    title: "Snapshot Service",
    description: "Daily pruned and archive snapshots for fast node sync. Available for all supported Cosmos SDK chains via direct download or torrent.",
    launchLink: "#",
    launchAvailable: false,
    category: "infrastructure",
  },
  {
    id: 7,
    title: "State Sync",
    description: "High-speed state-sync RPC service with <30s sync time. Maintained across all mainnet and testnet environments.",
    launchLink: "https://docs.rydone.xyz",
    launchAvailable: true,
    category: "infrastructure",
  },
  {
    id: 8,
    title: "Public Endpoints",
    description: "Load-balanced, rate-limited public RPC and gRPC endpoints for developers. Supports REST, WebSocket, and gRPC-web protocols.",
    launchLink: "https://endpoint.rydone.xyz",
    launchAvailable: true,
    category: "infrastructure",
  },
  {
    id: 9,
    title: "RepublicAI Explorer",
    description: "Custom block explorer for the RepublicAI network. Browse transactions, blocks, validators, and on-chain governance",
    launchLink: "https://republicscan.rydone.xyz",
    launchAvailable: true,
    category: "explorer",
  },
];

// ─────────────────────────────────────────────
//  NETWORK PAGE — Supported Blockchain Networks
//
//  ✅ Cara nambah network baru:
//     - Mainnet aktif  → tambah ke mainnetNetworks
//     - Testnet aktif  → tambah ke testnetNetworks
//     - Sudah selesai  → pindah ke archiveNetworks
//
//  📌 ID dimulai dari 1 per kategori (bebas duplikat antar kategori)
//  📌 Title bebas, ga harus ada kata "mainnet" / "testnet"
//  📌 stake / docs: isi URL atau "#" untuk disable tombol
//
//  ⚡ Stats di page.tsx otomatis ngitung dari panjang array ini
// ─────────────────────────────────────────────

export const mainnetNetworks = [
  {
    id: 1,
    title: "Axone",
    chainId: "axone-1",
    iconLists: ["/axone-icon.png"],
    commission: "5%",
    votingPower: "0.82%",
    tvl: "$2.1K",
    stake: "https://explorer.rydone.xyz/axone-mainnet/staking/axonevaloper1ytru6auvhmp0ygyeka6mkjzl80zf99uw3w8gcw",
    docs: "https://docs.rydone.xyz/mainnet/axone"
  },
  {
    id: 2,
    title: "Dungeon Chain",
    chainId: "dungeon-1",
    iconLists: ["/dungeon.png"],
    commission: "5%",
    votingPower: "1.02%",
    tvl: "$5.8K",
    stake: "https://explorer.rydone.xyz/dungeon-mainnet/staking/dungeonvaloper108a82xy8ff9c6aw72rxs56yendq6spdvs88d8s",
    docs: "https://docs.rydone.xyz/mainnet/dungeon"
  },
  {
    id: 3,
    title: "Humanode",
    chainId: "—",
    iconLists: ["/humanode-icon.png"],
    commission: "5%",
    votingPower: "0.56%",
    tvl: "$3.2K",
    stake: "#",
    docs: "https://docs.rydone.xyz/mainnet/humanode"
  },
  {
    id: 4,
    title: "Lumen",
    chainId: "lumen",
    iconLists: ["/lumen.png"],
    commission: "5%",
    votingPower: "1.21%",
    tvl: "$8.3K",
    stake: "https://explorer.rydone.xyz/lumen-mainnet/staking/lmnvaloper1dj0s05mfxjqg36qwxapseqa0x2ta4tytplpqtf",
    docs: "https://docs.rydone.xyz/mainnet/lumen"
  },
  {
    id: 5,
    title: "Medas Digital",
    chainId: "medas-digital-2",
    iconLists: ["/medas-icon.png"],
    commission: "5%",
    votingPower: "0.43%",
    tvl: "$4.5K",
    stake: "https://explorer.rydone.xyz/medas-mainnet/staking/medasvaloper1npw0kkuh5gmw22nxpumax442fpxuz5uvu3atuq",
    docs: "https://docs.rydone.xyz/mainnet/medas-digital"
  },
  {
    id: 6,
    title: "Regen",
    chainId: "regen-1",
    iconLists: ["/regen.png"],
    commission: "5%",
    votingPower: "0.75%",
    tvl: "$6.1K",
    stake: "https://explorer.rydone.xyz/regen-mainnet/staking/regenvaloper1zcll4k60y9v6edkht0xadexl62kjew36ezy799",
    docs: "https://docs.rydone.xyz/mainnet/regen"
  },
  {
    id: 7,
    title: "Zigchain",
    chainId: "zigchain-1",
    iconLists: ["/zigchain-icon.jpg"],
    commission: "5%",
    votingPower: "0.95%",
    tvl: "$4.7K",
    stake: "https://explorer.rydone.xyz/zigchain-mainnet/staking/zigvaloper1pjrjnkyunr8e8jrkgrzg4m64wp5tqzyeuf75yj",
    docs: "https://docs.rydone.xyz/mainnet/zigchain"
  },
];

export const testnetNetworks = [
  {
    id: 1,
    title: "Coretensor",
    chainId: "—",
    iconLists: ["/coretensor-icon.png"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "https://stake.cortensor.network/",
    docs: "https://docs.rydone.xyz/testnet/active/coretensor"
  },
  {
    id: 2,
    title: "Empeiria",
    chainId: "empe-testnet-2",
    iconLists: ["/empeiria-icon.webp"],
    commission: "5%",
    votingPower: "1.14%",
    tvl: "$1.8K",
    stake: "https://explorer.rydone.xyz/empeiria-testnet/staking/empevaloper1llw20lql0cpdegy54j2dxqyd2ha5jeruhqgeln",
    docs: "https://docs.rydone.xyz/testnet/active/empeiria"
  },
  {
    id: 3,
    title: "Kiichain",
    chainId: "oro_1336-1",
    iconLists: ["/kiichain.png"],
    commission: "5%",
    votingPower: "0.38%",
    tvl: "$900",
    stake: "https://explorer.rydone.xyz/kiichain-testnet/staking/kiivaloper1mlqcj3eq4dgqe826pn0w35juzwgjrdd4nf6avs",
    docs: "https://docs.rydone.xyz/testnet/active/kiichain"
  },
  {
    id: 4,
    title: "Pushchain",
    chainId: "push_42101-1",
    iconLists: ["/pushchain.jpg"],
    commission: "5%",
    votingPower: "0.48%",
    tvl: "$1.5K",
    stake: "https://explorer.rydone.xyz/pushchain-testnet/staking/pushvaloper1ns0pn9z25cksgw55cl9rr72gqav74xpetudqpx",
    docs: "https://docs.rydone.xyz/testnet/active/pushchain"
  },
  {
    id: 5,
    title: "RepublicAI",
    chainId: "raitestnet_77701-1",
    iconLists: ["/republicai.jpg"],
    commission: "5%",
    votingPower: "0.62%",
    tvl: "$2.4K",
    stake: "https://explorer.rydone.xyz/republicai-testnet/staking/raivaloper1jnlw7aex7l7uwpjxx9e04yfj9ec0dt9utxzm6z",
    docs: "https://docs.rydone.xyz/testnet/active/republicai"
  },
  {
    id: 6,
    title: "Safrochain",
    chainId: "safro-testnet-1",
    iconLists: ["/safrochain-icon.jpg"],
    commission: "5%",
    votingPower: "0.91%",
    tvl: "$1.2K",
    stake: "https://explorer.rydone.xyz/safrochain-testnet/staking/addr_safrovaloper1s9wdq776nhk39fv2qjxywp0s4t667ez00c55r2",
    docs: "https://docs.rydone.xyz/testnet/active/safrochain"
  },
];

export const archiveNetworks = [
  {
    id: 1,
    title: "0G Labs",
    chainId: "16601",
    iconLists: ["/0g-icon.jpeg"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/airdrop-completed/0g-labs"
  },
  {
    id: 2,
    title: "Airchain",
    chainId: "varanasi-1",
    iconLists: ["/airchain.ico"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/testnet/offline/airchain"
  },
  {
    id: 3,
    title: "Cysic",
    chainId: "—",
    iconLists: ["/cysic-icon.png"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/airdrop-completed/cysic"
  },
  {
    id: 4,
    title: "Dill",
    chainId: "—",
    iconLists: ["/dill-icon.png"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve-end/dill"
  },
  {
    id: 5,
    title: "Farcaster",
    chainId: "—",
    iconLists: ["/farcaster-icon.png"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/testnet/offline/farcaster"
  },
  {
    id: 6,
    title: "Helios",
    chainId: "42000",
    iconLists: ["/helios.jpg"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/testnet/helios"
  },
  {
    id: 7,
    title: "Inichain",
    chainId: "—",
    iconLists: ["/inichain-icon.jpg"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/mainnet/initverse"
  },
  {
    id: 8,
    title: "Intento",
    chainId: "intento-testnet-1",
    iconLists: ["/intento-icon.jpg"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/validator-set-finalized/intento"
  },
  {
    id: 9,
    title: "Privasea",
    chainId: "—",
    iconLists: ["/privasea-icon.avif"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve-end/privasea"
  },
  {
    id: 10,
    title: "TacChain",
    chainId: "tacchain_2391-1",
    iconLists: ["/tacchain-icon.jpg"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/validator-set-finalized/tacchain"
  },
  {
    id: 11,
    title: "Warden",
    chainId: "buenavista-1",
    iconLists: ["/warden-icon.png"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/validator-set-finalized/warden"
  },
  {
    id: 12,
    title: "XOS",
    chainId: "xos_1267-1",
    iconLists: ["/xos-icon.webp"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/testnet/offline/xos"
  },
  {
    id: 13,
    title: "Zigchain",
    chainId: "zig-test-2",
    iconLists: ["/zigchain-icon.jpg"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/validator-set-finalized/zigchain"
  },
  {
    id: 14,
    title: "Aztec Labs",
    chainId: "—",
    iconLists: ["/aztec-icon.webp"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/airdrop-completed/aztec"
  },
  {
    id: 15,
    title: "Drosera",
    chainId: "—",
    iconLists: ["/drosera-icon.png"],
    commission: "5%",
    votingPower: "—",
    tvl: "—",
    stake: "#",
    docs: "https://docs.rydone.xyz/archieve/airdrop-completed/drosera"
  },
];

// ⚠️ Jangan diubah — ini yang dipakai di seluruh app
// Edit tiga array di atas untuk manage network
export const networks = [
  ...mainnetNetworks.map(n => ({ ...n, type: "mainnet" as const, status: "active"   as const })).sort((a, b) => a.title.localeCompare(b.title)),
  ...testnetNetworks.map(n => ({ ...n, type: "testnet" as const, status: "active"   as const })).sort((a, b) => a.title.localeCompare(b.title)),
  ...archiveNetworks.map(n => ({ ...n, type: "archive" as const, status: "archived" as const })).sort((a, b) => a.title.localeCompare(b.title)),
];

// ─────────────────────────────────────────────
//  TOOLS PAGE — External Service Links
// ─────────────────────────────────────────────
export const tools = [
  {
    id: 1,
    name: "Explorer",
    tag: "External",
    description: "Block explorer for all supported networks. Search transactions, blocks, and validators.",
    link: "https://explorer.rydone.xyz",
    icon: "/explorer.png",
    available: true,
  },
  {
    id: 2,
    name: "Monitoring",
    tag: "External",
    description: "Real-time Grafana dashboards for validator health, uptime, and performance metrics.",
    link: "https://monitoring.rydone.xyz",
    icon: "/monitoring.png",
    available: true,
  },
  {
    id: 3,
    name: "Documentation",
    tag: "Docs",
    description: "Comprehensive guides for node setup, staking, IBC relaying, and API usage.",
    link: "https://docs.rydone.xyz",
    icon: "/exp3.svg",
    available: true,
  },
  {
    id: 4,
    name: "Restake",
    tag: "DeFi",
    description: "Auto-compound staking rewards via REStake. Supports authz for all our validators.",
    link: "https://restake.rydone.xyz",
    icon: "/restake.png",
    available: true,
  },
  {
    id: 5,
    name: "RPC Status",
    tag: "Status",
    description: "Live status page for all public RPC, gRPC, and REST endpoints we operate.",
    link: "https://endpoint.rydone.xyz",
    icon: "/exp1.svg",
    available: true,
  },
  {
    id: 6,
    name: "Telegram Alerts",
    tag: "Community",
    description: "Subscribe to on-chain governance and validator health alerts via Telegram bot.",
    link: "https://t.me/Ryddd29",
    icon: "/telegram.svg",
    available: true,
  },
];

// ─────────────────────────────────────────────
//  COMPANIES (used in Clients / Infinite Cards)
// ─────────────────────────────────────────────
export const companies = [
  { id: 1, name: "Hetzner",   img: "/hetzner.png",       nameImg: "/hetznerName.png"   },
  { id: 2, name: "Farcaster", img: "/farcaster-icon.png", nameImg: "/farcasterName.png" },
  { id: 3, name: "Humanode",  img: "/humanode-icon.png",  nameImg: "/humanodeName.png"  },
  { id: 4, name: "Cysic.",    img: "/cysic-icon.png",     nameImg: "/cysicName.png"     },
  { id: 5, name: "Dill.",     img: "/dill-icon.png",      nameImg: "dillName.png"       },
  { id: 6, name: "Atlas.",    img: "/atlas-icon.png",     nameImg: "/atlasName.png"     },
  { id: 7, name: "0G Labs.",  img: "/0g-icon.jpeg",       nameImg: "/0gName.png"        },
  { id: 8, name: "Privasea.", img: "/privasea-icon.avif", nameImg: "/privaseaName.png"  },
];