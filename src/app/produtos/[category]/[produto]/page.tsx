import Image from "next/image";
import * as motion from "motion/react-client";
import {
  capitalizeText,
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
export const dynamic = "force-dynamic";

export interface Product {
  id: number;
  produto_subcategoria_id: number;
  codigo: string | number;
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

export async function generateStaticParams() {
  let categories: Category[] = [];
  let subcategories: Subcategory[] = [];
  let products: Product[] = [];
  try {
    const [catRes, subRes, prodRes] = await Promise.all([
      api.get<Category[]>("/categories", { timeout: 8000 }),
      api.get<Subcategory[]>(`/subcategories`, { timeout: 8000 }),
      api.get<Product[]>(`/products/filter?is_visivel=1`, { timeout: 8000 }),
    ]);
    categories = catRes.data ?? [];
    subcategories = subRes.data ?? [];
    products = prodRes.data ?? [];
  } catch {
    return [];
  }
  const params = [];
  for (const category of categories) {
    for (const subcategory of subcategories) {
      for (const product of products) {
        if (
          subcategory.produto_categoria_id === category.id &&
          product.produto_subcategoria_id === subcategory.id
        ) {
          params.push({
            category: gerarUrlAmigavel(category.slug),
            produto: product.id.toString(),
          });
        }
      }
    }
  }
  return params;
}

async function getProduct(id: string) {
  try {
    const { data: product } = await api.get<Product>(`/products/${id}`, {
      timeout: 8000,
    });
    return product ?? null;
  } catch {
    return null;
  }
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
  const hasFeatures =
    product.caracteristicas && product.caracteristicas.trim() !== "";
  const hasShipping = product.tipo_frete && product.tipo_frete.trim() !== "";
  const hasDescription = product.descricao && product.descricao.trim() !== "";
  const hasVideo = product.video && product.video.trim() !== "";
  function getYouTubeId(url: string) {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
    );
    return match ? match[1] : null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Header */}
        <section className="bg-white shadow">
          <div className="container mx-auto">
            <div className="max-w-7xl pl-8 py-6 flex items-center justify-between">
              <h1
                title={product.nome}
                className="text-2xl font-bold text-gray-800 max-w-2xl whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {product.nome}
              </h1>
              <span className="text-sm text-gray-500">
                Cód: {product.codigo}
              </span>
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
        <main className="container max-w-4xl mx-auto py-12 px-4 flex flex-col gap-8">
          {/* First Row: Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Image */}
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
              <Image
                src={
                  pegarImagemDosProdutosDoSistemaDeVendas(product.imagem) ||
                  "/placeholder-product.jpg"
                }
                width={350}
                height={350}
                alt={product.nome}
                className="object-contain max-w-[220px] sm:max-w-[260px] md:max-w-[300px] w-full h-auto mx-auto"
              />
              <span className="block text-xs text-gray-400 mt-3 text-center">
                Imagem meramente ilustrativa
              </span>
            </div>
            {/* Price and Description stacked */}
            <div className="flex flex-col gap-6 justify-start w-full">
              <div className="flex flex-col items-center md:items-start justify-center w-full">
                <span className="block text-base text-gray-700 font-medium mb-1">
                  A partir de
                </span>
                <span className="text-3xl font-bold text-amber-700">
                  R${" "}
                  {Number(product.valor_por).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              {/* Description (rich HTML) */}
              {hasDescription && (
                <div className="px-2 sm:px-4 py-4 bg-white/80 rounded-xl shadow-sm border border-amber-50 flex flex-col justify-center">
                  <h3 className="font-semibold text-gray-700 mb-4 text-base">
                    Descrição
                  </h3>
                  <div
                    className="prose prose-slate max-w-none text-base"
                    dangerouslySetInnerHTML={{ __html: product.descricao }}
                  />
                </div>
              )}
            </div>
          </div>
          {/* Product Details */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Video */}
            {hasVideo && getYouTubeId(product.video) && (
              <div className="w-full aspect-video max-w-xl rounded-lg overflow-hidden border border-gray-200 shadow mb-8">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(
                    product.video
                  )}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full min-h-[200px]"
                />
              </div>
            )}
            {/* Features (rich HTML) */}
            {hasFeatures && (
              <div className="px-2 sm:px-4 py-4 bg-white/80 rounded-xl shadow-sm border border-amber-50">
                <h2 className="text-lg font-semibold text-gray-700 mb-6">
                  Características
                </h2>
                <div
                  className="space-y-2 [&>div]:bg-slate-50 [&>div]:border [&>div]:border-slate-200 [&>div]:rounded-lg [&>div]:px-4 [&>div]:py-2 [&>div]:mb-2 [&>div]:text-slate-700 [&>div]:font-medium [&>div]:text-base [&>div]:leading-relaxed [&>p]:text-slate-500 [&>p]:text-base [&>p]:my-2 [&>p]:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.caracteristicas }}
                />
              </div>
            )}
            {/* Shipping */}
            {hasShipping && (
              <div className="mb-2">
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded mb-2">
                  Frete:{" "}
                  {product.tipo_frete === "transportadora"
                    ? "Transportadora"
                    : product.tipo_frete}
                </span>
              </div>
            )}
            {/* Action Button */}
            <motion.button className="bg-primary text-white w-full md:w-auto px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition mt-2">
              <Link
                href={`https://api.whatsapp.com/send/?phone=558000901234&text=Ol%C3%A1%2C+gostaria+de+saber+mais+detalhes+sobre+o+produto+${product.nome}.&type=phone_number&app_absent=0`}
                target="_blank"
                className="block w-full h-full"
              >
                Solicitar Orçamento
              </Link>
            </motion.button>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
