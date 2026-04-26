"use client";

import { useEffect, useRef, useState } from "react";

// ─── Node Data ────────────────────────────────────────────────────────────────
const NODE_DATA = [
  {
    id: "slc",
    label: "Salt Lake City",
    sublabel: "Primary Validator",
    coordinates: [40.76, -111.891] as [number, number],
    role: "primary",
    hexColor: "#38bdf8",
  },
  {
    id: "jkt",
    label: "Jakarta",
    sublabel: "RPC & Backup Node",
    coordinates: [-6.175, 106.865] as [number, number],
    role: "backup",
    hexColor: "#818cf8",
  },
  {
    id: "fra",
    label: "Frankfurt",
    sublabel: "Sentry Node",
    coordinates: [50.11, 8.682] as [number, number],
    role: "sentry",
    hexColor: "#34d399",
  },
  {
    id: "sgp",
    label: "Singapore",
    sublabel: "Sentry Node",
    coordinates: [1.352, 103.82] as [number, number],
    role: "sentry",
    hexColor: "#fb923c",
  },
  {
    id: "idn",
    label: "Indonesia",
    sublabel: "Sentry Node",
    coordinates: [-7.9797, 112.6304] as [number, number],
    role: "sentry",
    hexColor: "#e879f9",
  },
  {
    id: "tyo",
    label: "Tokyo",
    sublabel: "Sentry Node",
    coordinates: [35.69, 139.69] as [number, number],
    role: "sentry",
    hexColor: "#f472b6",
  },
  {
    id: "use",
    label: "US East",
    sublabel: "Sentry Node",
    coordinates: [40.712, -74.006] as [number, number],
    role: "sentry",
    hexColor: "#a78bfa",
  },
  {
    id: "kny",
    label: "Kenya",
    sublabel: "Sentry Node",
    coordinates: [-1.2921, 36.8219] as [number, number],
    role: "sentry",
    hexColor: "#facc15",
  },
  {
    id: "sbr",
    label: "Siberia",
    sublabel: "Sentry Node",
    coordinates: [56.0153, 92.8932] as [number, number],
    role: "sentry",
    hexColor: "#4ade80",
  },
];

const ARC_DATA = [
  { source: "slc", target: "fra" },
  { source: "slc", target: "use" },
  { source: "jkt", target: "slc" },
  { source: "jkt", target: "sgp" },
  { source: "jkt", target: "tyo" },
  { source: "tyo", target: "fra" },
  { source: "jkt", target: "idn" },
  { source: "sgp", target: "fra" },
  { source: "use", target: "fra" },
  { source: "fra", target: "kny" },
  { source: "fra", target: "sbr" },
  { source: "kny", target: "sbr" },
  { source: "idn", target: "kny" },
];

function getNode(id: string) {
  return NODE_DATA.find((n) => n.id === id)!;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    L?: any;
  }
}

