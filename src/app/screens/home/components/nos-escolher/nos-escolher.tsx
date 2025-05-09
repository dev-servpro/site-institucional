import {
  Cog,
  Cpu,
  Handshake,
  Star,
  Users,
  Building,
  Clock,
} from "lucide-react";
import Slide1 from "../../../../../../public/images/0DB21C38-8B4C-412B-9898-83ADE19D3629.webp";
import Slide2 from "../../../../../../public/images/7E0D4C5A-8A9E-4F37-9CA5-C4AC13E58480.webp";
import Slide3 from "../../../../../../public/images/SERVPRO-FILIAL-TERESINA-2.webp";
import Slide4 from "../../../../../../public/images/Catalogo-SERVPRO-2023-01-1024x1024.webp";
import { Separator } from "@/components/ui/separator";
import { AutoplayCarousel } from "./carousel";

const slides = [Slide1, Slide2, Slide3, Slide4];

const bulletPoints = [
  {
    title: "Nossa paixão pela qualidade",
    description:
      "Na SERVPRO, a excelência é a nossa missão. Nossos produtos de alta qualidade em esquadrias de alumínio são criados com precisão e durabilidade em mente. Cada detalhe é cuidadosamente elaborado para garantir que nossos clientes tenham acesso a produtos de confiança que resistem ao teste do tempo.",
    icon: Star,
  },
  {
    title: "Inovação Sempre à Frente",
    description:
      "Estamos constantemente investindo em pesquisa e desenvolvimento para trazer as mais recentes inovações em segurança eletrônica. Nossos sistemas de segurança eletrônica de ponta não apenas protegem o seu patrimônio, mas também proporcionam tranquilidade inigualável.",
    icon: Cpu,
  },
  {
    title: "Assistência Técnica de Confiança:",
    description:
      "A SERVPRO não apenas fornece produtos de alta qualidade, mas também uma assistência técnica de primeira linha. Nossa equipe experiente está sempre pronta para ajudá-lo a manter seu sistema de segurança funcionando perfeitamente e suas esquadrias de alumínio em condições ideais.",
    icon: Cog,
  },
  {
    title: "Clientes Satisfeitos em Primeiro Lugar",
    description:
      "Na SERVPRO, a satisfação do cliente é nossa prioridade absoluta. Entendemos que cada cliente é único, e é por isso que personalizamos nossas soluções de segurança para atender às suas necessidades específicas. Seja você um proprietário de negócios que busca proteger seus ativos ou um cliente que procura produtos de qualidade incomparável, estamos aqui para servir você.",
    icon: Handshake,
  },
];

const statistics = [
  {
    icon: Users,
    value: "2500",
    label: "Clientes satisfeitos",
  },
  {
    icon: Clock,
    value: "18",
    label: "Anos de experiencia",
  },
  {
    icon: Building,
    value: "150",
    label: "Atendimentos por dia",
  },
  {
    icon: Users,
    value: "100",
    label: "Colaboradores",
  },
];

export default function NosEscolherHome() {
  return (
    <section id="sobre-nos" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          <div className="order-2 lg:order-1 flex flex-col">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <AutoplayCarousel slides={slides} />
            </div>

            <div className="flex-1 flex items-center justify-center mt-10">
              <div className="grid grid-cols-2 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
                {statistics.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="text-center p-3 sm:p-4 md:p-6 rounded-xl bg-gradient-to-b from-amber-50/80 to-amber-50 hover:from-amber-100/80 hover:to-amber-100 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-amber-100/20"
                  >
                    <div className="bg-amber-100/50 rounded-full w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-amber-700" />
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-amber-700">
                      {value}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8 md:mb-12">
              <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-2">
                Por que nos escolher
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
                Acreditamos que <br className="hidden sm:block" />
                <span className="text-amber-700 uppercase font-bold">
                  só o trabalho constrói
                </span>
              </h2>

              <Separator className="h-1 w-16 bg-amber-700 mt-6" />
            </div>

            <ul className="space-y-6 sm:space-y-8">
              {bulletPoints.map(({ description, icon: Icon, title }) => (
                <li key={title} className="group">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-amber-100 transition-colors duration-300 shadow-sm group-hover:shadow shrink-0">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 sm:mt-3 ml-[2.75rem] sm:ml-[3.25rem] leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
