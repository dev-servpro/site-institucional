import { CarouselItem } from "../../../components/ui/carousel";
import Image from "next/image";
import Tem from "../../../../../public/images/banner-2/bg.png";
import Detail from "../../../../../public/images/banner-2/detail.png";
import { ArrowRight, Dot } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function HeroCarouselPortao() {
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
              Reforma Total do
            </motion.h1>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="text-lg font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl"
            >
              Seu Portão em <br />
              Caso de Batida <br />
            </motion.h2>

            <ul className="text-xs space-y-2 my-4 font-medium mx-auto md:ml-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm">
              {[
                "Manutenção completa com troca de tubos e perfis",
                "Reposição de estrutura metálica",
                "Troca de roldanas por desgaste",
                "Funilaria e pintura incluídas"
              ].map((text) => (
                <motion.li
                  key={text}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  className="items-center flex justify-center md:justify-start"
                >
                  <span className="text-bold">
                    <Dot className="md:w-4 md:h-4 sm:w-3 sm:h-3" />
                  </span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="mx-auto px-4 md:ml-20 md:px-0 text-sm font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base"
            >
              <p>
                Evite surpresas com batidas. <br />
                plano que garante portão novo <br /> sem dor de cabeça.
              </p>
            </motion.div>
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
              className="rounded-full py-4 w-full justify-center mx-auto bg-white shadow-lg md:py-8 md:ml-32 md:w-auto"
              asChild
            >
              <Link href="#planos">
                <span className="flex items-center justify-center md:justify-start">
                  <div className="hidden md:flex bg-yellow-300 rounded-full p-3 mr-3 items-center justify-center transition-all">
                    <ArrowRight className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-xs font-bold text-primary md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl">
                    Quero proteger meu portão com tudo incluso!
                  </span>
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </CarouselItem>
  );
}
