import { api } from "@/lib/axios";
import { Category } from "../page";
import { capitalizeText, cn, gerarUrlAmigavel } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import FilterArea from "@/app/screens/produtos/components/filter-area";
import { Suspense } from "react";

export async function generateStaticParams() {
  const { data: categories } = await api.get<Category[]>("/categories");
  return categories.map(({ slug }) => ({ category: slug }));
}

export interface Subcategory {
  id: number;
  produto_categoria_id: number;
  nome: string;
  slug: string;
  ordem: number;
}

export interface Product {
  id: number;
  produto_subcategoria_id: number;
  nome: string;
  slug: string;
  valor_de: string;
  valor_por: string;
  valor_revenda: string;
  parcelas: number;
  caracteristicas: string;
  cor: string;
  descricao: string;
  imagem: string;
  video: string;
  destaque: number;
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export default async function CardProduto({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category: categoryParam } = await params;
  const { data: categories } = await api.get<Category[]>("/categories");
  const category = categories.find((category: Category) => {
    console.log(
      `Comparando ${gerarUrlAmigavel(category.slug)} com ${gerarUrlAmigavel(
        categoryParam
      )}`
    );
    return gerarUrlAmigavel(category.slug) === gerarUrlAmigavel(categoryParam);
  });

  if (!category) {
    return <div>Houve um erro</div>;
  }

  const { data: subcategoriesUnfiltered } = await api.get<Subcategory[]>(
    `/subcategories`
  );
  const { data: products } = await api.get<Product[]>(`/products`);

  const subcategories = subcategoriesUnfiltered.filter(
    (subcategory: Subcategory) =>
      subcategory.produto_categoria_id === category.id
  );

  const filteredProducts = products.filter((product: Product) =>
    subcategories.map(({ id }) => id).includes(product.produto_subcategoria_id)
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-2 2xl:py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/produtos">Categorias</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {capitalizeText(category.nome, true)}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="text-2xl font-bold text-center mt-4 2xl:mt-10">
        Linhas de {capitalizeText(category.nome, true)}
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Confira nossos produtos e encontre o que você precisa!
      </p>

      <div className={cn(dmSans.className, "flex pt-2 pb-8 2xl:py-8")}>
        <Suspense fallback={<div>Carregando filtros...</div>}>
          <FilterArea
            filteredProducts={filteredProducts}
            subcategories={subcategories}
          />
        </Suspense>
      </div>
      {/* Adicione o conteúdo dos produtos aqui */}
    </div>
  );
}
