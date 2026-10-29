"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";
import { useCallback, useState } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import ProdutosNavContent from "./produtos-nav-content";
import { motion, AnimatePresence } from "framer-motion";
import { Subcategory } from "@/app/produtos/[category]/page";
import { Category } from "@/app/produtos/page";
import { Product } from "@/app/produtos/[category]/[produto]/page";
import Link from "next/link";

export default function ProdutosNav({
  categories,
  subcategories,
  products,
}: {
  categories: Category[];
  subcategories: Subcategory[]; // Adjust type as needed
  products: Product[];
}) {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [closedByClick, setClosedByClick] = useState(false);
  const [selectedMobileCategory, setSelectedMobileCategory] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  if (isMobile) {
    return (
      <div>
        <button
          onClick={() => {
            setIsMobileExpanded(!isMobileExpanded);
            setSelectedMobileCategory(null);
          }}
          className="relative flex items-center justify-between w-full py-2 text-primary/90 transition-colors duration-200 group hover:text-primary"
        >
          <span className="relative z-10 text-[14px] font-medium ml-4">
            Produtos
          </span>
          <motion.div
            animate={{ rotate: isMobileExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10 mr-4"
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
              <div className="mt-2">
                {categories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() =>
                        setSelectedMobileCategory(
                          selectedMobileCategory === category.id ? null : category.id
                        )
                      }
                      className="block w-full text-left px-4 pl-8 py-2 text-[14px] font-medium text-primary/90 transition-colors duration-200 group-hover:text-primary capitalize"
                    >
                      <span className="capitalize">{category.nome.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())}</span>
                      <svg
                        className={`w-4 h-4 ml-2 inline transition-transform ${selectedMobileCategory === category.id ? 'rotate-180' : ''}`}
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
                    </button>
                    <AnimatePresence>
                      {selectedMobileCategory === category.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {subcategories
                            .filter((sub) => sub.produto_categoria_id === category.id)
                            .map((sub) => (
                              <Link
                                key={sub.id}
                                href="#"
                                className="block pl-12 px-4 py-2 text-[14px] font-medium text-primary/90 transition-colors duration-200 group-hover:text-primary capitalize"
                                onClick={() => setIsMobileExpanded(false)}
                              >
                                {sub.nome.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())}
                              </Link>
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
    <HoverCard
      open={closedByClick ? false : open}
      openDelay={200}
      onOpenChange={setOpen}
    >
      <HoverCardTrigger
        onClick={() => {
          setOpen(!open);
          setClosedByClick(true);
        }}
        onMouseLeave={() => {
          if (!closedByClick) {
            return;
          }
          setClosedByClick(false);
          setOpen(false);
        }}
        asChild
      >
        <button className="relative h-full px-4 flex items-center cursor-pointer text-primary/90 font-medium text-[14px] transition-colors duration-200 group hover:text-primary">
          <span className="relative z-10">Produtos</span>
          <span className="absolute inset-0 w-full h-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary/5" />
        </button>
      </HoverCardTrigger>

      <HoverCardContent
        className="w-[min(950px,calc(100vw-10rem))] p-0 shadow-lg mr-40"
        sideOffset={4}
        align="center"
        forceMount
      >
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ProdutosNavContent
                handleClose={handleClose}
                products={products}
                categories={categories}
                subcategories={subcategories}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardContent>
    </HoverCard>
  );
}
