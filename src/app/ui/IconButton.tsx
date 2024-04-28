import { ReactNode } from "react";
import { CardItem } from "../sobre-mi/ui/3d-card";
import { motion } from "framer-motion";
import { CardContainer } from "../sobre-mi/ui/3d-card";

const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
};

interface IconButtonProps {
    href?: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

function IconButton({ href, children, className, disabled }: IconButtonProps) {
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        if (href) {
            window.open(href, '__blank');
        }
    };

    return (
        <CardContainer>
        <CardItem
            as={motion.a}
            variants={buttonVariants}
            whileHover="hover"
            initial="rest"
            translateZ={20}
            href={href || '#'}
            onClick={handleClick}
            className={`px-4 py-2 rounded-xl text-xs border-2 transition-colors duration-300 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </CardItem>
    </CardContainer>
    );
}

export default IconButton;