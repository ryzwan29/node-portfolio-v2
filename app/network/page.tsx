"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, networks, mainnetNetworks, testnetNetworks, archiveNetworks } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import FooterDetailed from "@/components/FooterDetailed";
import PageTransition from "@/components/ui/PageTransition";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

// ─────────────────────────────────────────────
//  TVL CALCULATOR — auto sum from mainnetNetworks
//  Reads each network's tvl field, strips $, K, M
//  then formats total back nicely
// ─────────────────────────────────────────────
function parseTVL(raw: string): number {
  if (!raw || raw === "—") return 0;
  const s = raw.replace(/\$|,/g, "").trim().toUpperCase();
  if (s.endsWith("M")) return parseFloat(s) * 1_000_000;
  if (s.endsWith("K")) return parseFloat(s) * 1_000;
  return parseFloat(s) || 0;
}

function formatTVL(total: number): string {
  if (total >= 1_000_000) return `$${(total / 1_000_000).toFixed(1)}M`;
  if (total >= 1_000)     return `$${(total / 1_000).toFixed(1)}K`;
  return `$${total.toFixed(0)}`;
}

const totalTVL = formatTVL(
  mainnetNetworks.reduce((acc, n) => acc + parseTVL(n.tvl), 0)
);

// ─────────────────────────────────────────────
//  SLOT MACHINE HOOK
// ─────────────────────────────────────────────
function useSlotMachine(finalValue: string, trigger: number) {
  const [display, setDisplay] = useState(finalValue);
  const [spinning, setSpinning] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const CHARS = "0123456789$KM%.!@#";
  const DURATION = 1500; // ms total spin
  const SETTLE_START = 0.65; // fraction at which it starts settling

  useEffect(() => {
    setSpinning(true);
    startRef.current = null;

    const len = finalValue.length;

    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);

      // Build displayed string char by char, settling left→right
      const settled = Math.floor(
        progress < SETTLE_START
          ? 0
          : ((progress - SETTLE_START) / (1 - SETTLE_START)) * len
      );

      let result = "";
      for (let i = 0; i < len; i++) {
        if (i < settled) {
          result += finalValue[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(finalValue);
        setSpinning(false);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return { display, spinning };
}

// ─────────────────────────────────────────────
//  STAT CARD with slot animation
// ─────────────────────────────────────────────
function StatCard({
  label,
  value,
  trigger,
}: {
  label: string;
  value: string;
  trigger: number;
}) {
  const { display, spinning } = useSlotMachine(value, trigger);

  return (
    <div className="bg-[#0b0e1a] border border-[#1e2240] rounded-xl p-5 flex flex-col items-center justify-center gap-1 overflow-hidden">
      <span
        className={`text-3xl font-extrabold text-[#00d4ff] font-mono tabular-nums transition-opacity ${
          spinning ? "opacity-80" : "opacity-100"
        }`}
        style={{ minWidth: "3ch", textAlign: "center", letterSpacing: "0.05em" }}
      >
        {display}
      </span>
      <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase text-center">
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
//  FILTER
// ─────────────────────────────────────────────
const FILTERS = ["mainnet", "testnet", "archive"] as const;
type Filter = (typeof FILTERS)[number];

const filterLabel: Record<Filter, string> = {
  mainnet: "Mainnet",
  testnet: "Testnet",
  archive: "Archive",
};

const matchesFilter = (n: (typeof networks)[0], filter: Filter): boolean => {
  if (filter === "archive") return n.type === "archive";
  if (filter === "mainnet") return n.type === "mainnet";
  if (filter === "testnet") return n.type === "testnet";
  return false;
};

// ─────────────────────────────────────────────
//  PAGE
// ─────────────────────────────────────────────
const NetworkPage = () => {
  const [filter, setFilter] = useState<Filter>("mainnet");
  // spinTrigger increments every time we want to re-run the slot animation
  const [spinTrigger, setSpinTrigger] = useState(0);

  const filtered = networks.filter((n) => matchesFilter(n, filter));
  const countFor = (f: Filter) => networks.filter((n) => matchesFilter(n, f)).length;

  // Stats — TVL is now dynamic from data/index.ts
  const stats = [
    { label: "MAINNET CHAINS",  value: mainnetNetworks.length.toString() },
    { label: "TESTNET CHAINS",  value: testnetNetworks.length.toString()  },
    { label: "TVL",             value: totalTVL                            },
    { label: "SLASHING EVENTS", value: "0"                                 },
    { label: "UPTIME",          value: "99%"                               },
  ];

  // Spin on mount
  useEffect(() => {
    setSpinTrigger((t) => t + 1);
  }, []);

  // Spin when filter changes
  const handleFilter = (f: Filter) => {
    setFilter(f);
    setSpinTrigger((t) => t + 1);
  };

  return (
    <main className="relative bg-black-100 flex flex-col min-h-screen mx-auto sm:px-10 px-5 overflow-x-hidden">
      {/* Grid neon background */}
      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 pointer-events-none" />
      <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl w-full mx-auto flex-1 relative z-10">
        <FloatingNav navItems={navItems} />

        <PageTransition>
          <div className="pt-60 pb-24 px-4 sm:px-6 lg:px-8" id="networks">

            {/* Header */}
            <p className="text-xs font-bold tracking-widest uppercase text-[#00d4ff] mb-4">
              Validators
            </p>
            <div className="mb-10">
              <TextGenerateEffect
                words="Our Network Coverage"
                className="text-4xl sm:text-5xl font-extrabold mb-4"
              />
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                We operate validators across mainnet, testnet, and archive networks with zero slashing history.
              </p>
            </div>

            {/* Stats Cards — slot machine animation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {stats.map((s) => (
                <StatCard
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  trigger={spinTrigger}
                />
              ))}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {FILTERS.map((f) => {
                const isActive = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => handleFilter(f)}
                    className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                      isActive
                        ? "bg-[#00d4ff]/10 border-[#00d4ff]/50 text-[#00d4ff]"
                        : "border-[#1e2240] text-gray-400 hover:border-gray-500 hover:text-gray-200"
                    }`}
                  >
                    {filterLabel[f]}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded font-bold ${
                        isActive ? "bg-[#00d4ff]/20 text-[#00d4ff]" : "bg-[#1e2240] text-gray-500"
                      }`}
                    >
                      {countFor(f)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Table — desktop only */}
            <div className="hidden sm:block bg-[#0b0e1a] border border-[#1e2240] rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_160px] gap-4 px-6 py-3 border-b border-[#1e2240]">
                {["NETWORK", "VOTING POWER", "COMMISSION", "TVL", "STATUS", "ACTIONS"].map((h) => (
                  <span key={h} className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              <AnimatePresence mode="wait">
                {filtered.map((item, i) => {
                  const stakeEnabled = item.stake !== "#";
                  const docsEnabled  = item.docs  !== "#";
                  const isActive     = item.status === "active";

                  return (
                    <motion.div
                      key={`${filter}-${item.type}-${item.id}`}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr_160px] gap-4 px-6 py-4 items-center transition-colors duration-150 hover:bg-white/[0.02] ${
                        i !== filtered.length - 1 ? "border-b border-[#1e2240]" : ""
                      }`}
                    >
                      {/* Network */}
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.iconLists?.[0] || "/ryd-logo.svg"}
                          alt={item.title}
                          className="w-9 h-9 rounded-full object-cover border border-[#2a2d3c] shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-sm truncate">{item.title}</p>
                          <p className="text-gray-500 text-xs truncate">{item.chainId}</p>
                        </div>
                      </div>

                      {/* Voting Power */}
                      <span className="text-gray-300 text-sm">{item.votingPower}</span>

                      {/* Commission */}
                      <span className="text-gray-300 text-sm">{item.commission}</span>

                      {/* TVL */}
                      <span className="text-gray-300 text-sm">{item.tvl}</span>

                      {/* Status */}
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-green-400" : "bg-gray-600"}`} />
                        <span className={`text-sm font-medium ${isActive ? "text-green-400" : "text-gray-500"}`}>
                          {isActive ? "Active" : "Archived"}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 items-center">
                        <a
                          href={stakeEnabled ? item.stake : undefined}
                          target={stakeEnabled ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={`w-[68px] text-center py-1.5 rounded-lg text-xs font-bold border transition-all duration-200 ${
                            stakeEnabled
                              ? "border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]"
                              : "border-[#1e2240] text-gray-600 cursor-not-allowed opacity-40"
                          }`}
                        >
                          Stake
                        </a>
                        <a
                          href={docsEnabled ? item.docs : undefined}
                          target={docsEnabled ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={`w-[68px] text-center py-1.5 rounded-lg text-xs font-bold border transition-all duration-200 ${
                            docsEnabled
                              ? "border-[#1e2240] text-gray-300 hover:border-gray-500 hover:text-white"
                              : "border-[#1e2240] text-gray-600 cursor-not-allowed opacity-40"
                          }`}
                        >
                          Guide
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Cards — mobile only */}
            <div className="sm:hidden flex flex-col gap-3">
              <AnimatePresence mode="wait">
                {filtered.map((item, i) => {
                  const stakeEnabled = item.stake !== "#";
                  const docsEnabled  = item.docs  !== "#";
                  const isActive     = item.status === "active";

                  return (
                    <motion.div
                      key={`mobile-${filter}-${item.type}-${item.id}`}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="bg-[#0b0e1a] border border-[#1e2240] rounded-2xl p-4"
                    >
                      {/* Top row: icon + name + status */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.iconLists?.[0] || "/ryd-logo.svg"}
                            alt={item.title}
                            className="w-10 h-10 rounded-full object-cover border border-[#2a2d3c] shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-white font-semibold text-sm truncate">{item.title}</p>
                            <p className="text-gray-500 text-xs truncate">{item.chainId}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-green-400" : "bg-gray-600"}`} />
                          <span className={`text-xs font-semibold ${isActive ? "text-green-400" : "text-gray-500"}`}>
                            {isActive ? "Active" : "Archived"}
                          </span>
                        </div>
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-[#0d1120] rounded-lg px-3 py-2 flex flex-col gap-0.5">
                          <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">Voting Power</span>
                          <span className="text-white text-sm font-semibold">{item.votingPower}</span>
                        </div>
                        <div className="bg-[#0d1120] rounded-lg px-3 py-2 flex flex-col gap-0.5">
                          <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">Commission</span>
                          <span className="text-white text-sm font-semibold">{item.commission}</span>
                        </div>
                        <div className="bg-[#0d1120] rounded-lg px-3 py-2 flex flex-col gap-0.5">
                          <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">TVL</span>
                          <span className="text-white text-sm font-semibold">{item.tvl}</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <a
                          href={stakeEnabled ? item.stake : undefined}
                          target={stakeEnabled ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={`flex-1 text-center py-2 rounded-lg text-xs font-bold border transition-all duration-200 ${
                            stakeEnabled
                              ? "border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]"
                              : "border-[#1e2240] text-gray-600 cursor-not-allowed opacity-40"
                          }`}
                        >
                          Stake
                        </a>
                        <a
                          href={docsEnabled ? item.docs : undefined}
                          target={docsEnabled ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={`flex-1 text-center py-2 rounded-lg text-xs font-bold border transition-all duration-200 ${
                            docsEnabled
                              ? "border-[#1e2240] text-gray-300 hover:border-gray-500 hover:text-white"
                              : "border-[#1e2240] text-gray-600 cursor-not-allowed opacity-40"
                          }`}
                        >
                          Guide
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
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

export default NetworkPage;