"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

const LEFT_STACK = ["ReactJS", "Express", "TypeScript"];
const RIGHT_STACK = ["Flask", "AWS", "MongoDB"];
const EMAIL = "ompatilcodes@gmail.com";

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
        // clean, responsive wrapper aligned with the rest of the site
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
  const isGlobeCard = id === 2;
  const isTechCard = id === 3;
  const isEmailCard = id === 6;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div
      className={cn(
        "relative row-span-1 overflow-hidden rounded-3xl border border-white/10",
        "group/bento flex flex-col justify-between hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition duration-200",
        "shadow-[0_18px_45px_rgba(15,23,42,0.8)]",
        // gradient background to match hero & projects
        "bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.18),transparent_55%),_linear-gradient(135deg,#04071D,#0C0E23)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 z-0">
        <div className="h-full w-full rounded-3xl animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_120deg_at_50%_50%,#E2CBFF_0%,#393BB2_35%,#10132E_70%,#E2CBFF_100%)] blur-[1.5px] opacity-70" />
      </div>

      {/* Background images */}
      <div className={cn(isEmailCard && "flex justify-center", "h-full")}>
        <div className="absolute inset-0 h-full w-full">
          {img && (
            <Image
              src={img}
              alt={img}
              fill
              className={cn(
                imgClassName,
                "object-cover object-center opacity-70 mix-blend-screen"
              )}
              sizes="100vw"
              priority={id === 1}
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
            <Image
              src={spareImg}
              alt={spareImg}
              fill
              className="h-full w-full object-cover object-center"
              sizes="100vw"
              priority={id === 1}
            />
          )}
        </div>

        {/* Gradient animation behind CTA card */}
        {isEmailCard && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center text-3xl font-bold text-white pointer-events-none md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            "relative z-10 flex min-h-40 flex-col px-5 py-5 lg:p-10",
            "gap-3 pb-8 lg:pb-10",
            "group-hover/bento:translate-x-1 transition duration-200",
            isGlobeCard && "md:pr-40",
            isTechCard && "pr-32 lg:pr-44 pb-20 lg:pb-28",
            titleClassName
          )}
        >
          {/* Description */}
          {description && (
            <p className="font-sans font-extralight text-sm leading-relaxed text-[#C1C2D3] md:max-w-[18rem] md:text-xs lg:text-base lg:max-w-[22rem]">
              {description}
            </p>
          )}

          {/* Title */}
          {title && (
            <h3 className="max-w-[24rem] font-sans text-lg font-bold text-white lg:text-3xl">
              {title}
            </h3>
          )}

          {/* 3D globe / Github card */}
          {isGlobeCard && (
            <div className="pointer-events-none absolute -right-4 bottom-[-20px] h-[210px] w-[210px] opacity-90 md:bottom-[-40px] md:h-[240px] md:w-[240px]">
              <GridGlobe />
            </div>
          )}

          {/* Tech stack chips */}
          {isTechCard && (
            <div
              className="pointer-events-none absolute right-4 bottom-5 lg:right-6 lg:bottom-7 
              flex w-fit gap-3 lg:gap-4 z-40"
            >
              {/* Left column */}
              <div className="flex flex-col gap-2 lg:gap-3">
                {LEFT_STACK.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-xl px-3 py-1.5 lg:px-3 lg:py-2.5
                      text-xs lg:text-sm font-medium
                      text-[#E4ECFF]
                      bg-[#10132E]/90 border border-white/10
                      shadow-[0_10px_25px_rgba(15,23,42,0.9)]
                      backdrop-blur-sm whitespace-nowrap
                  "
                  >
                    {item}
                  </span>
                ))}

                {/* subtle filler */}
                <span className="h-7 lg:h-8 w-20 rounded-xl bg-[#0B1024]/70 border border-white/5 shadow-sm" />
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-2 lg:gap-3 translate-y-2 lg:translate-y-4">
                <span className="h-7 lg:h-8 w-20 rounded-xl bg-[#0B1024]/70 border border-white/5 shadow-sm" />

                {RIGHT_STACK.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-xl px-3 py-1.5 lg:px-3 lg:py-2.5
                      text-xs lg:text-sm font-medium
                      text-[#E4ECFF]
                      bg-[#10132E]/90 border border-white/10
                      shadow-[0_10px_25px_rgba(15,23,42,0.9)]
                      backdrop-blur-sm whitespace-nowrap
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Email CTA */}
          {isEmailCard && (
            <div className="relative mt-5">
              {/* Confetti */}
              <div
                className={cn(
                  "pointer-events-none absolute -bottom-5 right-0",
                  copied ? "block" : "hidden"
                )}
              >
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ width: 400, height: 200 }}
                />
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
  );
};
