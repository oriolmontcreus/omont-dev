"use client"
import { useEffect, useState } from 'react'
import ExperienceItem from "../ui/experience-item";
import Navbar from "../ui/navbar";
import { KNOWLEDGE_STEPS } from "./content/content";
import { motion } from "framer-motion";
import SchoolIcon from "@icons/SchoolIcon";
import { items } from "./content/content";
import { CertificationCard } from "./ui/CertificationCard";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function KnowledgePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section
      id="knowledge"
      data-section="knowledge"
      className="relative flex flex-col h-screen dark max-w-2xl mx-auto pt-40"
    >
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
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