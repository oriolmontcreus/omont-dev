"use client"
import ExperienceItem from "../ui/experience-item";
import Navbar from "../ui/navbar";
import { DEVELOPER_EXPERIENCES, OTHER_EXPERIENCES } from "./content";
import { motion } from "framer-motion";
import ExperienceIcon from "@icons/ExperienceIcon";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperiencePage = () => {
  return (
    <section id="experiencia" data-section="experiencia" className="relative flex flex-col h-screen dark max-w-2xl mx-auto pt-40">
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
        <Navbar/>
      </div>
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
        <ExperienceIcon />
        Experiencia laboral
      </h2>
      <motion.section
        id="experiencia"
        data-section="experiencia"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        {DEVELOPER_EXPERIENCES.map((experience, index) => (
          <div className="relative" key={index}>
            <ExperienceItem {...experience} />
          </div>
        ))}
        <div className="my-6 border-t border-gray-200 dark:border-gray-700 text-center relative">
          <span className="absolute left-0 right-0 top-50% transform -translate-y-50% text-gray-500 font-semibold">
            Roles en otros campos
          </span>
        </div>
        {OTHER_EXPERIENCES.map((experience, index) => (
          <div className="relative p-5" key={index}>
            <ExperienceItem {...experience} />
          </div>
        ))}
      </motion.section>
    </section>
  );
}

export default ExperiencePage;