"use client";

import { useState } from "react";
import { Carousel, CarouselApi, CarouselContent } from "../../../components/ui/carousel";
import HeroCarouselPorta from "./servtem-carousel-porta";
import { Button } from "../../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroCarouselPortao from "./servtem-carousel-portao";
import HeroCarouselCFTV from "./servtem-carousel-cftv";
import HeroCarouselImaxx from "./servtem-carousel-imaxx";
import HeroCarouselAuto from "./servtem-carousel-auto";

const carouselItems = [
  { id: 1, component: HeroCarouselPorta },
  { id: 2, component: HeroCarouselPortao },
  { id: 4, component: HeroCarouselCFTV },
  { id: 5, component: HeroCarouselImaxx },
  { id: 6, component: HeroCarouselAuto },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="relative">
      <Button
        size="icon"
        variant={"ghost"}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 rounded-full bg-primary hover:bg-primary-darker hover:text-white"
        onClick={() => {
          if (!api) return;
          api.scrollPrev();
        }}
      >
        <ChevronLeft className="size-4" />
      </Button>

      <Button
        size="icon"
        variant={"ghost"}
        onClick={() => {
          if (!api) return;
          api.scrollNext();
        }}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 rounded-full bg-primary  hover:bg-primary-darker hover:text-white"
      >
        <ChevronRight className="size-4" />
      </Button>

      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="relative select-none"
      >
        <CarouselContent>
          {carouselItems.map(({ id, component: Component }) => {
            return <Component key={id} />;
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
