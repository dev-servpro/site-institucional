import { api } from "@/lib/axios";
import Header from "./header";
import { Category } from "@/app/produtos/page";
import { Subcategory } from "@/app/produtos/[category]/page";
import { Product } from "@/app/produtos/[category]/[produto]/page";

export default async function HeaderWrapper() {
  const [{ data: categories }, { data: subcategories }, { data: products }] =
    await Promise.all([
      api.get<Category[]>("/categories"),
      api.get<Subcategory[]>("/subcategories"),
      api.get<Product[]>("/products/filter?is_visivel=1"),
    ]);
  return (
    <Header
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
      subcategories={subcategories}
      products={products}
    />
  );
}
