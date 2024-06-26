"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SchoolIcon from "@icons/SchoolIcon";
import { KNOWLEDGE_STEPS, items } from "./content/content";
import PageTransition from "../ui/PageTransition";
import Navbar from "../ui/navbar";
import ExperienceItem from "../ui/experience-item";
import { CertificationCard } from "./ui/CertificationCard";

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

export default function KnowledgePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="h-[60px]">
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
          <Navbar />
        </div>
      </div>
      <PageTransition>
        <main className="pt-[60px]">
          <section
            id="knowledge"
            data-section="knowledge"
            className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto"
          >
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
              <SchoolIcon />
              Conocimientos
            </h2>
            <AnimatePresence>
              {isLoaded && (
                <motion.section
                  initial="hidden"
                  animate="visible"
                  variants={pageVariants}
                >
                  {KNOWLEDGE_STEPS.map((experience, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative p-5">
                      <ExperienceItem {...experience} />
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants}>
                    <h2 className="flex items-center justify-center mb-6 text-2xl font-semibold gap-x-3 text-white ml-4">
                      Certificados
                    </h2>
                    <CertificationCard items={items} />
                  </motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </section>
        </main>
      </PageTransition>
    </div>
  );
}