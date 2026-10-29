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
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  try {
    const { data: categories } = await api.get<Category[]>("/categories", { timeout: 8000 });
    return (categories ?? []).map(({ slug }) => ({ category: gerarUrlAmigavel(slug) }));
  } catch {
    return [];
  }
}

export interface Subcategory {
  id: number;
  produto_categoria_id: number;
  codigo: string | number;
  nome: string;
  slug: string;
  ordem: number;
}

export interface Product {
  id: number;
  produto_subcategoria_id: number;
  codigo: string;
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
  is_visivel: 0 | 1;
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
  let categories: Category[] = [];
  try {
    const { data } = await api.get<Category[]>("/categories", { timeout: 8000 });
    categories = data ?? [];
  } catch {
    categories = [];
  }
  const category = categories.find((category: Category) => {
    return gerarUrlAmigavel(category.slug) === gerarUrlAmigavel(categoryParam);
  });

  if (!category) {
    return <div>Houve um erro</div>;
  }

  let subcategoriesUnfiltered: Subcategory[] = [];
  let products: Product[] = [];
  try {
    const [subRes, prodRes] = await Promise.all([
      api.get<Subcategory[]>(`/subcategories`, { timeout: 8000 }),
      api.get<Product[]>(`/products/filter?is_visivel=1`, { timeout: 8000 }),
    ]);
    subcategoriesUnfiltered = subRes.data ?? [];
    products = prodRes.data ?? [];
  } catch {
    subcategoriesUnfiltered = [];
    products = [];
  }

  const subcategories = subcategoriesUnfiltered.filter(
    (subcategory: Subcategory) =>
      subcategory.produto_categoria_id === category.id
  );

  const filteredProducts = products.filter(
    (product: Product) =>
      subcategories
        .map(({ id }) => id)
        .includes(product.produto_subcategoria_id) && product.is_visivel === 1
  );

  // Only show subcategories that have at least one valid product
  const subcategoriesWithProducts = subcategories.filter((sub) =>
    filteredProducts.some((product) => product.produto_subcategoria_id === sub.id)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
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
            subcategories={subcategoriesWithProducts}
          />
        </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
