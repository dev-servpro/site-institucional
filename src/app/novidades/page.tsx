import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/app/components/ui/card";
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";

const getData = async () => {
  const response = await fetch("https://redeservpro.com.br/wp-json/wp/v2/posts?_embed");
  if (!response.ok) throw new Error('Failed to fetch posts');
  return await response.json();
}

export default async function Novidades() {
  let data;
  try {
    data = await getData();
  } catch (error) {
    return <div>Erro ao carregar posts.</div>;
  }

  if (!data || data.length === 0) {
    return <div>Nenhuma novidade encontrada.</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-2">
          Novidades
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
          Fique por dentro das últimas notícias
        </h1>
        <div className="mt-4 w-16 h-1 bg-amber-700 mx-auto" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((post: any) => {
          const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          return (
            <Card
              key={post.id}
              className="flex flex-col h-full border border-amber-100 bg-white/90 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 overflow-hidden group"
            >
              {imageUrl ? (
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                    fill
                    className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-400 rounded-t-2xl">
                  Sem imagem
                </div>
              )}
              <CardHeader className="flex-1 flex flex-col justify-center items-center px-4 py-6">
                <CardTitle className="text-center text-lg font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </CardTitle>
              </CardHeader>
              <CardFooter className="mt-auto px-4 pb-6">
                <Link
                  href={`/novidades/${post.slug}`}
                  className="w-full block text-center bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-amber-800 transition"
                >
                  Ler mais
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}