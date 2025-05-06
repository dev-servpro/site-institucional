import { Cog, Cpu, Handshake, Star, Users, Building, Clock, Trophy, ShieldCheck, MapPin, Wrench, Phone } from "lucide-react";
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

const additionalStats = [
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "Suporte técnico",
  },
  {
    icon: MapPin,
    value: "4",
    label: "Filiais",
  },
  {
    icon: Wrench,
    value: "100%",
    label: "Garantia",
  },
  {
    icon: Phone,
    value: "0800",
    label: "Atendimento",
  },
];

const StatBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="stat-pattern"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 40L40 0M0 0l40 40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#stat-pattern)" />
  </svg>
);

const BackgroundPattern = () => (
  <>
    {/* Left side shapes */}
    <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] opacity-[0.03]">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-700">
        <path fill="currentColor" d="M47.7,-67.7C62.3,-58.4,75,-45.3,80.8,-29.3C86.7,-13.3,85.7,5.6,79.5,21.6C73.4,37.6,62,50.5,48.1,60.1C34.1,69.7,17.1,75.8,0,75.8C-17,75.8,-34.1,69.7,-47.6,59.6C-61.2,49.5,-71.3,35.4,-76.9,18.8C-82.5,2.2,-83.7,-16.9,-76.8,-32.2C-69.9,-47.5,-55,-58.9,-40,-66.5C-25,-74,-12.5,-77.7,2.4,-81C17.3,-84.3,34.7,-87.2,47.7,-67.7Z" transform="translate(100 100)" />
      </svg>
    </div>

    {/* Right side shapes */}
    <div className="absolute -right-96 top-1/3 w-[600px] h-[600px] opacity-[0.02]">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-700">
        <path fill="currentColor" d="M42.8,-68.9C54.9,-62.3,63.7,-49.3,69.6,-35.2C75.5,-21.1,78.5,-5.9,76.8,8.6C75.1,23.1,68.7,37,59.1,48.4C49.4,59.8,36.6,68.8,22.1,73.7C7.6,78.6,-8.6,79.4,-23.4,75.1C-38.2,70.8,-51.7,61.3,-62.8,48.8C-73.9,36.2,-82.7,20.6,-84.1,4.1C-85.4,-12.4,-79.4,-29.8,-68.6,-42.7C-57.8,-55.6,-42.3,-64,-27.9,-68.8C-13.5,-73.7,-0.2,-75,13.8,-73.5C27.8,-72,41.5,-67.7,42.8,-68.9Z" transform="translate(100 100)" />
      </svg>
    </div>

    {/* Bottom shapes */}
    <div className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] opacity-[0.025]">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-700">
        <path fill="currentColor" d="M39.5,-64.7C50.9,-56.3,59.5,-44.5,65.7,-31.3C71.9,-18.1,75.7,-3.5,74.6,11.1C73.4,25.7,67.3,40.3,57.4,51.8C47.5,63.3,33.8,71.7,19.1,74.9C4.3,78,-11.4,75.9,-25.4,70.1C-39.3,64.3,-51.4,54.9,-61.9,42.8C-72.3,30.7,-81,15.9,-81.5,0.5C-82,-14.8,-74.3,-29.3,-64.4,-40.9C-54.5,-52.5,-42.4,-61.2,-29.8,-68.6C-17.1,-76,-8.6,-82.1,2.9,-86.8C14.3,-91.6,28.1,-95,39.5,-64.7Z" transform="translate(100 100)" />
      </svg>
    </div>

    {/* Small floating circles */}
    <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-amber-700/[0.03]" />
    <div className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-amber-700/[0.02]" />
    <div className="absolute top-1/2 right-1/2 w-6 h-6 rounded-full bg-amber-700/[0.04]" />

    {/* Dotted pattern */}
    <div className="absolute inset-0 opacity-[0.02]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="dotted-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" className="text-amber-700" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
      </svg>
    </div>
  </>
);

export default function NosEscolherHome() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          <div className="order-2 lg:order-1 flex flex-col">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <AutoplayCarousel slides={slides} />
            </div>
            
            <div className="flex-1 flex items-center justify-center mt-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
                {statistics.map(({ icon: Icon, value, label }) => (
                  <div 
                    key={label} 
                    className="text-center p-3 sm:p-4 md:p-6 rounded-xl bg-gradient-to-b from-amber-50/80 to-amber-50 hover:from-amber-100/80 hover:to-amber-100 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-amber-100/20"
                  >
                    <div className="bg-amber-100/50 rounded-full w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-amber-700" />
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-amber-700">{value}</p>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{label}</p>
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
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{title}</h3>
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
