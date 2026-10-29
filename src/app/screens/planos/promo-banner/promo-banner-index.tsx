import Image from "next/image";
import CampaignImage from "../../../../../public/images/intermaxx-aleatorio.png";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function PromoBannerIndex() {
  return (
    <section className="relative max-w-full h-[600px] mx-5">
      <div className="flex flex-col h-full justify-between bg-orange-600/80 rounded-lg">
        <h2 className="text-center pt-8 text-white drop-shadow-sm flex flex-col justify-between">
          <strong className="text-4xl text-white">Interfone Interativo</strong>
          <span className="px-2 text-xl font-semibold pt-4 drop-shadow-xl">
            Atenda direto no seu celular e sem o uso da Internet.
          </span>
        </h2>

        <div className="w-full px-5 flex flex-col justify-center">
          <p className="text-center text-xl font-normal text-white ">
            É mais praticidade, mais liberdade e conforto. Você atende a ligação
            pra sua residência, mesmo fora de casa.
          </p>

          <Button
            variant="outline"
            className="max-w-40 text-lg font-semibold shadow-lg h-16 w-auto my-16 mx-auto text-primary rounded-full"
            asChild
          >
            <Link href="/">Saiba mais</Link>
          </Button>
        </div>
      </div>

      <Image
        src={CampaignImage}
        alt=""
        className="object-cover object-[40%_0%] absolute rounded-lg w-full h-full saturate-100 inset-0 z-[-2]"
      />
    </section>
  );
}
