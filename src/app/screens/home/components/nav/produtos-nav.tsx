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
          className="flex items-center justify-between w-full py-2"
        >
          <span className="text-gray-700 hover:text-gray-900 transition-colors">Produtos</span>
          <motion.div
            animate={{ rotate: isMobileExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
              <div className="mt-2 pl-4">
                {Array.from(categoriesLabelMap.entries()).map(([category, { label }]) => (
                  <div key={category} className="mb-2">
                    <button
                      onClick={() => setSelectedMobileCategory(
                        selectedMobileCategory === category ? null : category
                      )}
                      className="flex items-center justify-between w-full py-2 text-left"
                    >
                      <span className="text-gray-700 hover:text-gray-900 transition-colors">
                        {label}
                      </span>
                      <motion.div
                        animate={{ rotate: selectedMobileCategory === category ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
                              className="block py-2 text-sm text-gray-600 hover:text-orange-800 transition-colors"
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: item * 0.05 }}
                            >
                              Subcategoria {item}
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
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <button className="hover:text-blue-600 transition-colors">
          Produtos
        </button>
      </HoverCardTrigger>

      <HoverCardContent 
        className="w-[min(1000px,calc(100vw-2rem))] p-0 shadow-lg"
        sideOffset={8}
      >
        <ProdutosNavContent />
      </HoverCardContent>
    </HoverCard>
  );
}
