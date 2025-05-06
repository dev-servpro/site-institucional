"use client";
import { Categories, categoriesLabelMap } from "@/data/produtos";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ProdutosNavContent() {
  const [selectedCategory, setSelectedCategory] = useState<Categories>(
    Categories.auto
  );
  const isMobile = useIsMobile();

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'space-x-6'}`}>
      <div 
        className={`
          ${isMobile ? 'w-full' : 'w-64'} 
          bg-slate-50 
          py-4 lg:py-6 
          ${isMobile ? 'rounded-t-md' : 'rounded-l-md'}
        `}
      >
        <h3 className="text-lg lg:text-xl text-orange-800 font-medium px-4 mb-2">
          Categorias
        </h3>

        <ul className="space-y-1">
          {Array.from(categoriesLabelMap.entries()).map(
            ([categorie, {image, label}]) => {
              const isSelected = selectedCategory === categorie;
              return (
                <li
                  onClick={() => setSelectedCategory(categorie)}
                  onMouseEnter={() => !isMobile && setSelectedCategory(categorie)}
                  key={categorie}
                  data-selected={isSelected}
                  className={`
                    cursor-pointer 
                    hover:bg-white 
                    data-[selected=true]:bg-white 
                    data-[selected=true]:text-orange-800
                    data-[selected=true]:font-medium
                    text-sm 
                    py-2 
                    px-4
                    transition-colors
                    duration-200
                  `}
                >
                  {label}
                </li>
              );
            }
          )}
        </ul>
      </div>

      <div 
        className={`
          flex-1 
          w-full 
          py-4 
          lg:py-6 
          ${isMobile ? 'bg-white rounded-b-md' : ''}
          min-h-[200px]
        `}
      >
        <h4 className="text-lg lg:text-xl text-orange-800 font-medium px-4 mb-2">
          Subcategorias
        </h4>
        <div className={`px-4 ${isMobile ? 'mt-2' : 'mt-4'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Replace this with actual subcategories */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="text-sm text-gray-600 hover:text-orange-800 transition-colors cursor-pointer"
              >
                Subcategoria {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
