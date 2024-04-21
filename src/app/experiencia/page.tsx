import ExperienceIcon from "../ui/icons/ExperienceIcon";
import ExperienceItem from "../ui/experience-item";

const EXPERIENCES = [
  {
    date: "Actualmente",
    title: "Desarrollador FullStack - Irontech",
    description:
      "Responsable de la creación y actualización de herramientas web internas, mejorando la eficiencia y productividad de la empresa. Mis tareas incluyen el diseño y desarrollo de interfaces de usuario, la implementación de nuevas funcionalidades y la resolución de problemas técnicos para garantizar un rendimiento óptimo.",
    imageUrl: "/ExperienceLogos/irontech-whitebg.webp",
    isDevRelated: true,
  },
  {
    date: "Julio 2023 - Agosto 2023",
    title: "Cartero / Repartidor motarizado - Correos",
    description:
      "Preparar rutas de reparto, organizar y repartir correo ordinario, votos por correo, paquetería y correo certificado. Repartidor en Bonmatí, Sant Julià de Llor, Osor, La Cellera de Ter, Anglès i Vidreres.",
    imageUrl: "/ExperienceLogos/correos.webp",
    isDevRelated: false,
  },
  {
    date: "Julio 2023 - Agosto 2023",
    title: "Cartero / Repartidor motarizado - Correos",
    description:
      "Preparar rutas de reparto, organizar y repartir correo ordinario, votos por correo, paquetería y correo certificado. Repartidor en Bonmatí, Sant Julià de Llor, Osor, La Cellera de Ter, Anglès i Vidreres.",
    imageUrl: "/ExperienceLogos/correos.webp",
    isDevRelated: false,
  },

];

export function ExperiencePage() {
    const developerExperiences = EXPERIENCES.filter(experience => experience.isDevRelated);
    const otherExperiences = EXPERIENCES.filter(experience => !experience.isDevRelated);

    return (
        <section id="experience" data-section="experience" className="relative flex flex-col h-screen dark max-w-2xl mx-auto pt-20">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
                <ExperienceIcon />
                Experiencia laboral
            </h2>
            {developerExperiences.map((experience, index) => (
                <div className="relative" key={index}>
                    <ExperienceItem {...experience} />
                </div>
            ))}
            <div className="my-6 border-t border-gray-200 dark:border-gray-700 text-center relative">
            <span className="absolute left-0 right-0 top-50% transform -translate-y-50% text-gray-500 font-semibold">
              Roles en otros campos
            </span>
            </div>
            {otherExperiences.map((experience, index) => (
                <div className="relative" key={index}>
                    <ExperienceItem {...experience} />
                </div>
            ))}
        </section>
    );
}

export default ExperiencePage;