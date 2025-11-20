"use client";

import { useRef } from "react";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data";
import { LampContainer } from "./ui/lamp";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-project-card]");
    const cardWidth = firstCard?.offsetWidth ?? 340; // read actual card width
    const gap = 32; // gap-8

    el.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 relative">
      {/* Heading + lamp */}
      <LampContainer className="mb-8 scale-95 md:scale-100">
        <h1 className="heading text-center text-purple">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
      </LampContainer>

      <div className="relative px-8">
        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          type="button"
          title="Scroll left"
          aria-label="Scroll left"
          className="
            hidden md:flex
            absolute left-2 top-1/2 -translate-y-1/2 z-50
            h-10 w-10 rounded-full bg-slate-900/70 backdrop-blur
            border border-white/20 text-white
            hover:bg-slate-800 transition items-center justify-center
          "
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          type="button"
          title="Scroll right"
          aria-label="Scroll right"
          className="
            hidden md:flex
            absolute right-2 top-1/2 -translate-y-1/2 z-50
            h-10 w-10 rounded-full bg-slate-900/70 backdrop-blur
            border border-white/20 text-white
            hover:bg-slate-800 transition items-center justify-center
          "
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* SCROLL WRAPPER */}
        <div
          ref={scrollRef}
          className="
            overflow-x-auto no-scrollbar
            scroll-smooth pb-4
          "
        >
          <div className="flex gap-8">
            {projects.map((item) => (
              <motion.div
                key={item.id}
                data-project-card
                className="
                  flex-shrink-0
                  w-[80vw] sm:w-[21rem] lg:w-[22rem]
                  h-[25rem] lg:h-[27.5rem]
                "
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
              >
                <PinContainer
                  title={item.title}
                  href={item.link}
                  containerClassName="w-full h-full"
                  className="w-full h-full"
                >
                  <div
                    className="
                      relative flex flex-col w-full h-full 
                      rounded-[2rem]
                      bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
                      p-6 
                      shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                      border border-white/10
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:shadow-[0_30px_80px_rgba(88,28,135,0.5)]
                      hover:border-purple-400/40
                    "
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-36 lg:h-40 mb-3 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-slate-900/70 to-purple-500/30" />
                      <Image
                        src="/bg.png"
                        alt="background"
                        fill
                        className="object-cover opacity-40"
                      />
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>

                    {/* Divider */}
                    <div className="relative my-2">
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

                    {/* TITLE */}
                    <h2 className="font-semibold text-slate-50 text-base lg:text-lg line-clamp-1">
                      {item.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-slate-300 text-xs lg:text-sm mt-1 line-clamp-4">
                      {item.des}
                    </p>

                    {/* Divider */}
                    <div className="relative my-3">
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

                    {/* FOOTER */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {item.iconLists.map((icon, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-slate-800/90 border border-white/20 flex items-center justify-center shadow"
                          >
                            <Image
                              src={icon}
                              alt="logo"
                              width={28}
                              height={28}
                              className="p-1.5 object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      {/* 🔗 “Check live site” – now actually clickable */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-indigo-300 hover:text-purple transition-colors group"
                      >
                        <span>Check live site</span>
                        <FaLocationArrow
                          className="ms-2 group-hover:translate-x-1 transition-transform"
                          color="#CBACF9"
                        />
                      </a>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
