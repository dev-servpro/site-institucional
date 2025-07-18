import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { api } from "@/lib/axios";
import CardCategorie from "../screens/produtos/components/card-categorie";
import { Product, Subcategory } from "./[category]/page";
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export interface Category {
  id: number;
  nome: string;
  imagem: string;
  slug: string;
  fixo: number;
  ordem: number;
}

export default async function Produtos() {
  const [{ data: categories }, { data: subcategories }, { data: products }] =
    await Promise.all([
      api.get<Category[]>("/categories"),
      api.get<Subcategory[]>("/subcategories"),
      api.get<Product[]>("/products/filter?is_visivel=1"),
    ]);

  // Get the set of category and subcategory IDs that appear in the products
  const productSubcategoryIds = new Set(
    products.map((p) => p.produto_subcategoria_id)
  );
  const filteredSubcategories = subcategories.filter((sub) =>
    productSubcategoryIds.has(sub.id)
  );
  const productCategoryIds = new Set(
    filteredSubcategories.map((sub) => sub.produto_categoria_id)
  );
  const filteredCategories = categories
    .filter(
      (category) =>
        productCategoryIds.has(category.id) &&
        ![4, 5, 7, 10, 9, 11, 12, 13, 16, 18, 19].includes(category.id)
    )
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Categorias</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-2xl font-bold text-center mt-10">
        Linhas de Produtos
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Confira nossas categorias de produtos e encontre o que você precisa!
      </p>

      <div className={cn(dmSans.className, "flex py-8")}>
        <div className="flex-1 grow ml-4">
          <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 sm:gap-6 max-w-300 mx-auto">
            {filteredCategories
              .filter((category) => {
                if (
                  category.id === 4 ||
                  category.id === 5 ||
                  category.id === 7 ||
                  category.id === 10 ||
                  category.id === 9 ||
                  category.id === 11 ||
                  category.id === 12 ||
                  category.id === 13 ||
                  category.id === 16 ||
                  category.id === 18 ||
                  category.id === 19
                ) {
                  return false;
                }
                return true;
              })
              ?.map((categorie) => {
                return (
                  <li key={categorie.id}>
                    <CardCategorie categorie={categorie} />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {/* Adicione o conteúdo dos produtos aqui */}
    </div>
  );
}
