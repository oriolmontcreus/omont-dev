"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from "../ui/navbar";
import ExperienceIcon from "@icons/ExperienceIcon";
import PageTransition from "../ui/PageTransition";
import { DEVELOPER_EXPERIENCES, OTHER_EXPERIENCES } from "./content";

const ServerContent = dynamic(() => import('./ServerContent'), { ssr: false });

const ClientsideContent = () => {
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
          <section id="experiencia" data-section="experiencia" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
              <ExperienceIcon />
              Experiencia laboral
            </h2>
            {isLoaded && (
              <ServerContent 
                developerExperiences={DEVELOPER_EXPERIENCES}
                otherExperiences={OTHER_EXPERIENCES}
              />
            )}
          </section>
        </main>
      </PageTransition>
    </div>
  );
}

export default ClientsideContent;