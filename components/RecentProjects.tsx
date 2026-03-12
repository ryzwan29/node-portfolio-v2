"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { projects } from "@/data";

const RecentProjects = () => {
  const [filter, setFilter] = useState("all");

  // const filteredProjects = projects
  //   .filter((item) => {
  //     const title = item.title.toLowerCase();
  //     if (filter === "mainnet") return title.includes("mainnet");
  //     if (filter === "testnet") return title.includes("testnet");
  //     return true;
  //   })
  //   .sort((a, b) => {
  //     const isAActive = a.title.includes("🟢");
  //     const isBActive = b.title.includes("🟢");
  //     if (isAActive === isBActive) return 0;
  //     return isAActive ? -1 : 1; // Active duluan
  //   });

  const filteredProjects = projects
    .filter((item) => {
      const title = item.title.toLowerCase();
      if (filter === "mainnet") return title.includes("mainnet");
      if (filter === "testnet") return title.includes("testnet");
      return true;
    })
    .sort((a, b) => {
      const isAActive = a.title.includes("🟢");
      const isBActive = b.title.includes("🟢");
      if (isAActive === isBActive) {
        return a.title.localeCompare(b.title); // Sort abjad kalau status sama
      }
      return isAActive ? -1 : 1; // Aktif duluan
    });

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8" id="projects">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
          Supported<span className="text-purple"> Networks</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
          Explore our supported networks and discover how we contribute to decentralized blockchain projects.
        </p>
      </div>

      {/* Tombol Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-[#0b0f24] text-white rounded-full border border-[#1e2240] p-1">
          {["all", "mainnet", "testnet"].map((type) => {
            const isActive = filter === type;
            const label =
              type === "all"
                ? "All"
                : type === "mainnet"
                ? `Mainnet`
                : "Testnet";

            const count = projects.filter((p) =>
              type === "all"
                ? true
                : p.title.toLowerCase().includes(type)
            ).length;

            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`capitalize flex items-center gap-2 px-5 py-2 text-sm sm:text-base rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-gray-300 hover:bg-[#1e2240]"
                }`}
              >
                {label}
                <span
                  className={`text-xs w-6 h-6 flex items-center justify-center rounded-full ${
                    isActive
                      ? "bg-gray-800 text-white"
                      : "bg-[#222] text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Card Project */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="bg-[#0f111a] border border-[#1e2240] rounded-xl p-6 flex flex-col justify-between hover:shadow-[0_0_20px_3px_rgba(115,0,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 scale-105"
          >
            {/* Logo + Title */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.iconLists?.[0] || "/default-icon.png"}
                alt="icon"
                className="w-10 h-10 rounded-full object-cover border border-gray-700"
              />
              <h2 className="text-white font-semibold text-lg">
                {item.title}
              </h2>
            </div>

            {/* Tombol */}
            <div className="flex gap-3 mt-2">
              {/* Explorer Button */}
              <a
                href={item.stake !== "#" ? item.stake : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center py-2 rounded-lg text-sm font-medium transition ${
                  item.stake !== "#"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-[#2a2d3c] text-gray-400 cursor-not-allowed"
                }`}
              >
                Stake
              </a>

              {/* Guide Button */}
              <a
                href={item.docs !== "#" ? item.docs : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center py-2 rounded-lg text-sm font-medium transition ${
                  item.docs !== "#"
                    ? "bg-[#a855f7] hover:bg-[#9333ea] text-white"
                    : "bg-[#3a3d4c] text-gray-500 cursor-not-allowed"
                }`}
              >
                Guide
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
