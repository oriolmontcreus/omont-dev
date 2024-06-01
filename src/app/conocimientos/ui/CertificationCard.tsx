import CalendarIcon from "@/app/ui/icons/CalendarIcon";
import { cn } from "../../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const CertificationCard = ({
  items,
  className,
}: {
  items: CertDefinition[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 py-10 w-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.url}
          key={item?.url}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item}>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  item,
}: {
  className?: string;
  children: React.ReactNode;
  item: CertDefinition;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-200",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          <img src={item.logo} alt={item.title} className="mb-4" />
          {children}
          <p className="mb-2">{item.description}</p>
          <p className="inline-block bg-slate-700 text-zinc-100 text-xs px-2 rounded-full uppercase font-semibold tracking-wide overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full mb-1">{item.issuedOrganization}</p>
          <div className="flex items-center">
            <CalendarIcon />
            <p className="ml-2">{item.issuedDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide mt-4 text-blue-400", className)}>
      {children}
    </h4>
  );
};