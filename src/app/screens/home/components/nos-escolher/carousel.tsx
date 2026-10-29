"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/app/components/ui/carousel";
import { type StaticImageData } from "next/image";

interface AutoplayCarouselProps {
  slides: StaticImageData[];
}

export function AutoplayCarousel({ slides }: AutoplayCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <Carousel 
      opts={{ 
        loop: true,
        align: "start",
      }} 
      setApi={setApi}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((img) => (
          <CarouselItem key={img.src}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                className="object-cover object-center rounded-lg shadow-lg"
                quality={100}
                src={img}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
} 