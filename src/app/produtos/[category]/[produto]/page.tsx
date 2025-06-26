import Image from "next/image";
import * as motion from "motion/react-client";
import {
  capitalizeText,
  extractBulletPoints,
  gerarUrlAmigavel,
  pegarImagemDosProdutosDoSistemaDeVendas,
} from "@/lib/utils";
import { api } from "@/lib/axios";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/app/components/ui/breadcrumb";
import Link from "next/link";
import { Category } from "../../page";
import { Subcategory } from "../page";

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
  manual: string | null;
  tipo_frete: string;
  nVlPeso: number;
  sCepOrigem: string | null;
  nCdFormato: string | null;
  nVlComprimento: number;
  nVlAltura: number;
  nVlLargura: number;
  nVlDiametro: number | null;
  nVlValorDeclarado: number | null;
  valor_norte: string | null;
  valor_nordeste: string | null;
  valor_sul: string | null;
  valor_sudeste: string | null;
  valor_centrooeste: string | null;
  imagem: string;
  imagem_desc: string | null;
  video: string;
  promocao: number;
  destaque: number;
  customizavel: number;
  ativo: number;
  relacionado_1: string;
  relacionado_2: string;
  relacionado_3: string;
  relacionado_4: string;
  created_at: string;
  updated_at: string;
  is_visivel: number;
  is_compravel: number;
  is_restringivel: number;
  users_id: number;
}

let cacheCategories: Category[] | null = null;
let cacheSubcategories: Subcategory[] | null = null;
let cacheProducts: Product[] | null = null;

async function getProduct(id: string) {
  const { data: product } = await api.get<Product>(`/products/${id}`);

  return product;
}

export async function generateStaticParams() {
  if (!cacheCategories || !cacheSubcategories || !cacheProducts) {
    const [{ data: categories }, { data: subcategories }, { data: products }] =
      await Promise.all([
        api.get<Category[]>("/categories"),
        api.get<Subcategory[]>("/subcategories"),
        api.get<Product[]>("/products"),
      ]);

    cacheCategories = categories;
    cacheSubcategories = subcategories;
    cacheProducts = products;
  }

  const categoriesFiltered = cacheCategories
    .filter((category) => {
      if (
        category.id === 4 ||
        category.id === 5 ||
        category.id === 7 ||
        category.id === 10 ||
        category.id === 9 ||
        category.id === 11 ||
        category.id === 13 ||
        category.id === 18 ||
        category.id === 19
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  const categoriesWithSubcategories = categoriesFiltered.map((category) => {
    const subcategoriesFiltered = cacheSubcategories?.filter(
      (subcategory: Subcategory) =>
        subcategory.produto_categoria_id === category.id
    );
    return {
      ...category,
      subcategories: subcategoriesFiltered,
    };
  });

  const productsWithCategories = cacheProducts.map((product: Product) => {
    const subcategory = cacheSubcategories?.find(
      (subcategory: Subcategory) =>
        subcategory.id === product.produto_subcategoria_id
    );
    const category = categoriesWithSubcategories.find(
      (category) => category.id === subcategory?.produto_categoria_id
    );
    return {
      ...product,
      category: category ? category.slug : "",
    };
  });

  return productsWithCategories.map((product) => {
    return {
      category: gerarUrlAmigavel(product.category),
      produto: String(product.id),
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ produto: string; category: string }>;
}) {
  const awaitedParams = await params;

  const product = await getProduct(awaitedParams.produto);
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
      </div>
    );
  }
  const bullets = extractBulletPoints(product.caracteristicas);

  return (
    <div>
      {/* Header */}
      <section className="bg-white shadow">
        <div className="container mx-auto">
          <div className="max-w-7xl pl-8 py-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">{product.nome}</h1>
            <span className="text-sm text-gray-500">Cód: {product.codigo}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-4 sm:px-6 lg:px-8">
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
              <BreadcrumbLink href={`/produtos/${awaitedParams.category}`}>
                {capitalizeText(awaitedParams.category, true)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {capitalizeText(product.nome, true)}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto py-10 pt-2 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <motion.div
          className="flex items-center justify-center bg-white rounded-xl shadow-lg p-8"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={
              pegarImagemDosProdutosDoSistemaDeVendas(product.imagem) ||
              "/placeholder-product.jpg"
            }
            width={300}
            height={300}
            alt={product.nome}
            className="w-full max-w-xs object-contain"
          />
        </motion.div>

        {/* Product Details */}
        <motion.div
          className="flex flex-col justify-between"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Price and Installments */}
          <div>
            <div className="mb-2">
              {product.valor_de !== product.valor_por ? (
                <span className="text-gray-400 line-through text-lg mr-2">
                  R$ {Number(product.valor_de).toFixed(2)}
                </span>
              ) : null}
              <span className="text-3xl font-bold text-primary">
                R$ {Number(product.valor_por).toFixed(2)}
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              parcelamos em até {product.parcelas}x
            </div>
            {/* Features */}
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Características
            </h2>
            <ul className="mb-6 space-y-2">
              {bullets.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: capitalizeText(item, true),
                    }}
                  ></span>
                </li>
              ))}
            </ul>
            {/* Shipping */}
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded">
                Frete:{" "}
                {product.tipo_frete === "transportadora"
                  ? "Transportadora"
                  : product.tipo_frete}
              </span>
            </div>
            {/* Description */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Descrição</h3>
              <div
                className="text-gray-600 text-sm"
                dangerouslySetInnerHTML={{ __html: product.descricao }}
              />
            </div>
          </div>
          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition self-start"
          >
            Solicitar Orçamento
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
}
