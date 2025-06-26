"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import PlanosCard from "./planos-card";
import { Button } from "../../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardPlanoTem from "./card-plano-tem";
import CardPlanoProtege from "./card-plano-protege";
import CardPlanoLoc from "./card-plano-loc";
import { usePlano } from "@/app/context/plano.context";
import {
  Categories,
  Product,
  getProductsMapByPlano,
  Plano,
  productsCategories,
} from "@/data/produtos";

export default function PlanosSelector() {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedPlano, linha, setLinha } = usePlano();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const productsMap = useMemo(() => {
    if (!selectedPlano) {
      return new Map<Categories, Product[]>();
    }
    return getProductsMapByPlano(selectedPlano as Plano);
  }, [selectedPlano]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCanScrollNext(api?.canScrollNext());
      setCanScrollPrev(api?.canScrollPrev());
    });
    api.on("slidesInView", () => {
      setCanScrollNext(api?.canScrollNext());
      setCanScrollPrev(api?.canScrollPrev());
    });
  }, [api, linha]);

  const handleTabChange = (value: string) => {
    api?.reInit();
    setLinha(value);

    // Get the cards container element
    if (window.scrollY < 2000) {
      window.scrollTo({
        top: 2000,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="my-12 lg:mt-36 lg:mb-8 relative"
      aria-label="Area de seleção de planos, com diversas ofertas"
      id="planos"
    >
      <h2 className="text-primary-darker text-center text-5xl font-bold">
        Nossos Planos
      </h2>
      <div className="container mx-auto py-8">
        <div className="hidden lg:grid lg:gap-x-8 w-full grid-cols-3 mb-8 max-w-7xl mx-auto justify-items-center">
          <CardPlanoTem />
          <CardPlanoLoc />
          <CardPlanoProtege />
        </div>

        <div className="lg:hidden w-full mb-8">
          <Carousel className="relative">
            <CarouselContent className="pl-8 py-4">
              <CarouselItem className="pl-2 basis-[90%] sm:basis-[60%] md:basis-1/2 lg:1/3 first-of-type:ml-auto last-of-type:mr-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <CardPlanoTem />
                </motion.div>
              </CarouselItem>
              <CarouselItem className="pl-2 basis-[90%] sm:basis-[60%] md:basis-1/2 lg:1/3 first-of-type:ml-auto last-of-type:mr-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <CardPlanoLoc />
                </motion.div>
              </CarouselItem>
              <CarouselItem className="pl-2 basis-[90%] sm:basis-[60%] md:basis-1/2 lg:1/3 first-of-type:ml-auto last-of-type:mr-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <CardPlanoProtege />
                </motion.div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div id="bottom-selector"></div>

        <AnimatePresence>
          {selectedPlano && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center mt-24 mb-8 lg:text-lg"
              id="planos-selector-description"
            >
              Esses são os serviços disponíveis para o plano{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-primary-darker font-semibold"
              >
                {selectedPlano}
              </motion.span>
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedPlano && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Tabs
                style={{
                  scrollbarWidth: "none",
                }}
                onValueChange={handleTabChange}
                key={selectedPlano}
                value={linha}
              >
                <div
                  style={{
                    scrollbarWidth: "none",
                  }}
                  className="max-w-full overflow-auto snap-x scroll-smooth mb-6 mx-auto flex flex-wrap lg:justify-center"
                >
                  <TabsList>
                    <AnimatePresence>
                      {productsCategories.map(({ value, label }) => {
                        const categorie = Array.from(productsMap.keys()).find(
                          (categorie) => categorie === value
                        );
                        if (!categorie) {
                          return;
                        }
                        return (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            exit={{ opacity: 0, y: 5 }}
                            key={value}
                          >
                            <TabsTrigger
                              className="snap-center !text-base"
                              value={value}
                            >
                              {label}
                            </TabsTrigger>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </TabsList>
                </div>

                {Array.from(productsMap.keys()).map((value) => {
                  const products = productsMap.get(value);
                  if (!products) return null;
                  return (
                    <TabsContent
                      className="max-w-full overflow-hidden !mx-auto"
                      key={value}
                      value={value}
                    >
                      <Carousel setApi={setApi} className="relative">
                        <CarouselContent
                          className="py-2 w-full"
                          data-cards-container
                        >
                          <AnimatePresence>
                            {products.map((product) => {
                              return (
                                <CarouselItem
                                  className="pl-2 basis-[90%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3 first-of-type:ml-auto last-of-type:mr-auto"
                                  key={product.name}
                                >
                                  <PlanosCard product={product} />
                                </CarouselItem>
                              );
                            })}
                          </AnimatePresence>
                        </CarouselContent>
                      </Carousel>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </motion.div>
          )}
        </AnimatePresence>

        {linha && (
          <section className="flex gap-x-2 my-8 w-full justify-center">
            <Button
              className="w-12 h-12 [&_svg]:w-7 [&_svg]:h-7"
              disabled={!canScrollPrev}
              onClick={() => {
                if (api?.canScrollPrev()) {
                  api.scrollPrev();
                }
              }}
            >
              <ChevronLeft />
              <span className="sr-only">Ir para o slide anterior</span>
            </Button>
            <Button
              className="w-12 h-12 [&_svg]:w-7 [&_svg]:h-7 font-bold"
              disabled={!canScrollNext}
              onClick={() => {
                if (api?.canScrollNext()) {
                  api.scrollNext();
                }
              }}
            >
              <ChevronRight />
              <span className="sr-only">Ir para o slide seguinte</span>
            </Button>
          </section>
        )}
      </div>
    </section>
  );
}
