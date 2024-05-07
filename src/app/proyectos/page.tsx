"use client"
import Navbar from "../ui/navbar";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";
import ProjectsIcon from "../ui/icons/ProjectsIcon";
import { projectsData } from './content';

const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProyectosPage() {
    return (
        <div>
            <section id="proyectos" data-section="proyectos" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto pt-40 px-2 sm:px-0">
                <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
                    <Navbar />
                </div>
                <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
                    <ProjectsIcon />
                    Proyectos
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
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
        </div>
    );
}

export default ProyectosPage;