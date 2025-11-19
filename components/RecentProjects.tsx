/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { LampContainer } from "./ui/lamp";

const RecentProjects = () => {
  return (
    <section className="py-24">
      {/* ⭐ LAMP HEADING */}
      <LampContainer className="mb-12">
        <h1 className="heading text-center text-purple">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
      </LampContainer>

      <div className="flex flex-wrap items-start justify-center gap-16 mt-14 px-4">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[33rem] h-[26rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={item.title} href={item.link}>
              <div
                className="
                  relative flex flex-col w-full h-full 
                  rounded-[2rem]
                  bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
                  p-7 
                  shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                  border border-white/10
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:shadow-[0_30px_80px_rgba(88,28,135,0.5)]
                  hover:border-purple-400/40
                "
              >
                {/* Top bevel highlight */}
                <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />

                {/* Left glow edge */}
                <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-purple-500/30 to-indigo-500/20 blur-[2px]" />

                {/* Right glow edge */}
                <div className="absolute right-0 inset-y-0 w-[3px] bg-gradient-to-b from-indigo-500/30 to-purple-500/20 blur-[2px]" />

                {/* Bottom thickness shadow */}
                <div className="absolute inset-x-4 bottom-0 h-[6px] bg-black/40 blur-md rounded-full" />

                {/* INNER CONTENT */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top image */}
                  <div className="relative flex items-center justify-center w-full h-[22vh] lg:h-[30vh] mb-4 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-slate-900/70 to-purple-500/30" />
                    <img
                      src="/bg.png"
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <img
                      src={item.img}
                      className="relative z-10 max-h-full object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Inner glowing divider #1 (image → text) */}
                  <div className="relative my-3">
                    <div
                      className="absolute inset-0 h-[2px] bg-gradient-to-r 
                        from-purple-500/0 
                        via-purple-400/60 
                        to-indigo-500/0 
                        blur-[2px]"
                    />
                    <div
                      className="absolute inset-0 h-px bg-gradient-to-r 
                        from-purple-500/20 
                        via-purple-400/80 
                        to-indigo-500/20"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="font-semibold text-slate-50 lg:text-2xl text-lg line-clamp-1">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-300 lg:text-base text-sm mt-2 line-clamp-3">
                    {item.des}
                  </p>

                  {/* Inner glowing divider #2 (text → footer) */}
                  <div className="relative my-4">
                    <div
                      className="absolute inset-0 h-[2px] bg-gradient-to-r 
                        from-indigo-500/0 
                        via-indigo-400/60 
                        to-purple-500/0 
                        blur-[2px]"
                    />
                    <div
                      className="absolute inset-0 h-px bg-gradient-to-r 
                        from-indigo-500/20 
                        via-indigo-400/80 
                        to-purple-500/20"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-2">
                    {/* Tech icons */}
                    <div className="flex -space-x-3">
                      {item.iconLists.map((icon, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-slate-800/90 border border-white/20 flex items-center justify-center shadow"
                        >
                          <img src={icon} className="p-2" />
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center group cursor-pointer">
                      <span className="text-indigo-300 font-medium text-sm group-hover:text-purple transition-colors">
                        Check live site
                      </span>
                      <FaLocationArrow
                        className="ms-3 group-hover:translate-x-1 transition-transform"
                        color="#CBACF9"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
