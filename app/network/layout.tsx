import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network — Active Validator Nodes",
  description:
    "RydOne (Ryddd29) active blockchain validator nodes. View mainnet, testnet, and archive networks where RydOne runs validators.",
  keywords: [
    "RydOne validator",
    "Ryddd29 validator",
    "blockchain node list",
    "mainnet validator",
    "testnet node",
    "cosmos validator",
    "Etherium validator",
    "Solana validator",
    "SUI validator",
  ],
  openGraph: {
    title: "RydOne | Active Validator Nodes",
    description: "Live validator nodes operated by RydOne (Ryddd29) across multiple blockchain networks.",
  },
};

export default function NetworkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
