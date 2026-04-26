import { MetadataRoute } from "next";

const siteUrl = "https://ryddd.xyz"; // 🔁 Ganti dengan domain lo

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
