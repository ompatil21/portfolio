import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/sparkles";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">

      {/* --- Spotlights (clean + subtle) --- */}
      <div className="pointer-events-none absolute inset-0">
        <Spotlight
          className="-top-40 -left-20 md:-left-32 md:-top-24 opacity-70"
          fill="#ffffff"
        />
        <Spotlight
          className="top-10 left-1/2 opacity-40"
          fill="#CBACF9"
        />
        <Spotlight
          className="top-40 right-0 opacity-40"
          fill="#4F46E5"
        />
      </div>

      {/* --- Subtle Grid BG --- */}
      <div className="absolute inset-0 bg-grid-white/[0.03] dark:bg-grid-black-100/[0.15] opacity-40" />

      {/* --- Main Content --- */}
      <div className="relative z-20 flex justify-center">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-4xl text-center flex flex-col items-center px-4">

          {/* Upper Tagline */}
          <p className="uppercase tracking-widest text-xs text-blue-100">
            Full Stack Development • Cloud • CI/CD
          </p>

          {/* Sparkle Wrapper over Title */}
          <div className="relative w-fit mx-auto mt-2 mb-2">
            <SparklesCore
              className="absolute inset-0 pointer-events-none"
              background="transparent"
              particleColor="#ffffff"
              particleDensity={40}
              minSize={1}
              maxSize={2}
              speed={3}
            />

            <TextGenerateEffect
              words="Building Scalable & High-Performance Digital Experiences"
              className="text-center text-[32px] md:text-5xl lg:text-6xl font-semibold text-white relative z-10"
            />
          </div>

          {/* Subtext */}
          <p className="text-center text-white/70 md:tracking-wider mb-6 text-sm md:text-lg lg:text-xl max-w-2xl">
            Hi! I&apos;m <span className="text-white font-semibold">Om Patil</span>,
            a Full Stack Developer crafting production-ready applications using
            React, Next.js, Node.js, and TypeScript.
          </p>

          {/* Button */}
          <a href="#about">
            <MagicButton
              title="View my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default Hero;
