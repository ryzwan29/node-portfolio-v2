"use client";

import { navItems, products } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import FooterDetailed from "@/components/FooterDetailed";
import PageTransition from "@/components/ui/PageTransition";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const tagColors: Record<string, string> = {
  Infrastructure: "text-[#00d4ff] border-[rgba(0,212,255,0.25)]  bg-[rgba(0,212,255,0.06)]",
  Hosting:        "text-[#00ffcc] border-[rgba(0,255,204,0.25)]  bg-[rgba(0,255,204,0.06)]",
};

const ProductPage = () => {
  return (
    <main className="relative bg-black-100 flex flex-col min-h-screen mx-auto sm:px-10 px-5 overflow-x-hidden">
      {/* Grid neon background */}
      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 pointer-events-none" />
      <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl w-full mx-auto flex-1 relative z-10">
        <FloatingNav navItems={navItems} />

        <PageTransition>
          <div className="pt-60 pb-24 px-4 sm:px-6 lg:px-8" id="product">

            {/* Header */}
            <div className="mb-16">
              <p className="text-xs font-bold tracking-widest uppercase text-[#00d4ff] mb-4">
                Services & Pricing
              </p>
              <TextGenerateEffect
                words="Products & Services"
                className="text-4xl sm:text-5xl font-extrabold mb-5"
              />
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                Infrastructure services for blockchain operators, developers, and validators.
                Contact us via email to get started or request a custom quote.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-[#0b0e1a] border border-[#1e2240] rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:border-purple-700/50 hover:shadow-[0_0_24px_3px_rgba(115,0,255,0.25)] hover:-translate-y-0.5"
                  style={
                    {
                      "--accent": product.accent,
                    } as React.CSSProperties
                  }
                >
                  {/* Top row: icon + title + tag */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#131627] border border-[#1e2240] flex items-center justify-center p-2 group-hover:border-purple-700/40 transition-all duration-300">
                      <img
                        src={product.icon}
                        alt={product.name}
                        className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h2 className="text-white font-bold text-xl">{product.name}</h2>
                        <span
                          className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border rounded ${
                            tagColors[product.tag] ?? "text-gray-400 border-gray-700 bg-white/5"
                          }`}
                        >
                          {product.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: product.accent }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-[#1e2240]">
                    <a
                      href={product.contactEmail}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all duration-300"
                      style={{ backgroundColor: product.accent }}
                    >
                      Contact via Email
                      <span className="text-base">✉</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <p className="text-gray-500 text-sm">
                Need something custom? Reach out directly at{" "}
                <a
                  href="mailto:infra@rydone.xyz"
                  className="text-[#00d4ff] hover:underline font-medium"
                >
                  infra@rydone.xyz
                </a>
              </p>
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

export default ProductPage;
