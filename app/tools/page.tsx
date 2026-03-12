"use client";

import { navItems, tools } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import FooterDetailed from "@/components/FooterDetailed";
import PageTransition from "@/components/ui/PageTransition";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { HiOutlineCog } from "react-icons/hi";

const tagColors: Record<string, string> = {
  External:  "text-[#00d4ff] border-[rgba(0,212,255,0.25)]  bg-[rgba(0,212,255,0.06)]",
  Docs:      "text-[#7b8fff] border-[rgba(123,143,255,0.25)] bg-[rgba(123,143,255,0.06)]",
  DeFi:      "text-[#00ffcc] border-[rgba(0,255,204,0.25)]  bg-[rgba(0,255,204,0.06)]",
  Status:    "text-yellow-400 border-yellow-800              bg-[rgba(250,204,21,0.06)]",
  Community: "text-pink-400  border-pink-900                 bg-[rgba(244,114,182,0.06)]",
};

const ToolsPage = () => {
  return (
    <main className="relative bg-black-100 flex flex-col min-h-screen mx-auto sm:px-10 px-5 overflow-x-hidden">
      {/* Grid neon background */}
      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 pointer-events-none" />
      <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl w-full mx-auto flex-1 relative z-10">
        <FloatingNav navItems={navItems} />

        <PageTransition>
          <div className="pt-60 pb-24 px-4 sm:px-6 lg:px-8" id="tools">

            {/* Header */}
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest uppercase text-[#00d4ff] mb-4">
                External Links
              </p>
              <TextGenerateEffect
                words="Tools & Resources"
                className="text-4xl sm:text-5xl font-extrabold mb-5"
              />
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                Quick access to explorer, monitoring dashboards, documentation, and community resources.
              </p>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.available ? tool.link : undefined}
                  target={tool.available ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group bg-[#0b0e1a] border border-[#1e2240] rounded-2xl p-6 flex items-start gap-5 transition-all duration-300 ${
                    tool.available
                      ? "hover:border-purple-700/50 hover:shadow-[0_0_20px_3px_rgba(115,0,255,0.3)] hover:-translate-y-0.5 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#131627] border border-[#1e2240] flex items-center justify-center p-2 group-hover:border-purple-700/40 transition-all duration-300">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h2 className="text-white font-bold text-lg">{tool.name}</h2>
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border rounded ${tagColors[tool.tag] ?? "text-gray-400 border-gray-700 bg-white/5"}`}>
                        {tool.tag}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{tool.description}</p>
                    {tool.available && (
                      <span className="text-sm font-semibold text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                        Visit ↗
                      </span>
                    )}
                  </div>
                </a>
              ))}
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

export default ToolsPage;