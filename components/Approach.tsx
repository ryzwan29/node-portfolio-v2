"use client";
import React from "react";
import { motion } from "framer-motion";
import { partners } from "@/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Partners = () => {
  return (
    <section className="w-full py-20">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Our <span className="text-purple">Partners</span>
      </motion.h1>

      <motion.p
        className="text-center mt-5 mb-2 text-sm md:text-base max-w-xl mx-auto"
        style={{ color: "rgba(255,255,255,0.4)", lineHeight: "1.8" }}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        Networks and ecosystems we actively collaborate with — running
        validators, providing infrastructure, and contributing to their growth.
      </motion.p>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
        {partners.map((partner, i) => (
          <PartnerCard
            key={partner.id}
            index={i}
            name={partner.name}
            logo={partner.logo}
            website={partner.website}
            description={partner.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;

const PartnerCard = ({
  index,
  name,
  logo,
  website,
  description,
}: {
  index: number;
  name: string;
  logo: string;
  website: string;
  description: string;
}) => {
  return (
    <motion.a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} website`}
      className="relative flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/[0.08] p-10 w-[300px] no-underline overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(20,20,50,0.7) 0%, rgba(10,10,30,0.85) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        textDecoration: "none",
      }}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 0 0 1px rgba(139,92,246,0.35), 0 16px 48px rgba(139,92,246,0.18), 0 8px 32px rgba(0,0,0,0.5)",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
    >
      {/* Glow top */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        initial={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 70%)",
        }}
        whileHover={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.38) 0%, transparent 70%)",
          transition: { duration: 0.3 },
        }}
      />

      {/* Shimmer sweep on mount */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        initial={{ backgroundPosition: "200% 0" }}
        whileInView={{ backgroundPosition: "-200% 0" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: index * 0.12 + 0.4, ease: "easeOut" }}
      />

      {/* Logo circle — bigger: 116x116 */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        style={{
          width: 116,
          height: 116,
          borderRadius: "50%",
          overflow: "hidden",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.12 + 0.25,
          duration: 0.55,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        whileHover={{
          scale: 1.08,
          rotate: 6,
          borderColor: "rgba(139,92,246,0.5)",
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${name} logo`}
          width={116}
          height={116}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </motion.div>

      {/* Divider */}
      <motion.span
        aria-hidden="true"
        className="relative z-10 h-px"
        style={{ background: "rgba(255,255,255,0.07)" }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.4, duration: 0.5, ease: "easeOut" }}
        whileHover={{
          background: "rgba(139,92,246,0.35)",
          transition: { duration: 0.3 },
        }}
      />

      {/* Partner name */}
      <motion.span
        className="relative z-10 text-sm font-semibold tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.55)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.5, duration: 0.4 }}
        whileHover={{
          color: "rgba(255,255,255,0.95)",
          transition: { duration: 0.2 },
        }}
      >
        {name}
      </motion.span>

      {/* Description */}
      {description && (
        <motion.p
          className="relative z-10 text-xs text-center leading-relaxed"
          style={{ color: "rgba(255,255,255,0.35)", maxWidth: "22ch" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.58, duration: 0.4 }}
          whileHover={{
            color: "rgba(255,255,255,0.6)",
            transition: { duration: 0.2 },
          }}
        >
          {description}
        </motion.p>
      )}

      {/* URL hint */}
      <motion.span
        className="relative z-10 text-xs font-medium"
        style={{ color: "rgba(203,172,249,0.6)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.64, duration: 0.4 }}
        whileHover={{
          color: "rgba(203,172,249,1)",
          letterSpacing: "0.04em",
          transition: { duration: 0.2 },
        }}
      >
        {new URL(website).hostname} ↗
      </motion.span>
    </motion.a>
  );
};
