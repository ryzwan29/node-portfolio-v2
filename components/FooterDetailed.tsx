"use client";

import Link from "next/link";
import { socialMedia, navItems, mainnetNetworks, testnetNetworks } from "@/data";

const FooterDetailed = () => {
  const stats = [
    { label: "Mainnet Chains",   value: `${mainnetNetworks.length} Active`  },
    { label: "Testnet Chains",   value: `${testnetNetworks.length} Active`  },
    { label: "Slashing History", value: "0 Events"                           },
    { label: "Average Uptime",   value: "99%"},
  ];

  return (
    <footer className="w-full border-t border-[#1e2240] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT — Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-cyan-500/50 bg-cyan-900/20 flex items-center justify-center">
              <img src="/ryd-logo.svg" alt="logo" className="w-6 h-6" />
            </div>
            <span className="text-white font-bold tracking-widest text-sm uppercase">
              Validator
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Professional blockchain infrastructure and open-source tooling for the decentralized web.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialMedia.map((s) => (
              <a
                key={s.id}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#1e3040] bg-[#0b0f1e] flex items-center justify-center hover:border-cyan-500/60 hover:bg-cyan-900/20 transition-all duration-200"
              >
                <img src={s.img} alt={s.name} width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE — Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Navigation
          </h3>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200 w-fit"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT — Network Status */}
        <div className="flex flex-col gap-4">
          <h3 className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Network Status
          </h3>
          {stats.map((stat) => (
            <div key={stat.label} className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">{stat.label}</span>
              <span className="text-cyan-400 text-sm font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1e2240] px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-7xl mx-auto w-full">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Validator Network. MIT Licensed.
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          All systems operational
        </div>
      </div>
    </footer>
  );
};

export default FooterDetailed;