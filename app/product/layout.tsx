import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products and services offered by RydOne (Ryddd29), independent blockchain node validator.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
