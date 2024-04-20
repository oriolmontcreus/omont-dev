"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import LinkedInLogo from "./ui/icons/LinkedInLogo";
import Navbar from "./ui/navbar";

export function HomePage() {
return (
  <div className="relative flex flex-col items-center justify-center h-screen dark max-w-2xl mx-auto">
    <div className="absolute top-0 w-full z-50">
      <Navbar />
    </div>
    <div className="w-full flex flex-row justify-start items-center mt-4">
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
      className="text-2xl px-4 md:text-4xl lg:text-1xl font-bold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto whitespace-nowrap"
      >
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
        className="flex justify-start w-full"
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
    </div>
    <div className="w-full h-64 bg-red-500 mt-4"></div>
  </div>
);
}

export default HomePage;