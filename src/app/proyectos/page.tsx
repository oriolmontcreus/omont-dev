"use client"
import Navbar from "../ui/navbar";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";

import ProjectsIcon from "../ui/icons/ProjectsIcon";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
                        <ProjectCard
                            image="/projects/vistaqs.webp"
                            title="VistaQs"
                            description="Fullstack web application for managing surveys."
                            githubUrl="https://github.com/oriolmontcreus/vistaQS"
                        />
                        <ProjectCard
                            image="/projects/sound-sanbox.webp"
                            title="Sound Playground"
                            description="Simple drumpad, channel rack and sound upload."
                            githubUrl="https://github.com/oriolmontcreus/vanilla-audio-sandbox"
                            previewUrl="https://oriolmontcreus.github.io/vanilla-audio-sandbox/"
                        />
                        <ProjectCard
                            image="/projects/vscode-extension.webp"
                            title="Code Extension"
                            description="Basic VS Code image path manager extension."
                            githubUrl="https://github.com/oriolmontcreus/imagepatheditor-vsce"
                        />
                        <ProjectCard
                            image="/projects/dragndrop.webp"
                            title="Drag&Drop Sort"
                            description="Basic VS Code image path manager extension."
                            githubUrl="https://github.com/oriolmontcreus/simple-dragNdrop"
                            previewUrl="https://oriolmontcreus.github.io/simple-dragNdrop/"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default ProyectosPage;