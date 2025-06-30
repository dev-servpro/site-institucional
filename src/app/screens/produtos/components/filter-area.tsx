"use client";

import { Product, Subcategory } from "@/app/produtos/[category]/page";
import { useState, useMemo } from "react";
import {
  capitalizeText,
  extractBulletPoints,
  gerarUrlAmigavel,
  pegarImagemDosProdutosDoSistemaDeVendas,
} from "@/lib/utils";
import ProductCard from "./product-card";
import { useParams } from "next/navigation";

export default function FilterArea({
  subcategories,
  filteredProducts,
}: {
  subcategories: Subcategory[];
  filteredProducts: Product[];
}) {
  const params = useParams();
  const [selectedSub, setSelectedSub] = useState<string>(
    String(subcategories?.[0]?.id)
  );
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return filteredProducts
      .filter((product) => selectedSub === String(product.produto_subcategoria_id))
      .filter(
        (product) =>
          product.nome.toLowerCase().includes(search.toLowerCase()) ||
          product.descricao.toLowerCase().includes(search.toLowerCase())
      );
  }, [filteredProducts, selectedSub, search]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
        <div className="bg-white/90 rounded-2xl shadow p-6 border border-amber-100 sticky top-8">
          <h3 className="text-md font-medium mb-2 text-gray-700">Buscar Produto</h3>
          <input
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-amber-700 focus:outline-none mb-6"
          />
          <h2 className="text-lg font-semibold mb-4 text-amber-700">Subcategorias</h2>
          <ul className="space-y-2 mb-6">
            {subcategories.map((sub) => (
              <li key={sub.id}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${selectedSub === String(sub.id)
                    ? "bg-amber-700 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-amber-50"}
                  `}
                  onClick={() => setSelectedSub(String(sub.id))}
                >
                  {capitalizeText(sub.nome, true)}
                </button>
              </li>
            ))}
          </ul>
      </div>
      </aside>
      {/* Products grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">Nenhum produto encontrado.</div>
          ) : (
            filtered.map((product) => (
                <ProductCard
                key={product.id}
                imgUrl={pegarImagemDosProdutosDoSistemaDeVendas(product.imagem)}
                  id={product.id}
                  title={product.nome}
                  params={params as { category: string }}
                  bulletPoints={extractBulletPoints(product.caracteristicas)}
                cor={product.cor}
                />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
