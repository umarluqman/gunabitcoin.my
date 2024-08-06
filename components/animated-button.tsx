"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function AnimatedButton({ href }: { href: string }) {
  return (
    <motion.div
      className="ml-auto"
      initial={{ width: "auto" }}
      whileHover={{ width: "auto" }}
    >
      <Link
        href={href}
        className="font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="group relative overflow-hidden">
          <span className="relative z-10">Lihat</span>
          <motion.div
            className="absolute inset-y-0 right-0 flex items-center"
            initial={{ x: "100%", opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="h-4 w-4 ml-2" />
          </motion.div>
        </Button>
      </Link>
    </motion.div>
  );
}
