import { Handshake, Microscope, MonitorCheck, UserCog } from "lucide-react";

interface Features {
  icon: typeof MonitorCheck;
  title: string;
  description: string;
}

export const features: Features[] = [
  {
    icon: MonitorCheck,
    title: "Paixão pela Qualidade",
    description:
      "Cada detalhe é cuidadosamente elaborado para garantir que nossos clientes tenham acesso a produtos de confiança que resistem ao teste do tempo.",
  },
  {
    icon: Microscope,
    title: "Inovação Sempre à Frente",
    description: "Estamos constantemente investindo em pesquisa e desenvolvimento para trazer as mais recentes inovações em segurança eletrônica.",
  },
  {
    icon: UserCog,
    title: "Assistência Técnica de Confiança",
    description: "A SERVPRO não apenas fornece produtos de alta qualidade, mas também uma assistência técnica de primeira linha",
  },
  {
    icon: Handshake,
    title: "Clientes Satisfeitos em Primeiro Lugar",
    description: "Seja você um proprietário de negócios que busca proteger seus ativos ou um cliente que procura produtos de qualidade incomparável, estamos aqui para servir você."
  }
];
