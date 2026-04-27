import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://rydone.xyz"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RydOne | Ryddd29 — Blockchain Node Validator",
    template: "%s | RydOne",
  },
  description:
    "RydOne (Ryddd29) is an independent blockchain node validator dedicated to securing decentralized networks. Running validators across multiple chains — cosmos, EVM, and more.",
  keywords: [
    "RydOne",
    "Ryddd29",
    "Ryddd",
    "blockchain validator",
    "node validator",
    "crypto node",
    "independent validator",
    "blockchain node",
    "decentralized network",
    "cosmos validator",
    "EVM validator",
    "staking",
    "node operator",
  ],
  authors: [{ name: "RydOne", url: siteUrl }],
  creator: "RydOne",
  publisher: "RydOne",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "RydOne — Blockchain Node Validator",
    title: "RydOne | Ryddd29 — Blockchain Node Validator",
    description:
      "RydOne (Ryddd29) — independent blockchain node validator. Securing decentralized networks through reliable, high-uptime node operations.",
    images: [
      {
        url: "/ryddd-logo.png",
        width: 512,
        height: 512,
        alt: "RydOne Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "RydOne | Ryddd29 — Blockchain Node Validator",
    description:
      "Independent blockchain node validator. Securing decentralized networks through reliable node operations.",
    images: ["/ryddd-logo.png"],
    creator: "@Ryddd29", // Ganti kalau handle Twitter lo beda
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ryddd-logo.png" sizes="any" />
        {/* Structured Data (JSON-LD) untuk Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "RydOne",
              alternateName: ["Ryddd29", "Ryddd"],
              url: siteUrl,
              jobTitle: "Blockchain Node Validator",
              description:
                "Independent blockchain node validator securing decentralized networks.",
              sameAs: [
                "https://twitter.com/Ryddd29", // Ganti kalau beda
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
