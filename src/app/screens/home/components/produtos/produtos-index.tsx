"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categoriesLabelMap } from "@/data/produtos";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

export default function HomeProdutosIndex() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const slidesPerView = {
    mobile: 1,    // < 640px
    tablet: 2,    // >= 640px
    desktop: 3,   // >= 768px
    wide: 4       // >= 1024px
  };

  const totalSlidesCalculated = Math.ceil(Array.from(categoriesLabelMap.entries()).length / slidesPerView.wide);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    setTotalSlides(api.scrollSnapList().length);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    api.on("reInit", () => {
      setCurrent(api.selectedScrollSnap());
      setTotalSlides(api.scrollSnapList().length);
    });
  }, [api]);

  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <motion.div 
        className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-2">
          Soluções em segurança, gestão e controle de acesso
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
          Conheça nossa linha de produtos
        </h2>
        <div className="mt-4 w-16 h-1 bg-amber-700 mx-auto" />
      </motion.div>

      <div className="mt-10 md:mt-12 lg:mt-16 relative px-4 md:px-12 lg:px-16">
        <Carousel
          opts={{
            loop: false,
            align: "start",
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-4 md:-ml-6 py-8">
            {Array.from(categoriesLabelMap.entries()).map(
              ([category, { image, label }], index) => (
                <CarouselItem key={category} className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Link href={`/produtos/${category}`}>
                    <motion.div 
                      className="flex flex-col items-center bg-slate-100 rounded-lg justify-center select-none p-6 shadow-md hover:bg-[#FFA74A] hover:shadow-lg transition-colors duration-300 group h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.5 }}
                    >
                      <div className="relative aspect-square w-full max-w-[200px]">
                        <Image
                          className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                          src={image}
                          alt={label}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <p className="text-center mt-4 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">{label}</p>
                    </motion.div>
                  </Link>
                </CarouselItem>
              )
            )}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
          <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
        </Carousel>

        {/* Navigation Bullets */}
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                current === index 
                ? 'bg-[#FFA74A]' 
                : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
