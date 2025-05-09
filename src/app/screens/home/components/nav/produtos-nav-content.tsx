"use client";
import { Categories, categoriesLabelMap } from "@/data/produtos";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Package, ShoppingBag, Wrench, Settings, Box, Boxes } from "lucide-react";

const subcategoryIcons = [Package, ShoppingBag, Wrench, Settings, Box, Boxes];

export default function ProdutosNavContent() {
  const [selectedCategory, setSelectedCategory] = useState<Categories>(
    Categories.auto
  );
  const isMobile = useIsMobile();

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'space-x-8'} bg-white/80 backdrop-blur-sm`}>
      {/* Categories Column */}
      <div 
        className={`
          ${isMobile ? 'w-full' : 'w-80'} 
          bg-gradient-to-br from-slate-50 to-white/50
          py-6 lg:py-8 
          ${isMobile ? 'rounded-t-lg' : 'rounded-l-lg'}
          border-r border-slate-200/50
        `}
      >
        <h3 className="text-sm lg:text-xl text-amber-700 font-semibold px-6 mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          Categorias
        </h3>

        <ul className="space-y-1">
          {Array.from(categoriesLabelMap.entries()).map(
            ([categorie, {image, label}]) => {
              const isSelected = selectedCategory === categorie;
              return (
                <motion.li
                  onClick={() => setSelectedCategory(categorie)}
                  onMouseEnter={() => !isMobile && setSelectedCategory(categorie)}
                  key={categorie}
                  data-selected={isSelected}
                  className={`
                    group
                    cursor-pointer 
                    mx-3
                    rounded-lg
                    hover:bg-slate-100
                    data-[selected=true]:bg-gradient-to-r
                    data-[selected=true]:from-slate-100
                    data-[selected=true]:to-slate-50
                    data-[selected=true]:text-slate-800
                    data-[selected=true]:font-medium
                    data-[selected=true]:shadow-sm
                    text-sm 
                    py-3
                    px-4
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-between
                    relative
                    overflow-hidden
                    bg-white
                  `}
                  initial={false}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <div className="relative w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={image}
                        alt={label}
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                    {label}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 relative z-10 ${
                    isSelected ? 'opacity-100 text-slate-600 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-50'
                  }`} />
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 bg-slate-100/20"
                      layoutId="category-background"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.li>
              );
            }
          )}
        </ul>
      </div>

      {/* Subcategories Panel */}
      <div 
        className={`
          py-6 
          lg:py-8
          px-8
          ${isMobile ? 'bg-white/80 rounded-b-lg' : ''}
          min-h-[300px]
        `}
      >
        <div className="h-full">
          <div className="flex-1">
            <h4 className="text-lg lg:text-xl text-slate-800 font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {categoriesLabelMap.get(selectedCategory)?.label}
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Replace with actual subcategories */}
              {[1, 2, 3, 4, 5, 6].map((item, index) => {
                const Icon = subcategoryIcons[index % subcategoryIcons.length];
                return (
                  <Link 
                    href="#"
                    key={item}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="mb-3">
                      <div className="rounded-lg bg-slate-100 p-4 group-hover:bg-slate-200 transition-colors duration-200">
                        <Icon className="w-6 h-6 text-slate-600 group-hover:text-slate-700 transition-colors duration-200" />
                      </div>
                    </div>

                    <h5 className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                      Subcategoria {item}
                    </h5>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
