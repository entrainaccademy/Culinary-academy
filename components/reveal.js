"use client";

import { motion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0, amount = 0.15, from = "bottom" }) {
  const initial = {
    opacity: 0,
    x: from === "left" ? -56 : from === "right" ? 56 : 0,
    y: from === "bottom" ? 22 : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};
