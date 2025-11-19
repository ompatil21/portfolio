"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-visible",
        className
      )}
    >
      {/* LAMP ONLY – compact height, no extra padding */}
      <div className="pointer-events-none relative flex w-full items-center justify-center h-40 md:h-52">
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.4, width: "14rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 md:h-56 bg-gradient-conic from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-24 md:h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-36 md:w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.4, width: "14rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 md:h-56 bg-gradient-conic from-transparent via-transparent to-cyan-500 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-36 md:w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-24 md:h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Ground glow + bar */}
        <div className="absolute top-1/2 h-32 w-full translate-y-10 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-32 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-40 h-32 w-[30rem] -translate-y-1/2 rounded-full bg-cyan-500/50 blur-3xl" />

        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "22rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-24 -translate-y-16 rounded-full bg-cyan-400/80 blur-2xl"
        />

        {/* Top lamp line */}
        <motion.div
          initial={{ width: "14rem" }}
          whileInView={{ width: "40rem" }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[4.5rem] bg-cyan-400"
        />

        {/* Hide top of cones so they don't add extra spacing */}
        <div className="absolute inset-auto z-40 h-28 w-full -translate-y-[7.5rem] bg-slate-950" />
      </div>

      {/* HEADING – revealed as lamp widens */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
          clipPath: "inset(0 40% 0 40%)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0%)",
        }}
        transition={{ delay: 0.25, duration: 0.9, ease: "easeInOut" }}
        className="relative z-50 mt-2 flex flex-col items-center px-4"
      >
        {children}
      </motion.div>
    </div>
  );
};
