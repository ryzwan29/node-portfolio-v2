import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Blockchain infrastructure projects and tools built by RydOne (Ryddd29).",
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
