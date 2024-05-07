"use client"
import Navbar from "../ui/navbar";
import { CardItem, CardBody, CardContainer } from "./ui/3d-card";
import EmailContact from "./ui/EmailContact";
import Image from "next/image";
import IconButton from "../ui/IconButton";
import { motion } from "framer-motion";

import AboutMeIcon from "../ui/icons/AboutMeIcon";
import LinkedInIcon from "../ui/icons/LinkedInLogo";
import GitHubIcon from "../ui/icons/GithubIcon";


const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ExperiencePage() {
  return (
    <div>
      <section id="sobre-mi" data-section="sobre-mi" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto pt-40">
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
        <Navbar />
      </div>
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
        <AboutMeIcon />
        Sobre mí
      </h2>
      <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >

      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/2 p-4 pt-0">
          <div className="space-y-4">
            <p className="leading-relaxed">
              Mi nombre es <strong className="text-yellow-500"> Oriol Mont</strong>, un joven de 19 años originario de Girona. Soy un <strong className="text-yellow-500">Desarrollador FullStack</strong> y en la actualidad, estoy ampliando mis habilidades técnicas aprendiendo nuevos frameworks web, incluyendo <strong className="text-yellow-500">Angular, Laravel, Astro y Blazor</strong>.
            </p>
              <p className="leading-relaxed">
                Mi pasión radica en optimizar el rendimiento y la estética de las aplicaciones web para proporcionar la <strong className="text-yellow-500">mejor experiencia al usuario</strong>. Creo firmemente en la importancia de un <strong className="text-yellow-500">diseño intuitivo</strong> y una <strong className="text-yellow-500">interacción fluida</strong> para el éxito de cualquier proyecto web.
              </p>
          </div>
        </div>

        <div className="relative md:absolute right-0 w-full md:w-1/2 h-full">
          <CardContainer className="inter-var h-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full flex flex-col items-center justify-center">
              <Image
                src="/personal/oriolmontcreus.webp"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="profile-picture"
              />
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-60 mt-2 dark:text-neutral-300"
              >
                <ul className="list-disc list-inside space-y-2">
                  <li>🚹 Oriol Mont Creus</li>
                  <li>🎂 06 - 2004</li>
                  <li>💻 Desarrollador Full-stack</li>
                </ul>
              </CardItem>
            </CardItem>
            <div className="flex justify-center items-center w-full mt-10 gap-5">
              <IconButton href="https://www.linkedin.com/in/oriol-mont-creus/" className="hover:bg-gray-900 hover:border-gray-900">
                <LinkedInIcon /> LinkedIn
              </IconButton>
              <IconButton href="https://github.com/oriolmontcreus" className="hover:bg-gray-800 hover:border-gray-800">
                <GitHubIcon /> GitHub
              </IconButton>
            </div>
            <EmailContact email="oriolmontcreus@gmail.com" />
          </CardBody>
        </CardContainer>
      </div>
      </div>
      </motion.div>
    </section>
      <section id="technologies" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto mt-40 p-4">
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
        Tecnologías que manejo
        </h2>
        <img src="https://skillicons.dev/icons?i=html,css,angular,bootstrap,tailwind,jquery,js,ts,cs,py,php,laravel,nodejs,express,docker,git,npm,mysql,mongodb,postgres&perline=10" alt="technologies-icons" />

        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white mt-10">
          Herramientas y misceláneos con los que estoy familiarizado
        </h2>
        <img src="https://skillicons.dev/icons?i=vscode,visualstudio,figma,bash,powershell,codepen,linux,debian,ubuntu,windows,github,md,notion,postman,stackoverflow,svg,webflow&perline=10" alt="tools-icons" />
      </section>
      </div>
  );
}

export default ExperiencePage;