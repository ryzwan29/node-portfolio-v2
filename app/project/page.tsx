"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, projects, networks } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import FooterDetailed from "@/components/FooterDetailed";
import PageTransition from "@/components/ui/PageTransition";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineCog } from "react-icons/hi";

const FILTERS = ["all", "defi", "developer-tool", "security", "infrastructure", "explorer"] as const;
type Filter = (typeof FILTERS)[number];

const filterLabel: Record<Filter, string> = {
  "all":            "All",
  "defi":           "DeFi",
  "developer-tool": "Developer Tool",
  "security":       "Security",
  "infrastructure": "Infrastructure",
  "explorer":       "Explorer",
};

// Warna badge per kategori — beda-beda tapi tetap di palet biru/ungu
const categoryBadge: Record<string, string> = {
  "defi":           "border-emerald-400 text-emerald-400",
  "developer-tool": "border-cyan-400 text-cyan-400",
  "security":       "border-red-400 text-red-400",
  "infrastructure": "border-indigo-300 text-indigo-300",
  "explorer":       "border-yellow-400 text-yellow-400",
};

const ProjectPage = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  const totalChains = networks.length;

  return (
    <main className="relative bg-black-100 flex flex-col min-h-screen mx-auto sm:px-10 px-5 overflow-x-hidden">
      {/* Grid neon background — sama kayak halaman lain */}
      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 pointer-events-none" />
      <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl w-full mx-auto flex-1 relative z-10">
        <FloatingNav navItems={navItems} />

        <PageTransition>
          <div className="pt-60 pb-24 px-4 sm:px-6 lg:px-8" id="projects">

            {/* Header */}
            <div className="mb-10">
              <TextGenerateEffect
                words="Projects & Tools"
                className="text-4xl sm:text-5xl font-extrabold mb-4"
              />
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                Open-source infrastructure tools built for developers, validators, and the broader blockchain ecosystem.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  `${projects.length} Projects`,
                  "MIT License",
                  `${totalChains}+ Chains`,
                ].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs px-3 py-1 border border-white/10 rounded-full text-gray-400 tracking-widest uppercase bg-white/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {FILTERS.map((cat) => {
                const isActive = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                      isActive
                        ? "bg-white text-black border-white font-semibold"
                        : "text-gray-400 border-white/10 hover:border-purple-500/50 hover:text-gray-200 bg-transparent"
                    }`}
                  >
                    {filterLabel[cat]}
                  </button>
                );
              })}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filtered.map((item, i) => (
                  <div
                    key={`${filter}-${item.id}`}
                    className={`bg-[#0f111a] border border-[#1e2240] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      item.launchAvailable
                        ? "hover:shadow-[0_0_20px_3px_rgba(115,0,255,0.4)] hover:border-purple-700/50"
                        : "opacity-80"
                    }`}
                  >
                  {/* Top row: badge + gears */}
                  <div className="flex justify-between items-start mb-5">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 border rounded ${categoryBadge[item.category] ?? "border-gray-500 text-gray-400"}`}>
                      {filterLabel[item.category as Filter] ?? item.category}
                    </span>
                    <div className="flex gap-1.5 opacity-20">
                      <HiOutlineCog className="w-5 h-5 text-purple-300" />
                      <HiOutlineCog className="w-5 h-5 text-purple-300" />
                      <HiOutlineCog className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div className="mb-6">
                    <h2 className="text-white font-bold text-xl mb-3">{item.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Launch Button only */}
                  <a
                    href={item.launchAvailable ? item.launchLink : undefined}
                    target={item.launchAvailable ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      item.launchAvailable
                        ? "bg-[#a855f7] text-white hover:bg-[#9333ea] hover:shadow-[0_0_14px_2px_rgba(168,85,247,0.7)]"
                        : "bg-[#2a2d3c] text-gray-500 opacity-40 cursor-not-allowed"
                    }`}
                  >
                    {item.launchAvailable ? "Launch" : "Coming Soon"}
                    {item.launchAvailable && <FiArrowUpRight className="w-4 h-4" />}
                  </a>
                  </div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </PageTransition>
      </div>

      <div className="relative z-10">
        <FooterDetailed />
      </div>
    </main>
  );
};

export default ProjectPage;