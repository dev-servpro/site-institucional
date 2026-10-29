import { CarouselItem } from "../../../components/ui/carousel";
import Image from "next/image";
import Tem from "../../../../../public/images/banner-5/banners bg site(6).png";
import Detail from "../../../../../public/images/banner-5/banners bg site(7).png";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function HeroCarouselImaxx() {
  return (
    <CarouselItem className="basis-full relative h-[calc(100svh-6rem)] w-auto">
      <div className="absolute inset-0">
        <Image
          fill
          priority
          quality={100}
          sizes="100vw"
          alt=""
          className="object-cover"
          src={Tem}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0 hidden md:block"
      >
        <Image
          fill
          priority
          quality={100}
          sizes="100vw"
          alt=""
          className="object-contain object-right rounded-lg"
          src={Detail}
        />
      </motion.div>

      <div className="mx-auto container relative z-10 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-[15%] mx-auto px-4 text-center md:mt-[6%] md:ml-24 md:px-0 md:text-left flex flex-col h-[calc(100vh-12rem)] justify-between"
        >
          <div>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="text-xl font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl"
            >
              Acesso <br /> Inteligente, <br /> Proteção <br /> Presente!
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="text-lg font-semibold my-4 mx-auto md:ml-0 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl"
            >
              Identificação facil para um <br /> controle moderno e eficaz
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="p-2 bg-primary text-white w-fit text-xs font-medium border-l-[0.5rem] border-l-border border rounded-r-full shadow-md mx-auto md:ml-20 md:px-4 md:py-2 2xl:text-xl xl:text-lg lg:text-base"
            >
              Substitua chaves e senha por um
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="p-2 mt-1 bg-primary text-white w-fit text-xs font-medium border-l-[0.5rem] border-l-border border rounded-r-full shadow-md mx-auto md:ml-20 md:px-4 md:py-2 2xl:text-xl xl:text-lg lg:text-base"
            >
              sistema inteligente de acesso.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "backOut" } },
            }}
            className="px-4 md:px-0 mb-8"
          >
            <Button
              variant="ghost"
              className="rounded-full py-4 w-full justify-center mx-auto bg-[#0016F2] hover:bg-[#0016F2] shadow-lg md:py-8 md:ml-32 md:w-auto"
              asChild
            >
              <Link href="#planos">
                <span className="flex items-center justify-center md:justify-start">
                  <div className="hidden md:flex bg-white rounded-full p-3 mr-3 items-center justify-center transition-all">
                    <ArrowRight className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-xs font-bold text-white md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl">
                    Quero segurança facial no meu prédio!
                  </span>
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
    </CarouselItem>
  );
}
