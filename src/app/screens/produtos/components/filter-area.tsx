"use client";

import { Product, Subcategory } from "@/app/produtos/[category]/page";
import Filter from "./filter";
import { useState } from "react";
import CardProduct from "./card-product";
import { capitalizeText } from "@/lib/utils";

export default function FilterArea({
  subcategories,
  filteredProducts,
}: {
  subcategories: Subcategory[];
  filteredProducts: Product[];
}) {
  const [value, setValue] = useState<string>(subcategories[0].id.toString());

  return (
    <div className="flex-1 grow ml-4 flex gap-x-8 items-start">
      <div className="p-4 px-8 bg-white rounded-sm max-w-fit shadow-md max-h-fit">
        <h4 className="mb-2 text-center text-primary font-bold text-lg">Subcategoria
        </h4>
        <Filter
          onChange={setValue}
          value={value}
          options={subcategories.map(({ nome, id }) => ({
            label: capitalizeText(nome, true),
            value: String(id),
          }))}
        />
      </div>

      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 sm:gap-6 max-w-300 mx-auto flex-1 grow">
        {filteredProducts
          ?.filter(
            (product) => value === String(product.produto_subcategoria_id)
          )
          .map((product) => {
            return (
              <li key={product.id}>
                <CardProduct product={product} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
