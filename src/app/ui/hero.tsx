"use client";
import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 2px",
      }}
      animate={{
        backgroundSize: "100% 2px",
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-green-100/50 to-green-200/50 dark:from-green-500/50 dark:to-green-600/50`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};