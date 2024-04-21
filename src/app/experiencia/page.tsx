import ExperienceIcon from "../ui/icons/ExperienceIcon";
import ExperienceItem from "../ui/experience-item";

const DEVELOPER_EXPERIENCES = [
  {
    date: "Noviembre 2023 - Actualidad",
    title: "Desarrollador FullStack - Irontech Group",
    description:
      "Responsable de la creación y actualización de herramientas web internas, mejorando la eficiencia y productividad de la empresa. Mis tareas incluyen el diseño y desarrollo de interfaces de usuario, la implementación de nuevas funcionalidades y la resolución de problemas técnicos para garantizar un rendimiento óptimo.",
    imageUrl: "/ExperienceLogos/irontech-whitebg.webp",
    hideTimeline: true
  },
];

const OTHER_EXPERIENCES = [
  {
    date: "Julio 2023 - Agosto 2023",
    title: "Cartero / Repartidor motarizado - Correos",
    description:
      "Elaborar rutas de reparto, organizar y distribuir correo ordinario, votos por correo, paquetería y correo certificado en las zonas de Bonmatí, Sant Julià de Llor, Osor, La Cellera de Ter, Anglès y Vidreres.",
    imageUrl: "/ExperienceLogos/correos.webp",
    isHeadItem: true,
  },
  {
    date: "Temporada Junio 2023",
    title: "Dependiente de Tienda de Pirotécnia - PetardosCM",
    description:
      "Atender a los clientes, llevar a cabo el control de inventario y mantener la limpieza en el área de trabajo.",
    imageUrl: "/ExperienceLogos/petardoscm.webp",
  },
  {
    date: "Abril 2023 - Junio 2023",
    title: "Operario UHT (Contrato ETT) - Làctia Agroalimentària SL",
    description:
      "Realizar control de calidad en los envases de leche, compactar y reciclar aquellos defectuosos, transportar palés utilizando una transpaleta eléctrica, y llevar a cabo la limpieza de la maquinaria",
    imageUrl: "/ExperienceLogos/lactia.webp",
  },
  {
    date: "Mayo 2023",
    title: "Mozo de almacén (Contrato ETT) - Trace Logistics Fluidra",
    description:
      "Descargar camiones, clasificar y organizar productos, paletizar y asegurar con flejes, etiquetar adecuadamente y mantener la limpieza en el área de trabajo.",
    imageUrl: "/ExperienceLogos/tracelogistics.webp",
  },
  {
    date: "Abril 2023 - Mayo 2023",
    title: "Auxiliar de Taller (Contrato ETT) - Rotimpres",
    description:
      "Encargado de flejar paquetes, gestionar y organizar pedidos, así como mantener la limpieza de las máquinas.",
    imageUrl: "/ExperienceLogos/rotimpres.webp",
  },
  {
    date: "Abril 2023",
    title: "Auxiliar de Taller (Contrato ETT) - Granja San Francisco SL",
    description:
    "Manejo y disposición manual de envases para pastelitos y miel, inspección visual para el control de calidad del producto, y mantenimiento de la limpieza en la maquinaria.",
    imageUrl: "/ExperienceLogos/granja-san-francisco.webp",
  },
  {
    date: "Junio 2020 - Septiembre 2020",
    title: "Camarero - Blue Bar",
    description:
    "Camarero en el bar/restaurante de la Piscina Municipal de Bescanó. Gestión básica de inventario, mantenimiento de la limpieza de las instalaciones y seguir las medidas contra el COVID-19",
    imageUrl: "/ExperienceLogos/bescano-townhall-shield.webp",
  },

];

export function ExperiencePage() {
  return (
    <section id="experience" data-section="experience" className="relative flex flex-col h-screen dark max-w-2xl mx-auto pt-20">
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <ExperienceIcon />
        Experiencia laboral
      </h2>
      {DEVELOPER_EXPERIENCES.map((experience, index) => (
        <div className="relative" key={index}>
          <ExperienceItem {...experience} />
        </div>
      ))}
      <div className="my-6 border-t border-gray-200 dark:border-gray-700 text-center relative">
        <span className="absolute left-0 right-0 top-50% transform -translate-y-50% text-gray-500 font-semibold">
          Roles en otros campos
        </span>
      </div>
      {OTHER_EXPERIENCES.map((experience, index) => (
        <div className="relative" key={index}>
          <ExperienceItem {...experience} />
        </div>
      ))}
    </section>
  );
}

export default ExperiencePage;