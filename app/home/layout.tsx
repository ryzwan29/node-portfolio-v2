import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "RydOne is an independent blockchain node validator (also known as Ryddd29). Committed to network security, decentralization, and reliable uptime across multiple chains.",
  openGraph: {
    title: "RydOne | Blockchain Node Validator",
    description: "Independent blockchain validator securing decentralized networks. Known as RydOne or Ryddd29.",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
