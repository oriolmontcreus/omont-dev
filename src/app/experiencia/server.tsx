"use client"
import { motion } from "framer-motion";
import ExperienceItem from "../ui/experience-item";
import { ExperienceItemDefinition } from "../ui/experience-item";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ServerContent = ({ developerExperiences, otherExperiences }: { developerExperiences: ExperienceItemDefinition[]; otherExperiences: ExperienceItemDefinition[] }) => (
  <motion.section
    id="experiencia"
    data-section="experiencia"
    initial="hidden"
    animate="visible"
    variants={pageVariants}
  >
    {developerExperiences.map((experience, index) => (
      <motion.div className="relative" key={index} variants={itemVariants}>
        <ExperienceItem {...experience} />
      </motion.div>
    ))}
    <motion.div className="my-6 border-t border-gray-200 dark:border-gray-700 text-center relative" variants={itemVariants}>
      <span className="absolute left-0 right-0 top-4 -translate-y-1/2 text-gray-500 font-semibold">
        Roles en otros campos
      </span>
    </motion.div>
    {otherExperiences.map((experience, index) => (
      <motion.div className="relative p-5" key={index} variants={itemVariants}>
        <ExperienceItem {...experience} />
      </motion.div>
    ))}
  </motion.section>
);

export default ServerContent;