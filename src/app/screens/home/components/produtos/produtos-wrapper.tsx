import { api } from "@/lib/axios";
import HomeProdutosIndex from "./produtos-index";
import { Category } from "@/app/produtos/page";

export default async function ProdutosHomeWrapper() {
  const { data: categories } = await api.get<Category[]>("/categories");

  return (
    <HomeProdutosIndex
      categories={categories
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
        .sort((a, b) => (a.id > b.id ? 1 : -1))}
    />
  );
}
