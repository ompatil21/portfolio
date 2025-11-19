import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["Flask", "AWS", "MongoDB"];
  const isGlobeCard = id === 2;

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ompatilcodes@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className={cn("group relative", className)}>
      {/* Animated gradient border (same vibe as MagicButton) */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="h-full w-full animate-[spin_6s_linear_infinite] rounded-3xl bg-[conic-gradient(from_120deg_at_50%_50%,#E2CBFF_0%,#393BB2_35%,#10132E_70%,#E2CBFF_100%)]" />
      </div>

      {/* Card body */}
      <div
        className={cn(
          "relative row-span-1 overflow-hidden rounded-3xl border border-white/10",
          "flex flex-col justify-between space-y-4 text-white shadow-[0_18px_45px_rgba(15,23,42,0.8)]",
          "bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.18),transparent_55%),_linear-gradient(135deg,#04071D,#0C0E23)]"
        )}
      >
        {/* Background images */}
        <div className={cn(id === 6 && "flex justify-center", "h-full")}>
          <div className="w-full h-full absolute">
            {img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt={img}
                className={cn(
                  imgClassName,
                  "object-cover object-center opacity-70 mix-blend-screen"
                )}
              />
            )}
          </div>

          <div
            className={cn(
              "absolute right-0 -bottom-5",
              id === 5 && "w-full opacity-80"
            )}
          >
            {spareImg && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>

          {/* Gradient animation background behind CTA card */}
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
            </BackgroundGradientAnimation>
          )}

          {/* Content */}
          <div
            className={cn(
              "relative z-10 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 gap-3",
              "group-hover/bento:translate-x-1 transition-transform duration-200",
              isGlobeCard && "md:pr-44",
              titleClassName
            )}
          >
            {/* Description */}
            <p className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] leading-relaxed">
              {description}
            </p>

            {/* Title */}
            <h3 className="font-sans text-xl lg:text-3xl max-w-96 font-semibold text-white tracking-tight">
              {title}
            </h3>

            {/* Globe card */}
            {isGlobeCard && (
              <div className="pointer-events-none absolute -right-6 bottom-0 md:bottom-[-40px] w-[230px] h-[230px] md:w-[260px] md:h-[260px] opacity-90">
                <GridGlobe />
              </div>
            )}

            {/* Tech stack chips */}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 bottom-6 lg:bottom-10">
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] text-[#E4ECFF] lg:opacity-100 opacity-80"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] text-[#E4ECFF] lg:opacity-100 opacity-80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Email copy card */}
            {id === 6 && (
              <div className="mt-5 relative">
                <div className="absolute -bottom-5 right-0">
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
