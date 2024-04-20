import ExperienceIcon from "../ui/icons/ExperienceIcon";
import ExperienceItem from "../ui/experience-item";

const EXPERIENCES = [
  {
    date: "Actualmente...",
    title: "Desarrollador web − IronTech",
    description:
      "Responsable de la creación y actualización de herramientas web internas, mejorando la eficiencia y productividad de la empresa. Mis tareas incluyen el diseño y desarrollo de interfaces de usuario, la implementación de nuevas funcionalidades y la resolución de problemas técnicos para garantizar un rendimiento óptimo.",
  }
];

export function ExperiencePage() {
    return (
        <section id="experience" data-section="experience" className="relative flex flex-col h-screen dark max-w-2xl mx-auto pt-20">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
                <ExperienceIcon />
                Experiencia laboral
            </h2>
            {EXPERIENCES.map((experience, index) => (
                <div className="relative" key={index}>
                    <ExperienceItem {...experience} />
                </div>
            ))}
        </section>
    );
}

export default ExperiencePage;