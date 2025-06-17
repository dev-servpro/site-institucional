import { Button } from "@/components/ui/button";
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
}: {
  imgUrl: string;
  title: string;
  bulletPoints: string[];
  id: number | string;
  params: { category: string };
}) {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
      {/* Product Image */}
      <motion.div
        className="md:w-1/2 flex items-center justify-center bg-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          quality={100}
          width={300}
          height={300}
          src={imgUrl}
          alt={title}
          className="w-80 h-auto p-8"
        />
      </motion.div>

      {/* Product Details */}
      <motion.div
        className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        <ul className="mb-6 space-y-2">
          {bulletPoints?.map((point) => (
            <li key={title + point} className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span
                dangerouslySetInnerHTML={{
                  __html: capitalizeText(point, true),
                }}
              ></span>
            </li>
          ))}
        </ul>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/80 transition"
          asChild
        >
          <Link href={`/produtos/${params.category}/${id}`}>Saiba Mais</Link>
        </MotionButton>
      </motion.div>
    </div>
  );
}
