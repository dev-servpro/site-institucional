import Link from "next/link";
import Image from "next/image";
import { getPostsMock } from "@/data/novidades-mock";

export const dynamic = 'force-dynamic';

export default async function NovidadesIndexPage() {
  const posts = (await getPostsMock()).sort((a, b) => a.id - b.id);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-3">
              Novidades
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Últimas novidades
            </h1>
            <div className="mt-6 w-20 h-1 bg-amber-700 mx-auto" />
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "/images/Banner-site-2048x1024-Intermax.webp";
              return (
                <li key={post.slug} className="group rounded-3xl border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white hover:scale-105">
                  <Link href={`/novidades/${post.slug}`} className="block">
                    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={imageUrl}
                        alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h2
                        className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-amber-700 transition-colors duration-200"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


