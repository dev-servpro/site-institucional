"use client";

import * as motion from "motion/react-client";

export default function NovidadesHeader() {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-2">
        Novidades
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
        Fique por dentro das últimas notícias
      </h1>
      <div className="mt-4 w-16 h-1 bg-amber-700 mx-auto" />
    </motion.div>
  );
}
