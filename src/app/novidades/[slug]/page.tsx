import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FallbackImage from "@/app/components/FallbackImage";
import { getPostBySlugMock, getStaticParamsFromMock } from "@/data/novidades-mock";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params = await getStaticParamsFromMock();
  return params;
}

export default async function Page({ params: promiseParams }: PageProps) {
  const params = await promiseParams;
  const post = await getPostBySlugMock(params.slug);
  if (!post) return notFound();

  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-3">
              Novidade
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="mt-6 w-20 h-1 bg-amber-700 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              {imageUrl ? (
                <FallbackImage
                  src={imageUrl}
                  fallbackSrc="/images/Banner-site-2048x1024-Intermax.webp"
                  alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                  width={700}
                  height={500}
                  className="max-w-full lg:max-w-lg h-auto rounded-3xl border border-amber-100 shadow-xl"
                  style={{ objectFit: "cover", background: "#f3f4f6" }}
                />
              ) : (
                <Image
                  src="/images/Banner-site-2048x1024-Intermax.webp"
                  alt="Imagem de destaque"
                  width={700}
                  height={500}
                  className="max-w-full lg:max-w-lg h-auto rounded-3xl border border-amber-100 shadow-xl"
                  style={{ objectFit: "cover", background: "#f3f4f6" }}
                />
              )}
            </div>
            
            <div className="post-prose order-1 lg:order-2">
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              />
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/novidades"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold text-lg transition-colors duration-200"
            >
              ← Voltar para novidades
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
