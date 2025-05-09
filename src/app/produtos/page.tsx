import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { api } from "@/lib/axios";
import CardCategorie from "../screens/produtos/components/card-categorie";
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
  const { data: categories } = await api.get<Category[]>("/categories");

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
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 sm:gap-6 max-w-300 mx-auto">
            {categories
              .filter((category) => {
                if (
                  category.id === 4 ||
                  category.id === 5 ||
                  category.id === 7 ||
                  category.id === 10 ||
                  category.id === 9
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
