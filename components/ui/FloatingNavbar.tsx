"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
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
  const { scrollYProgress } = useScroll();

  // visible in hero initially
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{
          y: visible ? 0 : -24,
          opacity: visible ? 1 : 0,
        }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "fixed top-6 inset-x-0 z-[5000] mx-auto flex items-center justify-center",
          className
        )}
      >
        {/* Outer gradient ring */}
        <div
          className="
            relative max-w-fit md:min-w-[70vw] lg:min-w-fit
            rounded-2xl p-[1px]
            bg-gradient-to-r from-purple-500/60 via-cyan-400/40 to-purple-500/60
            shadow-[0_0_40px_rgba(15,23,42,0.9)]
          "
        >
          {/* Inner glass container */}
          <div
            className={cn(
              "flex items-center justify-center space-x-2 md:space-x-4",
              "px-4 md:px-8 py-2.5 md:py-3.5 rounded-2xl",
              "border border-white/10 bg-slate-950/90",
              "shadow-lg shadow-black/40",
              "backdrop-blur-xl backdrop-saturate-150"
            )}
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="group relative flex items-center gap-1 md:gap-2 px-3 py-1.5 rounded-full"
              >
                {/* Icon (shown on all, smaller on desktop) */}
                {navItem.icon && (
                  <span className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors">
                    {navItem.icon}
                  </span>
                )}

                {/* Label */}
                <span
                  className={cn(
                    "text-xs md:text-sm font-medium",
                    "text-slate-200 group-hover:text-white",
                    "transition-colors"
                  )}
                >
                  {navItem.name}
                </span>

                {/* Hover background pill */}
                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-full
                    bg-white/5
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-200
                  "
                />

                {/* Underline glow */}
                <span
                  className="
                    pointer-events-none
                    absolute -bottom-1.5 left-4 right-4
                    h-[2px]
                    bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400
                    opacity-0 scale-x-50
                    group-hover:opacity-100 group-hover:scale-x-100
                    origin-center
                    transition-all duration-200
                  "
                />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
