"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import LinkedInLogo from "./ui/icons/LinkedInLogo";

export function HeroHighlightDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <HeroHighlight className="h-screen flex items-center justify-center">
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
      <section id="experience" data-section="experience" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl bg-red-500">
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          <svg className="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          Experience
        </h2>
        {/* data goes here... */}
      </section>

      <section id="projects" data-section="projects" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl bg-red-500">
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          Projects
        </h2>
        {/* data goes here... */}
      </section>

      <section id="technologies" data-section="technologies" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl bg-red-500" >
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          Technologies
        </h2>
        {/* data goes here... */}
      </section>

      <section id="about-me" data-section="about-me" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl bg-red-500">
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          About Me
        </h2>
        {/* data goes here... */}
      </section>
    </div>
  );
}

export default HeroHighlightDemo;