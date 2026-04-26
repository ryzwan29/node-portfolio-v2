// InfrastructureSection.jsx
// Place this in your /home page between "What you need to know about RydOne"
// and "My deployment process" sections.

import { Server, Cpu, MemoryStick, HardDrive, Wifi, MapPin, Shield} from "lucide-react";

const nodes = [
  {
    location: "Salt Lake City, Utah",
    role: "Primary Validator Node",
    specs: [
      { icon: Server,      label: "Type",     value: "Dedicated Server"},
      { icon: Cpu,         label: "CPU",      value: "AMD Ryzen 9 7950X @ 5.7 GHz", sub: "16 Cores / 32 Threads" },
      { icon: MemoryStick, label: "RAM",      value: "256 GB DDR5 5200 MHz" },
      { icon: HardDrive,   label: "Storage",  value: "4 × 2 TB M.2 NVMe Gen 5" },
      { icon: Wifi,        label: "Network",  value: "10 Gbps Shared", sub: "Static Public IP" },
    ],
    accent: "from-[#38bdf8] to-[#818cf8]", // cyan→indigo (matches your heading gradient)
    iconBg: "bg-[#1e3a5f]",
    iconColor: "text-[#38bdf8]",
  },
  {
    location: "Jakarta, Indonesia",
    role: "Secondary & Backup Node",
    specs: [
      { icon: Server,      label: "Type",     value: "Baremetal Self Hosted"},
      { icon: Cpu,         label: "CPU",      value: "Dual Xeon E5-2670 v2 @ 3.30 GHz", sub: "20 Cores / 40 Threads" },
      { icon: MemoryStick, label: "RAM",      value: "256 GB DDR3 1866 MHz" },
      { icon: HardDrive,   label: "Storage",  value: "4 × 2 TB M.2 NVMe Gen 3", sub: "2 × 24 TB HDD" },
      { icon: Wifi,        label: "Network",  value: "1 Gbps Dedicated", sub: "Static Public IP" },
    ],
    accent: "from-[#818cf8] to-[#38bdf8]", // indigo→cyan (reversed, same palette)
    iconBg: "bg-[#1e2a5f]",
    iconColor: "text-[#818cf8]",
  },
];

const sentryLocations = [
  "Frankfurt",
  "Singapore",
  "Indonesia",
  "Tokyo",
  "US East",
  "Kenya",
  "Siberia",
];

export default function InfrastructureSection() {
  return (
    <section className="w-full py-20 px-4">
      {/* ── Heading ── */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
            Built to Last.
          </span>{" "}
          <span className="text-white">Engineered for Scale.</span>
        </h2>
        <p className="text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto">
          Enterprise-grade hardware. Redundant architecture. Zero compromise on uptime.
        </p>
      </div>

      {/* ── Validator Node Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
        {nodes.map((node) => (
          <div
            key={node.location}
            className="rounded-xl border border-white/10 bg-[#161b27] p-6 flex flex-col gap-5"
          >
            {/* Card header */}
            <div className="flex items-start gap-3">
              <div className={`p-2.5 rounded-xl ${node.iconBg}`}>
                <Server className={`w-5 h-5 ${node.iconColor}`} />
              </div>
              <div>
                <p className="text-xs text-[#64748b] font-medium uppercase tracking-widest mb-0.5">
                  {node.role}
                </p>
                <h3
                  className={`text-lg font-bold bg-gradient-to-r ${node.accent} bg-clip-text text-transparent`}
                >
                  {node.location}
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Spec rows */}
            <ul className="flex flex-col gap-3">
              {node.specs.map(({ icon: Icon, label, value, sub }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-white/5">
                    <Icon className="w-3.5 h-3.5 text-[#64748b]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748b] uppercase tracking-wider">{label}</span>
                    <p className="text-sm text-white font-medium leading-snug">{value}</p>
                    {sub && <p className="text-xs text-[#64748b]">{sub}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Sentry Nodes Banner ── */}
      <div className="max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#161b27] p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          {/* Left: icon + label */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3 rounded-xl bg-[#1e3a5f]">
              <Shield className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <div>
              <p className="text-xs text-[#64748b] uppercase tracking-widest font-medium">
                Sentry Nodes
              </p>
              <p className="text-white font-bold text-lg">{sentryLocations.length} Global Sentries</p>
            </div>
          </div>

          <div className="hidden md:block w-px self-stretch bg-white/10" />

          {/* Right: location pills */}
          <div className="flex flex-wrap gap-2">
            {sentryLocations.map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           bg-[#0f1f3d] border border-[#38bdf8]/30
                           text-[#38bdf8] text-xs font-medium"
              >
                <MapPin className="w-3 h-3" />
                {loc}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-[#475569] leading-relaxed">
          Sentry nodes act as a protective relay layer — shielding validator nodes from direct
          exposure while maintaining low-latency peer connections across all major regions.
        </p>
      </div>
    </section>
  );
}
