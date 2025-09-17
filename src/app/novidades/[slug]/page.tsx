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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-2">
          Novidade
        </p>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-medium"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div className="mt-4 w-16 h-1 bg-amber-700 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center md:justify-end">
          {imageUrl ? (
            <FallbackImage
              src={imageUrl}
              fallbackSrc="/images/Banner-site-2048x1024-Intermax.webp"
              alt={post.title.rendered.replace(/<[^>]+>/g, "")}
              width={600}
              height={400}
              className="max-w-full md:max-w-xs lg:max-w-sm h-auto rounded-2xl border border-amber-100 shadow-lg"
              style={{ objectFit: "contain", background: "#f3f4f6" }}
            />
          ) : (
            <Image
              src="/images/Banner-site-2048x1024-Intermax.webp"
              alt="Imagem de destaque"
              width={600}
              height={400}
              className="max-w-full md:max-w-xs lg:max-w-sm h-auto rounded-2xl border border-amber-100 shadow-lg"
              style={{ objectFit: "contain", background: "#f3f4f6" }}
            />
          )}
        </div>
        <div className="post-prose mb-8">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/novidades"
          className="inline-block text-amber-700 hover:underline font-medium"
        >
          ← Voltar para novidades
        </Link>
      </div>
    </div>
  );
}
