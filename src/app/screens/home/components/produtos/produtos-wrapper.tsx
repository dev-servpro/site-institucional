import { api } from "@/lib/axios";
import HomeProdutosIndex from "./produtos-index";
import { Category } from "@/app/produtos/page";
import { Product, Subcategory } from "@/app/produtos/[category]/page";
export const dynamic = 'force-dynamic';

export default async function ProdutosHomeWrapper() {
  let categories: Category[] = [];
  let subcategories: Subcategory[] = [];
  let products: Product[] = [];
  try {
    const [catRes, subRes, prodRes] = await Promise.all([
      api.get<Category[]>("/categories", { timeout: 8000 }),
      api.get<Subcategory[]>("/subcategories", { timeout: 8000 }),
      api.get<Product[]>("/products/filter?is_visivel=1", { timeout: 8000 }),
    ]);
    categories = catRes.data ?? [];
    subcategories = subRes.data ?? [];
    products = prodRes.data ?? [];
  } catch {
    categories = [];
    subcategories = [];
    products = [];
  }

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
    <HomeProdutosIndex
      categories={filteredCategories
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
