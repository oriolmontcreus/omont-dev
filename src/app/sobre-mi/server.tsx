"use client"
import { motion } from "framer-motion";
import { CardItem, CardBody, CardContainer } from "./ui/3d-card";
import EmailContact from "./ui/EmailContact";
import Image from "next/image";
import IconButton from "../ui/IconButton";
import LinkedInIcon from "@icons/LinkedInLogo";
import GitHubIcon from "@icons/GithubIcon";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServerContent = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={pageVariants}
  >
    <div className="flex flex-col md:flex-row justify-between items-start">
      <div className="w-full md:w-1/2 p-4 pt-0">
        <div className="space-y-4">
          <p className="leading-relaxed">
            Soy <strong className="text-yellow-500"> Oriol Mont Creus</strong>, un apasionado <strong className="text-yellow-500">Desarrollador de Software </strong> de 20 años. Actualmente, estoy trabajando y ampliado mis habilidades técnicas, especialmente en nuevos frameworks web y otras tecnologías emergentes en mi tiempo libre
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
          height={1000}
          width={1000}
          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="profile-picture"
          priority={true}
          placeholder="empty"
        />
            <CardItem
              as="div"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-60 mt-2 dark:text-neutral-300"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>🚹 Oriol Mont Creus</li>
                <li>🎂 06 - 2004</li>
                <li>💻 Desarrollador de Software</li>
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
);

export default ServerContent;