"use client"
import Navbar from "../ui/navbar";
import ProjectCard from "./ui/ProjectCard";

import ProjectsIcon from "../ui/icons/ProjectsIcon";

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
                    <ProjectCard
                        image="https://via.placeholder.com/150"
                        title="Project 1"
                        description="This is a description for Project 1."
                        githubUrl="https://github.com/user/project1"
                        previewUrl="https://project1.com"
                    />
                    <ProjectCard
                        image="https://via.placeholder.com/150"
                        title="Project 2"
                        description="This is a description for Project 2."
                        githubUrl="https://github.com/user/project2"
                        previewUrl="https://project2.com"
                    />
                </div>
            </section>
        </div>
    );
}

export default ProyectosPage;