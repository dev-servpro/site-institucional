"use client";

import { Product, Subcategory } from "@/app/produtos/[category]/page";
import Filter from "./filter";
import { useState } from "react";
import {
  capitalizeText,
  extractBulletPoints,
  gerarUrlAmigavel,
  pegarImagemDosProdutosDoSistemaDeVendas,
} from "@/lib/utils";
import ProductCard from "./product-card";
import { useParams, useSearchParams } from "next/navigation";

export default function FilterArea({
  subcategories,
  filteredProducts,
}: {
  subcategories: Subcategory[];
  filteredProducts: Product[];
}) {
  const subcategory = useSearchParams().get("subcategory");

  const [value, setValue] = useState<string>(() => {
    return (
      subcategories
        .find((sub) => gerarUrlAmigavel(sub.slug) === subcategory)
        ?.id.toString() || String(subcategories?.[0]?.id)
    );
  });
  const params = useParams();

  return (
    <div className="flex-1 flex-col grow ml-4 flex gap-x-8 items-start">
      <div className="p-4 mx-auto px-8">
        <Filter
          onChange={setValue}
          value={value}
          options={subcategories.map(({ nome, id }) => ({
            label: capitalizeText(nome, true),
            value: String(id),
          }))}
        />
      </div>

      <ul className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-8 sm:gap-6 max-w-300 mx-auto flex-1 grow">
        {filteredProducts
          ?.filter(
            (product) => value === String(product.produto_subcategoria_id)
          )
          .map((product) => {
            return (
              <li key={product.id}>
                <ProductCard
                  imgUrl={pegarImagemDosProdutosDoSistemaDeVendas(
                    product.imagem
                  )}
                  id={product.id}
                  title={product.nome}
                  params={params as { category: string }}
                  bulletPoints={extractBulletPoints(product.caracteristicas)}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
