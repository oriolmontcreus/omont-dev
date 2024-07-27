"use client"
import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";
import { projectsData } from './content';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
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

const ServerContent = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={pageVariants}
  >
    <div className="flex flex-wrap justify-center gap-4 mb-4 px-4">
      {projectsData.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ServerContent;