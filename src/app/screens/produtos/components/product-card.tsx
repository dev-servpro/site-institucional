import { Button } from "@/app/components/ui/button";
import { capitalizeText } from "@/lib/utils";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

const MotionButton = motion.create(Button);

export default function ProductCard({
  imgUrl,
  title,
  bulletPoints,
  id,
  params,
  cor,
}: {
  imgUrl: string;
  title: string;
  bulletPoints: string[];
  id: number | string;
  params: { category: string };
  cor?: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-amber-100 group">
      <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          quality={100}
          width={300}
          height={300}
          src={imgUrl}
          alt={title}
          className="object-contain w-full h-full p-6 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col px-5 py-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1 truncate" title={title}>{title}</h2>
        <div className="mb-1 text-xs text-gray-500">Cód: <span className="font-medium text-gray-700">{id}</span></div>
        {cor && (
          <div className="mb-1 text-xs text-gray-500">Cor: <span className="font-medium text-gray-700">{cor}</span></div>
        )}
        <ul className="mb-4 space-y-1 text-xs text-gray-700">
          {bulletPoints?.slice(0, 3).map((point) => (
            <li key={title + point} className="flex items-start gap-2">
              <span className="mt-1 w-2 h-2 bg-amber-700 rounded-full flex-shrink-0"></span>
              <span className="line-clamp-2" dangerouslySetInnerHTML={{ __html: capitalizeText(point, true) }}></span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
        <MotionButton
            className="w-full bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-amber-800 transition"
          asChild
        >
          <Link href={`/produtos/${params.category}/${id}`}>Saiba Mais</Link>
        </MotionButton>
        </div>
      </div>
    </div>
  );
}
