"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner1 from "../../../../../../public/images/PPA_banner-lancamento_radar_1734609816813.webp";
import Banner2 from "../../../../../../public/images/PPA_banner-lancamento_cameras-ip_1736858547247.webp";
import Banner3 from "../../../../../../public/images/PPA_banner-lancamento_mola-aerea_1738176783484.webp";
import Banner4 from "../../../../../../public/images/PPA_banner-lancamento_dz-stark-home_1732112536169.webp";
import Link from "next/link";
import { Categories, categoriesLabelMap } from "@/data/produtos";

// Select main categories to feature with their background images
const featuredCategories = [
  { category: Categories.auto, bgImage: Banner4 },
  { category: Categories.cftv, bgImage: Banner2 },
  { category: Categories.porta_sensor, bgImage: Banner3 },
  { category: Categories.controle_acesso, bgImage: Banner1 },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 16000); // Change slide every 16 seconds

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white hidden md:flex"
        onClick={() => api?.scrollPrev()}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white hidden md:flex"
        onClick={() => api?.scrollNext()}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Carousel */}
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {featuredCategories.map(({ category, bgImage }) => {
            const categoryData = categoriesLabelMap.get(category);
            if (!categoryData) return null;

            return (
              <CarouselItem
                key={category}
                className="basis-full relative h-[min(600px,calc(100vh-6rem))]"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    alt=""
                    className="w-full object-center object-cover"
                    src={bgImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative h-full container mx-auto flex items-center justify-center">
                  <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl text-center md:text-left">
                    {/* Text Content */}
                    <div className="flex-1">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-primary text-4xl md:text-5xl font-bold"
                      >
                        {categoryData.label}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-white text-lg md:text-xl max-w-xl mx-auto md:mx-0"
                      >
                        Descubra nossa linha completa de soluções em{" "}
                        {categoryData.label.toLowerCase()}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6"
                      >
                        <Button
                          size="lg"
                          className="uppercase rounded-sm !h-12 mt-6 py-3 px-12 text-base leading-[1.25rem] text-white bg-primary font-bold hover:bg-[#ff9831] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          asChild
                        >
                          <Link href={categoryData.href}>
                            Ver produtos
                          </Link>
                        </Button>
                      </motion.div>
                    </div>

                    {/* Category Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="hidden md:block w-80 h-80 relative"
                    >
                      <Image
                        src={categoryData.image}
                        alt={categoryData.label}
                        className="object-contain"
                        fill
                        sizes="320px"
                        quality={100}
                      />
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {featuredCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
