import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const transition = {
  duration: 0,
  ease: "linear",
};

const Quote = ({ pathLengths, title, description, className }) => {
  return (
    <div className={cn("sticky top-80", className)}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || "GDSC WebWizard transforms ideas into digital reality"}
      </p>
      <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute">
        <button className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs w-fit mx-auto">
          Crafting magic in code
        </button>
      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full"
        style={{ filter: "url(#blur)" }} // Applying the Gaussian blur filter to the entire SVG
      >
        {/* Gaussian blur filter definition */}
        <defs>
          <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>

        {/* Path elements with motion */}

        {/* Note: The paths here are shortened for brevity. Replace them with the full path data as needed. */}

        <motion.path
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5..."
          stroke="#FFB7C5"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <motion.path
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5..."
          stroke="#FFDDB7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228..."
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5..."
          stroke="#4FABFF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5..."
          stroke="#076EFF"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
      </svg>
    </div>
  );
};

export default Quote;
