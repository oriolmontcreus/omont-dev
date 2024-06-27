"use client"
import { useState, useEffect } from 'react';
import Navbar from "../ui/navbar";
import PageTransition from "../ui/PageTransition";
import AboutMeIcon from "@icons/AboutMeIcon";
import dynamic from 'next/dynamic';

const ServerContent = dynamic(() => import('./server'), { ssr: false });

const ClientContent = () => {
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
          <section id="sobre-mi" data-section="sobre-mi" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
              <AboutMeIcon />
              Sobre mí
            </h2>
            {isLoaded && <ServerContent />}
          </section>
          <section id="technologies" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto mt-40 p-4 space-y-4">
            <div className="bg-gray-50 relative group dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <h2 className="flex justify-center mb-6 text-2xl font-semibold gap-x-3 text-white">
                Tecnologías de Frontend
              </h2>
              <div className="flex flex-wrap">
                <img className="w-full h-12" src="https://skillicons.dev/icons?i=html,css,angular,bootstrap,tailwind,js,ts&perline=10" alt="frontend-icons" />
              </div>
            </div>

            <div className="bg-gray-50 relative group dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <h2 className="flex justify-center mb-6 text-2xl font-semibold gap-x-3 text-white">
                Tecnologías de Backend
              </h2>
              <div className="flex flex-wrap">
                <img className="w-full h-12" src="https://skillicons.dev/icons?i=nodejs,express,php,laravel,python&perline=10" alt="backend-icons" />
              </div>
            </div>

            <div className="bg-gray-50 relative group dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <h2 className="flex justify-center mb-6 text-2xl font-semibold gap-x-3 text-white">
                Bases de Datos
              </h2>
              <div className="flex flex-wrap">
                <img className="w-full h-12" src="https://skillicons.dev/icons?i=mysql,mongodb,postgres&perline=3" alt="database-icons" />
              </div>
            </div>

            <div className="bg-gray-50 relative group dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <h2 className="flex justify-center mb-6 text-2xl font-semibold gap-x-3 text-white">
                Herramientas y Misceláneos
              </h2>
              <div className="flex flex-wrap">
                <img className="w-full" src="https://skillicons.dev/icons?i=vscode,visualstudio,figma,bash,powershell,codepen,linux,debian,ubuntu,windows,github,md,notion,postman,stackoverflow,svg,webflow,docker,git,npm,jquery,cs&perline=10" alt="tools-icons" />
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </div>
  );
}

export default ClientContent;