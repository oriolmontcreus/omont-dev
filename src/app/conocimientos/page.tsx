"use client"
import ExperienceItem from "../ui/experience-item";
import Navbar from "../ui/navbar";
import { KNOWLEDGE_STEPS } from "./content/content";
import { motion } from "framer-motion";
import SchoolIcon from "../ui/icons/SchoolIcon";
import { items } from "./content/content";
import { CertificationCard } from "./ui/CertificationCard";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function KnowledgePage() {
  return (
    <section
      id="knowledge"
      data-section="knowledge"
      className="relative flex flex-col h-screen dark max-w-2xl mx-auto pt-40"
    >
      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}
      >
        <Navbar />
      </div>
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
        <SchoolIcon />
        Conocimientos
      </h2>
      <motion.section
        id="knowledge"
        data-section="knowledge"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        {KNOWLEDGE_STEPS.map((experience, index) => (
          <div className="relative p-5" key={index}>
            <ExperienceItem {...experience} />
          </div>
        ))}
      </motion.section>
      <br /><br />
      <h2 className="flex items-center justify-center mb-6 text-2xl font-semibold gap-x-3 text-white ml-4">
        Certificados
      </h2>
      <CertificationCard items={items} />
    </section>
  );
}

export default KnowledgePage;