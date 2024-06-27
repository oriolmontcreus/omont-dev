"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SchoolIcon from "@icons/SchoolIcon";
import { KNOWLEDGE_STEPS, items } from "./content/content";
import PageTransition from "../ui/PageTransition";
import Navbar from "../ui/navbar";

const ServerContent = dynamic(() => import('./server'), { ssr: false });

export default function ClientContent() {
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
            {isLoaded && (
              <ServerContent knowledgeSteps={KNOWLEDGE_STEPS} certificationItems={items} />
            )}
          </section>
        </main>
      </PageTransition>
    </div>
  );
}