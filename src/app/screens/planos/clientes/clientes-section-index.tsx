import Image from "next/image";

import PagueMenos from "../../../../../public/images/pague-menos.png";
import EdsonQueiroz from "../../../../../public/images/unimed.png";
import HardRock from "../../../../../public/images/hard-rock.png";
import SaoLuiz from "../../../../../public/images/sao-luiz.png";
import Vestas from "../../../../../public/images/vestas.png";
import FortalezaAirport from "../../../../../public/images/fortaleza-airport.png";

export default function ClientesSectionIndex() {
  return (
    <section
      className="bg-accent h-full px-5 pb-12"
      aria-labelledby="clientes-section-title"
    >
      <div className="container mx-auto">
        <h3
          id="clientes-section-title"
          className="text-center pt-12 text-primary-darker text-2xl/[2.5rem] lg:text-4xl font-medium mb-4 justify-items-center"
        >
          Conheça alguns de nossos clientes
        </h3>
        <div className="grid grid-cols-2 w-full md:grid-cols-3 xl:grid-cols-6 md:gap-x-12 justify-items-center">
            <Image
              className="w-36 h-auto aspect-square rounded-lg mt-8 shadow-md "
              src={PagueMenos}
              alt=""
            />

          <Image
            className="w-36 h-auto aspect-square rounded-lg mt-8 shadow-md"
            src={EdsonQueiroz}
            alt=""
          />
          <Image
            className="w-36 h-auto aspect-square rounded-lg mt-8 shadow-md"
            src={HardRock}
            alt=""
          />

          <Image
            className="w-36 h-auto aspect-square rounded-lg mt-8 shadow-md"
            src={SaoLuiz}
            alt=""
          />
          <Image
            className="w-36 h-auto aspect-square rounded-lg mt-8 shadow-md"
            src={Vestas}
            alt=""
          />
          <Image
            className="w-36 h-auto aspect-square rounded-lg mt-8 shadow-md"
            src={FortalezaAirport}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
