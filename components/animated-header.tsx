"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const variant = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

export function AnimatedHeader() {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
    >
      Guna
      <span className="flex items-center gap-3">
        Bitcoin
        <Image src="/bitcoin-logo.svg" alt="Bitcoin" width={60} height={60} />
      </span>
    </motion.div>
  );
}
