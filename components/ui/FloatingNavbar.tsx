"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar when near the top
      if (currentScrollY < 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 8) {
        // Scrolling DOWN — hide
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 8) {
        // Scrolling UP — show
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => {
          const isActive =
            pathname === navItem.link ||
            (navItem.link !== "/" && pathname.startsWith(navItem.link));

          return (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 transition-colors duration-200",
                isActive
                  ? "text-white font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              )}
            >
              {isActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              )}
              <span className="block sm:hidden">{navItem.icon}</span>
              <span
                className={cn(
                  "text-sm !cursor-pointer",
                  isActive && "drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                )}
              >
                {navItem.name}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};