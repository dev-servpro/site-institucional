"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Categories, categoriesLabelMap } from "@/data/produtos";
import ProdutosNavContent from "./produtos-nav-content";
import { motion, AnimatePresence } from "framer-motion";

export default function ProdutosNav() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedMobileCategory, setSelectedMobileCategory] = useState<Categories | null>(null);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div>
        <button
          onClick={() => {
            setIsMobileExpanded(!isMobileExpanded);
            setSelectedMobileCategory(null);
          }}
          className="relative flex items-center justify-between w-full py-2 text-[#333]/90 transition-colors duration-200 group hover:text-primary px-4"
        >
          <span className="relative z-10 text-[14px] font-medium">Produtos</span>
          <motion.div
            animate={{ rotate: isMobileExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
          <span className="absolute inset-0 w-full h-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary/5" />
        </button>

        <AnimatePresence>
          {isMobileExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 pl-8">
                {Array.from(categoriesLabelMap.entries()).map(([category, { label }]) => (
                  <div key={category} className="mb-2">
                    <button
                      onClick={() => setSelectedMobileCategory(
                        selectedMobileCategory === category ? null : category
                      )}
                      className="relative flex items-center justify-between w-full py-2 text-left text-[#333]/90 transition-colors duration-200 group hover:text-primary"
                    >
                      <span className="relative z-10 text-[14px] font-medium">
                        {label}
                      </span>
                      <motion.div
                        animate={{ rotate: selectedMobileCategory === category ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                      <span className="absolute inset-0 w-full h-full bg-white/0 transition-colors duration-200 group-hover:bg-white/10" />
                    </button>
                    <AnimatePresence>
                      {selectedMobileCategory === category && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden pl-4"
                        >
                          {/* Replace with actual subcategories */}
                          {[1, 2, 3].map((item) => (
                            <motion.a
                              key={item}
                              href="#"
                              className="relative block py-2 text-[13px] text-white/80 transition-colors duration-200 group hover:text-white"
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: item * 0.05 }}
                            >
                              <span className="relative z-10">Subcategoria {item}</span>
                              <span className="absolute inset-0 w-full h-full bg-white/0 transition-colors duration-200 group-hover:bg-white/10" />
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <HoverCard open={open} openDelay={200} onOpenChange={setOpen}>
      <HoverCardTrigger asChild>
        <button className="relative h-full px-4 flex items-center text-[#333]/90 font-medium text-[14px] transition-colors duration-200 group hover:text-primary">
          <span className="relative z-10">Produtos</span>
          <span className="absolute inset-0 w-full h-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary/5" />
        </button>
      </HoverCardTrigger>

      <HoverCardContent 
        className="w-[min(1000px,calc(100vw-2rem))] p-0 shadow-lg"
        sideOffset={8}
        align="start"
        forceMount
      >
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ y:10, opacity: 0 }}
              animate={{ y:0, opacity: 1 }}
              exit={{ y:10, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ProdutosNavContent />
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardContent>
    </HoverCard>
  );
}
