"use client";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import LinkedInLogo from "./ui/icons/LinkedInLogo";
import { SectionCard } from "./ui/section-card";
import ExperienceIcon from "./ui/icons/ExperienceIcon";
import ProjectsIcon from "./ui/icons/ProjectsIcon";
import AboutMeIcon from "./ui/icons/AboutMeIcon";
import SchoolIcon from "./ui/icons/SchoolIcon";

export function HomePage() {
return (
  <div className="relative flex flex-col items-center justify-center h-screen dark max-w-2xl mx-auto">
<div className="w-full flex flex-row justify-start items-center mt-4 flex-wrap">
  <div>
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
      ¡Hola!
      soy{" "}
      <Highlight className="text-black dark:text-white">
        Oriol Mont
      </Highlight>
    </motion.h1>
  </div>
  <div>
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
</div>
<SectionCard items={projects} />
</div>
);
}

export const projects = [
  {
    title: "Experiencia",
    link: "/experiencia",
    backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    icon: <ExperienceIcon />,
  },
  {
    title: "Proyectos",
    link: "/proyectos",
    backgroundColor: 'linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    icon: <ProjectsIcon />,
  },
  {
    title: "Conocimientos",
    link: "/conocimientos",
    backgroundColor: 'linear-gradient(45deg, rgba(60,179,113,1) 30%, rgba(102,205,170,1) 90%)',
    icon: <SchoolIcon />,
  },
  {
    title: "Sobre mí",
    link: "/sobre-mi",
    backgroundColor: 'linear-gradient(90deg, rgba(85,37,130,1) 0%, rgba(0,128,128,1) 100%)',
    icon: <AboutMeIcon />,
  }
];

export default HomePage;