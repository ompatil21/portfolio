"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { cn } from "@/lib/utils";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-purple">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Testimonials carousel */}
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Apple-style single-row logo slider */}
        <div className="relative w-full max-w-6xl mx-auto mt-10">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent z-20" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent z-20" />

          <div className="overflow-hidden">
            <div className="flex items-center gap-10 animate-logo-marquee">
              {[...companies, ...companies].map((company, idx) => (
                <div key={`${company.id}-${idx}`} className="group flex-shrink-0">
                  <div
                    className="
                      flex items-center gap-2
                      rounded-full border border-cyan-400/25
                      bg-slate-950/80
                      px-4 py-2
                      shadow-[0_0_18px_rgba(34,211,238,0.25)]
                      transition-all duration-300
                      group-hover:border-purple-400/70
                      group-hover:shadow-[0_0_26px_rgba(168,85,247,0.6)]
                    "
                  >
                    {/* Icon */}
                    <div className="relative flex items-center justify-center h-9 w-9">
                      <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-md" />
                      <img
                        src={company.img}
                        alt={company.name}
                        className={cn(
                          "relative h-7 md:h-9 w-auto object-contain",
                          company.imgClassName
                        )}
                      />
                    </div>

                    {/* Label */}
                    {company.label && (
                      <span className="text-xs md:text-sm font-medium text-slate-100 whitespace-nowrap">
                        {company.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
