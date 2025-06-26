import Image from "next/image";
import { CarouselItem } from "@/app/components/ui/carousel";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

export default function HeroCarouselTerminaisFaciais() {
  return (
    <CarouselItem className="basis-full relative h-[min(600px,calc(100vh-6rem))] w-auto">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          fill
          priority
          quality={100}
          sizes="100vw"
          alt="Terminais Faciais Garen"
          className="object-cover object-center"
          src="/images/terminais-faciais-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white space-y-6 px-4 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide"
          >
            Terminais Faciais Garen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
          >
            Soluções de controle de acesso para pequenos, médios e grandes projetos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg rounded-md font-medium"
            >
              Saiba mais
            </Button>
          </motion.div>
        </div>
      </div>
    </CarouselItem>
  );
} 