"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HeroHighlightDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          Hey,
          soy{" "}
          <Highlight className="text-black dark:text-white">
            Oriol Mont
          </Highlight>
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex justify-end w-full"
        >
        <div className="mr-5 mt-2.5 rounded-full">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            onClick={() => window.open('https://www.linkedin.com/in/oriol-mont-creus/', '_blank')}
          >
            <LinkedInLogo />
            <span>Conectar</span>
          </HoverBorderGradient>
        </div>
        </motion.div>
      </HeroHighlight>
    </div>
  );
}

const LinkedInLogo = () => {
  return (
    <svg
      width="96px"
      height="96px"
      viewBox="0 0 48 48"
      fill="#0078d4"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <rect width="48" height="48" fill="#0078d4" rx="8" ry="8" />
      <path fill="#ccc" d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" />
    </svg>
  );
};

export default HeroHighlightDemo;