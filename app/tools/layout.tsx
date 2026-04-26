import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Blockchain tools and utilities curated by RydOne (Ryddd29) — validator and node operator.",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
