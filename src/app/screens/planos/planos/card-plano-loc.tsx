import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { usePlano } from "@/app/context/plano.context";
import { useRouter } from "next/navigation";
import { LucidePackage } from "lucide-react";
import { Plano } from "@/data/produtos";



const bulletPoints = [
  "Plano de locação e suporte técnico emergencial",
  "Visitas Preventivas Periódicas",
  "Garantia de Reposição de Peças",
  "Pedido de Visitas Técnicas ilimitado",
  "Atendimento no Plantão Sábados, Domingos e Feriados",
  "Horário Estendido das 8:00 as 22:00",
  "Equipamento na garantia",
];

export default function CardPlanoLoc() {
  const { selectedPlano, setSelectedPlano, setLinha } = usePlano();
  const isSelected = selectedPlano === Plano.loc;
  const router = useRouter();

  return (
    <article id="button-loc" className="group relative md:translate-y-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F26522]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300"></div>
      <div className="bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/5 rounded-bl-full -z-10"></div>
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-[#F26522]/10 rounded-full scale-150 blur-xl group-hover:scale-175 transition-transform duration-300"></div>
          <LucidePackage className="lucide lucide-wrench text-[#F26522] relative animate-float size-12" />
        </div>

        <h3 className="text-3xl font-bold text-[#333] mb-8">LOC</h3>
        <ul className="space-y-4 mb-8">
          {bulletPoints.map((bulletPoint) => {
            return (
              <li
                key={bulletPoint}
                className="flex items-start space-x-3 group/item"
              >
                <span className="w-2 h-2 mt-2 bg-[#F26522] rounded-full group-hover/item:scale-150 transition-transform"></span>
                <span className="flex-1 text-[#333]/80">{bulletPoint}</span>
              </li>
            );
          })}
        </ul>

        <Button
          onClick={() => {
            setSelectedPlano(Plano.loc);
            setLinha("");
            const scrollPosition = window.scrollY;
            if (scrollPosition < 1700) {
              router.push("#bottom-selector", {
                scroll: true,
              });
            }
          }}
          disabled={isSelected}
          className={cn(
            "w-full h-auto !py-3 bg-[#F26522] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#F26522]/20 hover:transform hover:-translate-y-0.5 transition-all duration-300",
            isSelected &&
              "bg-[#CF8E49] hover:bg-[#CF8E49]/90 cursor-not-allowed opacity-90"
          )}
        >
          {isSelected ? "Plano selecionado" : "Quero LOC"}
        </Button>
      </div>
    </article>
  );
}
