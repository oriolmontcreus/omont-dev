import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../../utils/cn";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    logo,
    issuedDate,
    issuedOrganization,
    index,
    hoveredIndex,
    setHoveredIndex,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    logo?: React.ReactNode;
    issuedDate?: string;
    issuedOrganization?: string;
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
}) => {
    return (
        <div
            className={cn(
                "relative row-span-1 rounded-xl shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className="relative">
                <AnimatePresence>
                {hoveredIndex === index && (
                    <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-xl z-10"
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
                <div className="relative z-10">
                    {logo && <div className="flex justify-center mb-4 rounded-lg overflow-hidden">{logo}</div>}
                    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-center">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-2 text-center">
                        {description}
                    </div>
                    <div className="flex justify-center">
                        <span className="font-sans font-normal text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                            {issuedOrganization}
                        </span>
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mt-2 text-center">
                        Issued date: {issuedDate}
                    </div>
                </div>
            </div>
        </div>
    );
};