// ─── GeoMap Component ─────────────────────────────────────────────────────────
export default function GeoMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  // mounted flag prevents any map init on server (avoids hydration mismatch)
  const [mounted, setMounted] = useState(false);

  const DEFAULT_CENTER: [number, number] = [20, 30];
  const DEFAULT_ZOOM = 2;

  function resetView() {
    if (!mapRef.current) return;
    mapRef.current.setView(DEFAULT_CENTER, DEFAULT_ZOOM, { animate: true, duration: 0.6 });
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    async function init() {
      // Inject Leaflet CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Inject Leaflet JS
      if (!window.L) {
        await new Promise<void>((res, rej) => {
          const s = document.createElement("script");
          s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          s.onload = () => res();
          s.onerror = () => rej(new Error("Leaflet load failed"));
          document.head.appendChild(s);
        });
      }

      if (cancelled || !mapContainerRef.current || !window.L) return;

      const L = window.L;

      // Destroy existing map (hot-reload safety)
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      // ── Inject custom CSS via DOM — never rendered by SSR so no hydration mismatch ──
      if (!document.getElementById("geomap-styles")) {
        const styleEl = document.createElement("style");
        styleEl.id = "geomap-styles";
        styleEl.textContent = [
          ".leaflet-container{background:#070d1a!important;font-family:'Courier New',monospace}",
          ".leaflet-control-attribution{display:none!important}",
          ".leaflet-control-zoom{border:1px solid rgba(56,189,248,0.25)!important;border-radius:8px!important;overflow:hidden;box-shadow:0 0 12px rgba(56,189,248,0.1)!important}",
          ".leaflet-control-zoom a{background:#0a1220!important;color:#38bdf8!important;border-color:rgba(56,189,248,0.2)!important;font-size:16px!important;line-height:28px!important;width:28px!important;height:28px!important}",
          ".leaflet-control-zoom a:hover{background:#1e3a5f!important}",
          ".geo-tooltip{background:transparent!important;border:none!important;box-shadow:none!important;padding:0!important}",
          ".geo-tooltip::before{display:none!important}",
          ".geo-tooltip-inner{background:rgba(10,18,32,0.93);border-radius:8px;padding:7px 11px;backdrop-filter:blur(8px);min-width:110px}",
          ".geo-tooltip-label{font-size:11px;font-weight:700;font-family:'Courier New',monospace;margin-bottom:2px}",
          ".geo-tooltip-sub{font-size:9px;color:#94a3b8;font-family:'Courier New',monospace}",
          ".geo-pulse-ring{position:absolute;border-radius:50%;animation:geoPulse 2.4s ease-out infinite;pointer-events:none}",
          "@keyframes geoPulse{0%{opacity:.85;transform:scale(.65)}100%{opacity:0;transform:scale(1.7)}}",
        ].join("\n");
        document.head.appendChild(styleEl);
      }

      // Create map
      const map = L.map(mapContainerRef.current, {
        center: [20, 30],
        zoom: 2,
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        minZoom: 1,
        maxZoom: 10,
        attributionControl: false,
      });

      mapRef.current = map;

      // Dark CartoDB tiles
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        { subdomains: "abcd", maxZoom: 20 }
      ).addTo(map);

      // ── Curved arc lines ───────────────────────────────────────────────────
      ARC_DATA.forEach(({ source, target }) => {
        const s = getNode(source);
        const t = getNode(target);
        const lat1 = s.coordinates[0], lng1 = s.coordinates[1];
        const lat2 = t.coordinates[0], lng2 = t.coordinates[1];
        const latMid = (lat1 + lat2) / 2;
        const lngMid = (lng1 + lng2) / 2;
        const dist = Math.sqrt((lat2 - lat1) ** 2 + (lng2 - lng1) ** 2);
        const latOffset = dist * 0.15;

        const pts: [number, number][] = [];
        for (let i = 0; i <= 50; i++) {
          const u = i / 50;
          const lat =
            (1 - u) * (1 - u) * lat1 +
            2 * (1 - u) * u * (latMid + latOffset) +
            u * u * lat2;
          const lng =
            (1 - u) * (1 - u) * lng1 +
            2 * (1 - u) * u * lngMid +
            u * u * lng2;
          pts.push([lat, lng]);
        }

        L.polyline(pts, {
          color: s.hexColor,
          weight: 1.5,
          opacity: 0.45,
          dashArray: "6 5",
        }).addTo(map);
      });

      // ── Node markers ───────────────────────────────────────────────────────
      NODE_DATA.forEach((node) => {
        const dotR = node.role === "primary" ? 11 : node.role === "backup" ? 9 : 7;
        // Canvas large enough to contain the outermost pulse ring
        const canvas = dotR * 2 + 36;
        const c = canvas / 2; // center coordinate inside canvas

        // All child elements use absolute positioning from top/left of canvas.
        // iconAnchor = [c, c] so Leaflet places the canvas center on the lat/lng.
        // This guarantees the core dot lands exactly on the coordinate.
        const html = `<div style="position:relative;width:${canvas}px;height:${canvas}px;">
          <div class="geo-pulse-ring" style="
            border:1.5px solid ${node.hexColor};
            width:${dotR * 2 + 28}px;height:${dotR * 2 + 28}px;
            top:${c - dotR - 14}px;left:${c - dotR - 14}px;
            animation-delay:0s;opacity:0;
          "></div>
          <div class="geo-pulse-ring" style="
            border:1.5px solid ${node.hexColor};
            width:${dotR * 2 + 14}px;height:${dotR * 2 + 14}px;
            top:${c - dotR - 7}px;left:${c - dotR - 7}px;
            animation-delay:0.55s;opacity:0;
          "></div>
          <div style="
            position:absolute;
            width:${dotR * 2 + 8}px;height:${dotR * 2 + 8}px;
            top:${c - dotR - 4}px;left:${c - dotR - 4}px;
            border-radius:50%;background:${node.hexColor}2e;
          "></div>
          <div style="
            position:absolute;
            width:${dotR * 2}px;height:${dotR * 2}px;
            top:${c - dotR}px;left:${c - dotR}px;
            border-radius:50%;
            background:${node.hexColor};
            box-shadow:0 0 10px ${node.hexColor}cc,0 0 22px ${node.hexColor}55;
            border:1.5px solid rgba(255,255,255,0.22);
          "></div>
          <div style="
            position:absolute;
            width:${Math.round(dotR * 0.72)}px;height:${Math.round(dotR * 0.72)}px;
            top:${c - dotR + Math.round(dotR * 0.1)}px;
            left:${c - dotR + Math.round(dotR * 0.15)}px;
            border-radius:50%;background:rgba(255,255,255,0.42);
          "></div>
        </div>`;

        const icon = L.divIcon({
          className: "",
          html,
          iconSize:   [canvas, canvas],
          iconAnchor: [c, c],   // center of canvas = center of dot = the coordinate
        });

        const marker = L.marker(node.coordinates, { icon });
        marker.addTo(map);

        marker.bindTooltip(
          `<div class="geo-tooltip-inner" style="border:1px solid ${node.hexColor}55;box-shadow:0 0 14px ${node.hexColor}33;">
            <div class="geo-tooltip-label" style="color:${node.hexColor}">${node.label}</div>
            <div class="geo-tooltip-sub">${node.sublabel}</div>
          </div>`,
          {
            permanent: false,
            direction: "top",
            offset: [0, -(c + 4)],
            className: "geo-tooltip",
            opacity: 1,
          }
        );
      });

      if (!cancelled) setReady(true);
    }

    init().catch(console.error);

    return () => {
      cancelled = true;
      if (mapRef.current) {
        try { mapRef.current.remove(); } catch (_) {}
        mapRef.current = null;
      }
    };
  }, [mounted]);

  return (
    <section className="w-full py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs text-[#64748b] uppercase tracking-widest font-medium mb-2">
          Infrastructure Geolocation
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
            Global Node Distribution
          </span>
        </h2>
        <p className="text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto">
          Validator, backup, and sentry nodes spread across 7 strategic locations worldwide.
        </p>
      </div>

      {/* Node pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {NODE_DATA.map((n) => (
          <span
            key={n.id}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono"
            style={{
              borderColor: `${n.hexColor}40`,
              color: n.hexColor,
              backgroundColor: `${n.hexColor}10`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: n.hexColor, boxShadow: `0 0 6px ${n.hexColor}` }}
            />
            {n.label}
          </span>
        ))}
      </div>

      <p className="text-center text-[10px] text-[#334155] mb-4 tracking-widest uppercase select-none">
        Hover nodes for details · Scroll to zoom · Drag to pan
      </p>

      {/* Map wrapper */}
      <div
        className="relative max-w-7xl mx-auto rounded-2xl border border-white/10 bg-[#070d1a] shadow-2xl overflow-hidden"
        style={{ height: 600 }}
      >
        {/* Loading overlay — only shown before map is ready */}
        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#070d1a]">
            <div className="w-8 h-8 rounded-full border-2 border-[#38bdf8] border-t-transparent animate-spin mb-3" />
            <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
              Initializing map…
            </p>
          </div>
        )}

        {/* Leaflet mount point */}
        <div ref={mapContainerRef} style={{ position: "absolute", inset: 0, zIndex: 1 }} />

        {/* Scanline */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,#fff 2px,#fff 3px)",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse at center, transparent 55%, #070d1a 100%)",
          }}
        />

        {/* Legend */}
        <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1.5 bg-[#07101e]/90 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
          {[
            { role: "primary", label: "Primary Validator", hex: "#38bdf8" },
            { role: "backup",  label: "RPC & Backup",      hex: "#818cf8" },
            { role: "sentry",  label: "Sentry Node",       hex: "#34d399" },
          ].map((l) => (
            <div key={l.role} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: l.hex, boxShadow: `0 0 6px ${l.hex}` }}
              />
              <span className="text-[10px] text-slate-400 font-mono">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Attribution */}
        {/* <p className="absolute bottom-2 right-3 z-20 text-[8px] text-slate-700 select-none">
          © CARTO © OpenStreetMap
        </p> */}

        {/* Reset view button — shown only when map is ready */}
        {ready && (
          <button
            onClick={resetView}
            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#38bdf8]/25 bg-[#0a1220]/90 backdrop-blur-sm text-[#38bdf8] hover:bg-[#1e3a5f]/80 hover:border-[#38bdf8]/50 transition-all duration-200 select-none"
            title="Reset view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            <span className="text-[9px] font-mono tracking-widest uppercase">Reset</span>
          </button>
        )}
      </div>
    </section>
  );
}