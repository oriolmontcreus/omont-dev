"use client"
import Navbar from "../ui/navbar";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";
import ProjectsIcon from "@icons/ProjectsIcon";
import { projectsData } from './content';
import PageTransition from "../ui/PageTransition";

const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProyectosPage = () => {
    return (
        <div className="min-h-screen">
            <div className="h-[60px]">
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
                    <Navbar />
                </div>
            </div>
            <PageTransition>
                <main className="pt-[60px]">
                    <section id="proyectos" data-section="proyectos" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto px-2 sm:px-0">
                        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
                            <ProjectsIcon />
                            Proyectos
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            <motion.div
                                className="flex flex-wrap justify-center gap-4"
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                            >
                                {projectsData.map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        image={project.image}
                                        title={project.title}
                                        description={project.description}
                                        githubUrl={project.githubUrl}
                                        previewUrl={project.previewUrl}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </section>
                </main>
            </PageTransition>
        </div>
    );
}

export default ProyectosPage;