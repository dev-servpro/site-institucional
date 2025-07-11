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

  // Get the set of category and subcategory IDs that appear in the products
  const productSubcategoryIds = new Set(products.map((p) => p.produto_subcategoria_id));
  const filteredSubcategories = subcategories.filter((sub) => productSubcategoryIds.has(sub.id));
  const productCategoryIds = new Set(
    filteredSubcategories.map((sub) => sub.produto_categoria_id)
  );
  const filteredCategories = categories
    .filter((category) =>
      productCategoryIds.has(category.id) &&
      ![
        4, 5, 7, 10, 9, 11, 12, 13, 16, 18, 19,
      ].includes(category.id)
    )
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <Header
      categories={filteredCategories}
      subcategories={filteredSubcategories}
      products={products}
    />
  );
}
