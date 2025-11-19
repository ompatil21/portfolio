

import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-purple">
        My <span className="text-purple">work experience & Education</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            // keep your random duration
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(135deg, rgba(4,7,29,0.98) 0%, rgba(16,23,60,0.98) 100%)",
              // make border a bit smoother for the moving border effect
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="
              flex-1
              border border-slate-800/80
              bg-slate-950/60
              text-slate-100
              shadow-[0_18px_40px_rgba(15,23,42,0.85)]
              backdrop-blur-xl
              transition-all duration-300
              hover:border-purple-400/60
              hover:shadow-[0_22px_50px_rgba(88,28,135,0.55)]
            "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-8 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-24 md:w-20 w-16 h-auto object-contain drop-shadow-xl"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-slate-50">
                  {card.title}
                </h1>

                {/* subtle accent line under title */}
                <div className="mt-2 h-px w-10 bg-gradient-to-r from-purple-400/80 to-cyan-400/60" />

                <p className="text-start text-slate-300 mt-3 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
