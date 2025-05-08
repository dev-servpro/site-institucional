import { Category } from "@/app/produtos/page";
import Link from "next/link";
import Image from "next/image";
import {
  capitalizeText,
  cn,
  gerarUrlAmigavel,
  pegarImagemDasCategoriasDoSistemaDeVendas,
} from "@/lib/utils";

export default function CardCategorie({
  categorie: { imagem, nome, slug, id },
}: {
  categorie: Category;
}) {
  return (
    <Link
      href={`/produtos/${gerarUrlAmigavel(slug)}`}
      className="flex justify-center h-full px-10 sm:px-5 transition group hover:shadow-lg hover:rounded-sm hover:scale-105 py-14 sm:py-10 sm:rounded-md bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="flex flex-col items-center max-w-[28rem] w-full h-full relative space-y-6">
        <div className="aspect-square w-full md:max-w-[12rem] mobile-max:max-w-[10rem] flex-shrink-0 relative overflow-hidden">
          <div className="w-full h-full flex-center">
            <Image
              src={
                pegarImagemDasCategoriasDoSistemaDeVendas(imagem) ||
                "/placeholder-product.jpg"
              }
              alt={nome}
              width={300}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "w-auto h-auto max-w-full max-h-full aspect-square object-contain mx-auto",
                (id === 3 || id === 8 || id === 1) && "brightness-0"
              )}
              priority={false}
            />
          </div>
        </div>

        <div className="text-center space-y-6 mobile-max:space-y-4">
          <h1 className="transition-colors text-xl group-hover:text-primary font-medium">
            {capitalizeText(nome, true)}
          </h1>
        </div>
      </div>
    </Link>
  );
}
