import { CarouselItem } from "../../../components/ui/carousel";
import Image from "next/image";
import Tem from "../../../../../public/images/banner-6/banners bg site(8).png";
import Detail from "../../../../../public/images/banner-6/banners bg site(9).png";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function HeroCarouselAuto() {
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
          className="object-contain rounded-lg"
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
          className="flex flex-col h-[calc(100vh-12rem)] justify-between mt-[15%] mx-auto px-4 text-center md:mt-[4%] md:ml-12 md:text-left md:px-0"
        >
          <div>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            >
              Planos de Manutenção
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="text-xl space-y-2 my-4 font-medium text-center md:text-left"
            >
              <h2 className="text-xl font-bold text-[#595959] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Solução prática e moderna
              </h2>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="text-center md:text-left"
            >
              <p className="text-[#595959] text-base font-medium mx-auto my-8 md:text-lg md:ml-4 lg:text-xl xl:text-2xl 2xl:text-3xl">
                Sua garagem automatizada <br />
                com eficiência e segurança.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="mx-auto text-center md:ml-20 md:text-left"
            >
              <p className="py-1.5 px-2 bg-[#818181] text-white w-fit text-sm font-medium border-l-[0.5rem] border-l-primary border rounded-r-full shadow-lg drop-shadow-xl mx-auto md:text-base md:py-2 md:px-3 md:ml-0 lg:text-base xl:text-lg 2xl:text-xl">
                Instalação <span className="font-bold">rápida</span>
              </p>

              <p className="py-1.5 mt-3 px-2 bg-[#818181] text-white w-fit text-sm font-medium border-l-[0.5rem] border-l-primary border rounded-r-full shadow-lg drop-shadow-xl mx-auto md:text-base md:py-2 md:px-3 md:ml-0 lg:text-base xl:text-lg 2xl:text-xl">
                Manutenção <span className="font-bold">garantida</span>
              </p>

              <p className="py-1.5 px-2 bg-[#818181] text-white w-fit text-sm font-medium border-l-[0.5rem] border-l-primary border rounded-r-full shadow-lg drop-shadow-xl mx-auto md:text-base md:py-2 md:px-3 md:ml-0 lg:text-base xl:text-lg 2xl:text-xl">
                No plano mensal.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "backOut" } },
            }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              className="rounded-full py-4 w-full justify-center mx-auto bg-primary hover:bg-primary-darker shadow-lg md:py-8 md:ml-32 md:w-auto"
              asChild
            >
              <Link href="#planos">
                <span className="flex items-center justify-center md:justify-start">
                  <div className="hidden md:flex bg-yellow-300 rounded-full p-3 mr-3 items-center justify-center transition-all">
                    <ArrowRight className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="text-xs font-bold text-white md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl">
                    Solicite agora seu plano Automático!
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
