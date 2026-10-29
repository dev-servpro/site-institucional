import { CarouselItem } from "../../../components/ui/carousel";
import Image from "next/image";
import Tem from "../../../../../public/images/banner-3/banners bg site(7).png";
import { ArrowRight, Dot } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function HeroCarouselCercaEletrica() {
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

      <div className="mx-auto container relative z-10 text-white">
        <div className="mt-[25%] ml-20 sm:mt-[15%] sm:ml-10 xs:mt-[10%] xs:ml-5">
          <h1 className="text-5xl font-bold sm:text-4xl xs:text-3xl">
            Segurança com <br /> Tecnologia Ativa{" "}
          </h1>

          <ul className="text-xl space-y-2 my-4 font-medium sm:text-lg xs:text-base">
            <li className="items-center flex">
              <span className="text-bold">
                <Dot />
              </span>
              <span>
                Inibe invasores com aviso sonoro <br className="hidden sm:block" /> e impacto controlado
              </span>
            </li>

            <li className="items-center flex">
              <span className="text-bold">
                <Dot />
              </span>
              <span>
                Ideal para muros e cercas de <br className="hidden sm:block" /> proteção perimetral
              </span>
            </li>
          </ul>

          <Button
            variant="ghost"
            className="rounded-full py-8 mt-4 bg-white shadow-lg sm:py-6 xs:py-4"
            asChild
          >
            <Link href="#planos">
              <span className="flex items-center">
                <div className="bg-yellow-300 rounded-full p-3 mr-3 flex items-center justify-center transition-all sm:p-2 xs:p-1">
                  <ArrowRight className="h-6 w-6 text-orange-500 sm:h-5 sm:w-5 xs:h-4 xs:w-4" />
                </div>

                <span className="text-xl font-bold text-primary sm:text-lg xs:text-base">
                  Contrate agora sua cerca com manutenção
                </span>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </CarouselItem>
  );
}
