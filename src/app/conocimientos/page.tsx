"use client"
import ExperienceItem from "../ui/experience-item";
import Navbar from "../ui/navbar";
import { KNOWLEDGE_STEPS } from "./content";
import { motion } from "framer-motion";
import SchoolIcon from "../ui/icons/SchoolIcon";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { items } from "./content";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function BentoGridSection() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          logo={<img src={item.logo} alt="logo" />}
          mainImage={<img src={item.mainImage} alt="main image" />}
          issuedDate={item.issuedDate}
          issuedOrganization={item.issuedOrganization}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
export function KnowledgePage() {
  return (
    <section id="knowledge" data-section="knowledge" className="relative flex flex-col h-screen dark max-w-2xl mx-auto pt-40">
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
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
      <br/><br/>
      <BentoGridSection />
    </section>
  );
}

export default KnowledgePage;