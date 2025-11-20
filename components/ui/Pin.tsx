"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.9)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin cursor-pointer", // removed z-50 so arrows can sit above
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* 3D plane fills the card area */}
      <div
        style={{
          perspective: "1000px",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{
            transform,
            backdropFilter: "blur(14px) saturate(160%)",
          }}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-full h-full",
            "p-4 rounded-2xl border shadow-[0_18px_40px_rgba(0,0,0,0.55)]",
            "border-slate-700/70 group-hover/pin:border-indigo-400/70",
            "bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-indigo-950/90",
            "transition duration-700 overflow-hidden"
          )}
        >
          <div className={cn("relative z-50 w-full h-full", className)}>
            {children}
          </div>
        </div>
      </div>

      {/* overlay beam + pulses (now absolutely positioned, no extra height) */}
      <PinPerspective title={title} href={href} />
    </div>
  );
};


export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div
      className="
        pointer-events-none
        absolute inset-0
        flex items-center justify-center
        opacity-0 group-hover/pin:opacity-100
        z-[40] transition duration-500
      "
    >
      <div className="w-full h-full">
        {/* label chip */}
        <div className="absolute top-2 inset-x-0 flex justify-center">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="relative flex space-x-2 items-center z-10 rounded-full bg-slate-900/95 py-0.5 px-4 ring-1 ring-emerald-400/40 shadow-md shadow-emerald-500/20"
            >
              <span className="relative z-20 text-emerald-50 text-xs font-semibold inline-block py-0.5">
                {title}
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/80 to-emerald-400/0" />
            </a>
          )}
        </div>

        {/* circular pulses */}
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.4, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 0 }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.16] shadow-[0_12px_32px_rgb(0_0_0/0.55)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.4, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-400/[0.13] shadow-[0_12px_32px_rgb(0_0_0/0.55)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.4, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 4 }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-cyan-400/[0.12] shadow-[0_12px_32px_rgb(0_0_0/0.55)]"
          />
        </div>

        {/* vertical beam */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-500 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-200 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
