import { ImageProps, StaticImageData } from "next/image";
import ServTem1 from "../../public/images/servtem-2.svg";
import ServTem0 from "../../public/images/servtem-1.svg";
import ServTem2 from "../../public/images/servtem-3.svg";
import ServTem3 from "../../public/images/servtem-4.svg";
import ServTem4 from "../../public/images/servtem-5.svg";
import ServTem5 from "../../public/images/servtem-6.svg";
import ServTem6 from "../../public/images/servtem-7.svg";
import ServTem7 from "../../public/images/servtem-8.svg";
import ServTem8 from "../../public/images/servtem-9.svg";
import ServTem9 from "../../public/images/servtem-10.svg";
import ServTem10 from "../../public/images/servtem-12.svg";
import ServTem11 from "../../public/images/servtem-11.svg";

import ServLoc1 from "../../public/images/servloc-2.png";
import ServLoc2 from "../../public/images/servloc-3.png";
import ServLoc3 from "../../public/images/servloc-4.png";
import ServLoc4 from "../../public/images/servloc-5.png";
import ServLoc5 from "../../public/images/servloc-6.png";
import ServLoc6 from "../../public/images/servloc-7.png";
import ServLoc7 from "../../public/images/servloc-8.png";
import ServLoc8 from "../../public/images/servloc-9.png";
import ServLoc9 from "../../public/images/servloc-10.png";
import ServLoc10 from "../../public/images/servloc-11.png";
import ServLoc11 from "../../public/images/servloc-12.png";
import ServLoc12 from "../../public/images/servloc-13.png";

import ServProtege1 from "../../public/images/servprot-2.png";
import ServProtege2 from "../../public/images/servprot-3.png";
import ServProtege3 from "../../public/images/servprot-5.png";
import ServProtege4 from "../../public/images/servprot-4.png";
import ServProtege5 from "../../public/images/servprot-6.png";
import ServProtege6 from "../../public/images/servprot-7.png";
import ServProtege7 from "../../public/images/servprot-8.png";
import ServProtege8 from "../../public/images/servprot-9.png";
import ServProtege9 from "../../public/images/servprot-10.png";
import ServProtegeOg from "../../public/images/serv-prot.png";

import MotorDePortao from "../../public/images/PPA_DZ_Brutalle30T_2022_03_1681726260935.webp";
import CancelAutomatica from "../../public/images/PPA_Cancela_BarrierBRC_Jetflex_2022_01_1682603612330.webp";
import PortaSensor from "../../public/images/PPA_Fechaduras_Traver_01_2023_01_500_x_500_1680632696554.webp";
import PortaEnrolar from "../../public/images/PPA_PortasDeEnrrolar_-BR1_092023_01_1695906107124.webp";
import CercaEletrica from "../../public/images/Eletrificador-Compact-Power-CR-Economy-04_2023_1685134016570.webp";
import CFTV from "../../public/images/Camera-Bullet-IP-5MP-36mm-Jetcolor_1681926025559.webp";
import ControleAcesso from "../../public/images/PPA_ControladoraFacial_SmartFace_12_2022_02_1684528074928.webp";
import InterfoneCond from "../../public/images/PPA_Interfone_Buzz_2022_01_1680198476639.webp";
import AntenaColetiva from "../../public/images/Gp-05-Alarmes-Monitorados-PPA-JC-DSC-Qolsys_2_1721161642928.webp";

export enum Categories {
  auto = "auto",
  cancela = "cancela",
  porta_sensor = "porta_sensor",
  porta_enrolar = "porta_enrolar",
  cerca_eletrica = "cerca_eletrica",
  cftv = "cftv",
  controle_acesso = "controle_acesso",
  interfone_cond = "interfone_cond",
  antena_coletiva = "antena_coletiva",
  protege_portao = "protege_portao",
}

export const categoriesLabelMap: Map<
  Categories,
  { label: string; image: StaticImageData; href: string }
> = new Map([
  [
    Categories.auto,
    {
      label: "Porta de Enrolar",
      image: MotorDePortao,
      href: "produtos/seguranca-de-acesso?subcategory=automaticos-deslizantes",
    },
  ],
  [
    Categories.cancela,
    {
      label: "Cancela automática",
      image: CancelAutomatica,
      href: "produtos/seguranca-de-acesso?subcategory=cancelas",
    },
  ],
  [
    Categories.porta_sensor,
    {
      label: "Porta com sensor automático",
      image: PortaSensor,
      href: "produtos/seguranca-de-acesso?subcategory=porta-social-automatica",
    },
  ],
  [
    Categories.porta_enrolar,
    {
      label: "Porta de enrolar automática",
      image: PortaEnrolar,
      href: "produtos/seguranca-de-acesso?subcategory=portas-de-enrolar",
    },
  ],
  [
    Categories.cerca_eletrica,
    {
      label: "Cerca elétrica",
      image: CercaEletrica,
      href: "produtos/seguranca-de-acesso?subcategory=eletrificadores",
    },
  ],
  [
    Categories.controle_acesso,
    {
      label: "Controle de acesso",
      image: ControleAcesso,
      href: "produtos/seguranca-de-acesso?subcategory=controle-de-acesso",
    },
  ],
  [
    Categories.cftv,
    {
      label: "Sistema de CFTV",
      image: CFTV,
      href: "produtos/seguranca-de-acesso?subcategory=controle-de-acesso",
    },
  ],
  [
    Categories.interfone_cond,
    {
      label: "Interfone condominial",
      image: InterfoneCond,
      href: "produtos/seguranca-de-acesso?subcategory=interfones-condominiais",
    },
  ],
  [
    Categories.antena_coletiva,
    {
      label: "Antena coletiva",
      image: AntenaColetiva,
      href: "produtos/antena-coletiva",
    },
  ],
]);

export enum Plano {
  tem = "ServTEM",
  loc = "ServLOC",
  prot = "ServPROTEGE",
}

export function getPlanosByEquipamento(equip: Equipamento): Plano[] {
  switch (equip) {
    case Equipamento.tem:
      return [Plano.prot, Plano.tem];
    case Equipamento.loc:
      return [Plano.loc];
    default:
      throw new Error("Plano não existe!");
  }
}

export type PlanoURI = "tem" | "loc" | "prot";

export function getURIPlanoByPlano(plano: Plano): PlanoURI {
  switch (plano) {
    case Plano.tem:
      return "tem";
    case Plano.loc:
      return "loc";
    case Plano.prot:
      return "prot";
    default:
      throw new Error(
        "Você informou um plano que não existe ao getPlanoKey" +
          ", o plano informado foi " +
          plano
      );
  }
}

export function getPlanoByURI(plano: PlanoURI) {
  switch (plano) {
    case "tem":
      return Plano.tem;
    case "loc":
      return Plano.loc;
    case "prot":
      return Plano.prot;
    default:
      throw new Error(
        "Você informou um plano que não existe ao getPlanoKey" +
          ", o plano informado foi " +
          plano
      );
  }
}

export function getCategoriesByPlano(plano: Plano) {
  switch (plano) {
    case Plano.tem:
      return [
        { value: Categories.auto, label: "Motor de portão" },
        { value: Categories.cancela, label: "Cancela automática" },
        {
          value: Categories.porta_sensor,
          label: "Porta com sensor automática",
        },
        { value: Categories.cerca_eletrica, label: "Cerca elétrica" },
        { value: Categories.cftv, label: "CFTV" },
      ];
    case Plano.loc:
      return [
        { value: Categories.auto, label: "Motor de portão" },
        { value: Categories.cancela, label: "Cancela automática" },
        {
          value: Categories.porta_sensor,
          label: "Porta com sensor automática",
        },
        { value: Categories.cerca_eletrica, label: "Cerca elétrica" },
        { value: Categories.controle_acesso, label: "Controle de acesso" },
        { value: Categories.cftv, label: "CFTV" },
      ];
    case Plano.prot:
      return [
        {
          value: Categories.protege_portao,
          label: "Protege Portão",
        },
      ];
  }
}

export interface Product {
  name: string;
  cod: string;
  price: number;
  plano: Plano;
  category: Categories;
  image: ImageProps["src"];
  promotionalPrice?: number;
  promotionalDuration?: number;
  features: string[];
  acompanha?: string[];
  detalhe?: string[];
  observacao?: string;
  vlInstalacao?: string;
  onlineContact: string;
  whatsappContact: string;
}

export const productsCategories = [
  { value: Categories.auto, label: "Motor de portão" },
  { value: Categories.cancela, label: "Cancela automática" },
  { value: Categories.porta_sensor, label: "Porta com sensor automática" },
  { value: Categories.porta_enrolar, label: "Porta de enrolar automática" },
  { value: Categories.cerca_eletrica, label: "Cerca elétrica" },
  { value: Categories.controle_acesso, label: "Controle de acesso" },
  { value: Categories.cftv, label: "Sistema de CFTV" },
  { value: Categories.interfone_cond, label: "Interfone condominial" },
  { value: Categories.antena_coletiva, label: "Antena coletiva" },
  { value: Categories.protege_portao, label: "Protege Portão" },
];

export enum Equipamento {
  tem = "tem",
  loc = "loc",
}

export const autoProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [
    {
      name: "Motor Residencial",
      cod: "1211",
      price: 59.9,
      plano: Plano.tem,
      features: [
        "Plano de serviço para pessoa física e residencial",
        "Para automáticos linha leve",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      image: ServTem1,
      category: Categories.auto,
    },
    {
      name: "Motor Linha Industrial",
      cod: "1212",
      price: 69.9,
      plano: Plano.tem,
      features: [
        "Plano de serviço para pessoa física e jurídica",
        "Para automáticos industriais",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      image: ServTem0,
      category: Categories.auto,
    },
    {
      name: "Motor Empresas",
      cod: "1217",
      price: 79.9,
      features: [
        "Plano de serviço para pessoa jurídica",
        "Para automáticos linha leve",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem2,
      category: Categories.auto,
    },
    {
      name: "Motor Condominial",
      cod: "1218",
      price: 139.0,
      features: [
        "Plano de serviço para pessoa jurídica",
        "Para automáticos linha industrial",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem3,
      category: Categories.auto,
    },
  ],
  [Plano.loc]: [
    {
      name: "Motor Residencial DZ Rio Jetflex",
      cod: "1201",
      price: 79.9,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Garantia de reposição das roldanas e guias do portão deslizante",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      observacao: `Serviço de alvenaria, pintura,
        acabamentos, elétrica e tubulação
        por conta do cliente.`,
      vlInstalacao: `R$ 150,00
        (Valor cobrado apenas 1x para
        instalação e configuração do
        equipamento no local.)`,
      acompanha: [
        "Automático Dz Rio JetFlex PPA",
        "3 metros de cremalheira",
        "2 controles",
        "1 Kit de fixação",
        "1 Manual de instruções",
      ],
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc1,
      category: Categories.auto,
    },
    {
      name: "Motor Condominial - DZ Condominium JetFlex",
      cod: "1203",
      price: 159.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      acompanha: [
        "Automático Dz Condominium JetFlex PPA",
        "3 metros de cremalheira",
        "2 controles",
      ],
      observacao: `Serviço de alvenaria, pintura,
        acabamentos, elétrica e tubulação
        por conta do cliente.`,
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc2,
      category: Categories.auto,
    },
    {
      name: "Motor Empresas - DZ 1300 JetFlex",
      cod: "1221",
      price: 189.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      acompanha: [
        "Automático Dz 1300 JetFlex PPA",
        "3 metros de cremalheira",
        "2 controles",
      ],
      observacao: `Serviço de alvenaria, pintura,
        acabamentos, elétrica e tubulação
        por conta do cliente.`,
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc3,
      category: Categories.auto,
    },
    {
      name: "Motor Empresas - DZ 1500 Jetflex",
      cod: "1204",
      price: 239.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      acompanha: [
        "Automático Dz 1500 JetFlex PPA",
        "3 metros de cremalheira",
        "2 controles",
        "1 Kit de fixação",
        "1 Manual de instruções",
      ],
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc4,
      category: Categories.auto,
    },
    {
      name: "Motor Linha Industrial - DZ Brutalle 3.0T JetFlex",
      cod: "1205",
      price: 459.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      acompanha: [
        "Automático Dz Brutalle 3.0T JetFlex PPA",
        "3 metros de cremalheira",
        "2 controles",
      ],
      observacao: "Serviço de alvenaria e tubulação por conta do cliente.",
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc5,
      category: Categories.auto,
    },
    {
      name: "Motor Basculante Residencial 1,5m JetFlex",
      cod: "1206",
      price: 99.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      acompanha: [
        "Automático Dz Brutalle 3.0T JetFlex PPA",
        "3 metros de cremalheira",
        "2 controles",
      ],
      observacao: "Serviço de alvenaria e tubulação por conta do cliente.",
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc6,
      category: Categories.auto,
    },
    {
      name: "Motor Pivotante JetFlex",
      cod: "1210",
      price: 315.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 17:00",
      ],
      acompanha: [
        "Automático Pivo Cond JetFlex PPA",
        "Acionamento",
        "2 controles",
      ],
      observacao: "Serviço de alvenaria e tubulação por conta do cliente.",
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc7,
      category: Categories.auto,
    },
    {
      name: "Motor Residencial DZ Hub 450 Analógico",
      cod: "1207",
      price: 39.9,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Garantia de reposição das roldanas e guias do portão deslizante",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      acompanha: [
        "1 Automático Dz Hub 450 KL",
        "3 Metros de cremalheira linha leve",
        "2 Controles",
        "1 Kit de fixação",
        "1 Manual de instruções",
      ],
      observacao:
        "Serviço de alvenaria, pintura, acabamentos, elétrica e tubulação por conta do cliente.",
      vlInstalacao:
        "R$ 150,00 (Valor cobrado apenas 1x para instalação e configuração do equipamento no local.)",
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc8,
      category: Categories.auto,
    },
    {
      name: "Motor Basculante condominial 3,0m JetFlex",
      cod: "1222",
      price: 119.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 22:00",
      ],
      acompanha: [
        "Automático Bv Condominium JetFlex PPA",
        "Acionamento 1,50",
        "2 Controles",
      ],
      observacao:
        "Serviço de alvenaria, pintura, acabamentos, elétrica e tubulação por conta do cliente.",
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc9,
      category: Categories.auto,
    },
  ],
  [Plano.prot]: [],
};

export const protegePortaoProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [],
  [Plano.loc]: [],
  [Plano.prot]: [
    {
      name: "Protege Portão",
      cod: "1226",
      price: 99.9,
      plano: Plano.prot,
      features: [
        "Reparo ou substituição do portão garagem",
        "Cobertura de sinistros em veículos nas colisões com portão",
        "Garantia de um novo portão em caso de roubo",
        "Reboque gratuito do veículo até a oficina",
        "Disponibilidade de carro reserva",
        "Zero de burocracia para abertura de chamado e solução",
        "Atendimento emergencial",
      ],
      onlineContact: "",
      whatsappContact: "",
      image: ServProtegeOg,
      category: Categories.protege_portao,
    },
  ],
};

export const cancelaProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [
    {
      name: "Cancela Automática",
      cod: "1213",
      price: 149.9,
      features: [
        "Plano de serviço para pessoa jurídica",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem4,
      category: Categories.cancela,
    },
  ],
  [Plano.loc]: [
    {
      name: "Barreira Barrier JetFlex",
      cod: "1223",
      price: 650.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas mensais",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 17:00",
      ],
      observacao:
        "Serviço de alvenaria, tubulação, elétrica, pintura e acabamentos finos são por conta do cliente.",
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc12,
      category: Categories.cancela,
    },
  ],
  [Plano.prot]: [],
};

export const sensorProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [
    {
      name: "Porta Social Vidro Automática",
      cod: "1214",
      price: 249.9,
      features: [
        "Plano de serviço para pessoa jurídica",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem5,
      category: Categories.porta_sensor,
    },
    {
      name: "Fechadura Eletroĩma",
      cod: "1219",
      price: 30.0,
      features: [
        "Plano de serviço para pessoa jurídica",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem6,
      category: Categories.porta_sensor,
    },
    {
      name: "Fechadura Elétrica",
      cod: "1220",
      price: 30.0,
      features: [
        "Plano de serviço para pessoa jurídica",
        "Visita preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 8:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem7,
      category: Categories.porta_sensor,
    },
  ],
  [Plano.loc]: [
    {
      name: "Fechadura Eletroíma",
      cod: "1208",
      price: 45.0,
      plano: Plano.loc,
      features: [
        "Garantia de reposição de peças",
        "Visitas preventivas obrigatórias em Abril, Agosto e Dezembro",
        "Pedido de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábados, domingo e feriado, horario de 8:00 e 17:00",
      ],
      acompanha: [
        "1 Fechadura Eletroíma",
        "Silenciosa",
        "Tensão 12V",
        "Compatível com controles de acesso",
        "Resistente a oxidação e a corrosão",
      ],
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc10,
      category: Categories.porta_sensor,
    },
    {
      name: "Fechadura Eletrônica Ultra 3 Pinos",
      cod: "8821",
      price: 45.0,
      plano: Plano.loc,
      features: [
        "Alarme de porta aberta",
        "Função para inter-travamento",
        "Ajuste de tempo para fechamento",
        "Ajuste de tempo para alarme",
        "Saída para interfones, controle de acesso, botoeiras e acionadores por controle remoto",
      ],
      onlineContact: "",
      whatsappContact: "",
      image: ServLoc11,
      category: Categories.porta_sensor,
    },
  ],
  [Plano.prot]: [],
};

export const enrolarProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [
    {
      name: "Motor Porta Enrolar Automática (7:00 HS | 19:00 HS)",
      cod: "500012",
      price: 169.0,
      features: [
        "Visita Mensal preventiva",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 7:00 as 19:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem8,
      category: Categories.porta_enrolar,
    },
    {
      name: "Motor Porta Enrolar Automática (7:00 HS | 22:00 HS)",
      cod: "500011",
      price: 239.0,
      features: [
        "Visita preventiva a cada 60 dias",
        "Garantida de reposição de peças",
        "Pedidos de visitas ilimitado",
        "Atendimento no PLANTÃO nos sábado, domingo e feriado, horário de 7:00 as 22:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem9,
      category: Categories.porta_enrolar,
    },
  ],
  [Plano.loc]: [],
  [Plano.prot]: [],
};

export const cercaProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [
    {
      name: "Cerca Elétrica(Manutenção)",
      cod: "72055",
      price: 120.0,
      features: [
        "Visita periódica a cada 2 meses",
        "Garantia de reposição dee peças",
        "Pedidos de visitas ilimitado",
        "Prazo para atendimento de 48 horas",
        "Horário de atendimento segunda a sexta 8:00 as 18:00 e aos sabados 08:00 as 12:00",
      ],
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem11,
      category: Categories.cerca_eletrica,
    },
  ],
  [Plano.loc]: [
    {
      name: "Cerca Elétrica",
      cod: "72054",
      price: 15.0,
      plano: Plano.loc,
      features: [
        "A implatação técnica são itens necessários para o perfeito funcionamento do sistema de cerca elétrica",
        "Todos os itens incorporados nesta implatação são de posse e aquisição do cliente",
      ],
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege1,
      category: Categories.cerca_eletrica,
    },
  ],
  [Plano.prot]: [],
};

export const cftvProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [
    {
      name: "CFTV(Manutenção)",
      cod: "08791",
      price: 120.0,
      features: [
        "Garantia de funcionamento do sistema",
        "Visita periódica a cada 2 meses",
        "Apoio técnico remoto",
        "Apoio ténico presencial",
        "Auxílio no resgate de imagens",
        "Serviço de reparos/mão de obra incluídos",
        "Solicitações de visita técnica ilimitada",
      ],
      observacao:
        "Todo o sistema atual precisara passar por uma avaliação técnica afim de certificarmos a operacioalidade do contrato.",
      onlineContact: "/",
      whatsappContact: "/",
      plano: Plano.tem,
      image: ServTem10,
      category: Categories.cftv,
    },
  ],
  [Plano.loc]: [
    {
      name: "04 Câmeras FullHD",
      cod: "1504",
      price: 189.0,
      plano: Plano.loc,
      features: [
        "Visitas preventivas mensais",
        "Pedido de visitas ilimitado",
        "SLA de até 24h",
        "Garantia Total",
        "Equipamentos sem custo",
      ],
      acompanha: [
        "4 Cãmeras FullHD 2.0MP L2.8mm",
        "1 DVR PPA XVR GP3 4 Canais",
        "1 HD CFTV de 1TB",
        "100m Cabo Coaxial",
        "1 Fonte de alimentação",
        "1 Kit BNC+P4",
        "Instalação profissional",
      ],
      observacao:
        "Contrato de 24 meses. Em casos de rescisão antecipada aplica se multa de 30% do somatório das parcelas a vencer. Aviso prévio de 90 dias. SLA de atendimento em até 24h",
      vlInstalacao:
        "R$ 500,00 em até 2x de R$ 250,00 no Cartão Crédito/Sem Juros. Valor referente a implantação técnica de cabeamentos e insumos de instalação que permanecerão no condomínio independete da permanencia contratual.",
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege2,
      category: Categories.cftv,
    },
    {
      name: "08 Câmeras FullHD",
      cod: "1505",
      price: 289.0,
      plano: Plano.loc,
      features: [
        "Visitas preventivas mensais",
        "Pedido de visitas ilimitado",
        "SLA de até 24h",
        "Garantia Total",
        "Equipamentos sem custo",
      ],
      acompanha: [
        "8 Cãmeras FullHD 2.0MP L2.8mm",
        "1 DVR PPA XVR GP3 8 Canais",
        "1 HD CFTV de 1TB",
        "200m Cabo Coaxial",
        "1 Fonte de alimentação",
        "1 Kit BNC+P4",
        "Instalação profissional",
      ],
      observacao:
        "Contrato de 24 meses. Em casos de rescisão antecipada aplica se multa de 30% do somatório das parcelas a vencer. Aviso prévio de 90 dias. SLA de atendimento em até 24h",
      vlInstalacao:
        "R$ 500,00 em até 2x de R$ 250,00 no Cartão Crédito/Sem Juros. Valor referente a implantação técnica de cabeamentos e insumos de instalação que permanecerão no condomínio independete da permanencia contratual.",
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege3,
      category: Categories.cftv,
    },
    {
      name: "16 Câmeras FullHD",
      cod: "1506",
      price: 549.0,
      plano: Plano.loc,
      features: [
        "Visitas preventivas mensais",
        "Pedido de visitas ilimitado",
        "SLA de até 24h",
        "Garantia Total",
        "Equipamentos sem custo",
      ],
      acompanha: [
        "16 Cãmeras FullHD 2.0MP L2.8mm",
        "1 DVR PPA XVR GP3 16 Canais",
        "1 HD CFTV de 2TB",
        "400m Cabo Coaxial",
        "1 Fonte de alimentação",
        "1 Kit BNC+P4",
        "Instalação profissional",
      ],
      observacao:
        "Contrato de 24 meses. Em casos de rescisão antecipada aplica se multa de 30% do somatório das parcelas a vencer. Aviso prévio de 90 dias. SLA de atendimento em até 24h",
      vlInstalacao:
        "R$ 500,00 em até 2x de R$ 250,00 no Cartão Crédito/Sem Juros. Valor referente a implantação técnica de cabeamentos e insumos de instalação que permanecerão no condomínio independete da permanencia contratual.",
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege4,
      category: Categories.cftv,
    },
  ],
  [Plano.prot]: [],
};

export const interfoneProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [],
  [Plano.loc]: [],
  [Plano.prot]: [],
};

export const antenaProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [],
  [Plano.loc]: [],
  [Plano.prot]: [],
};

export const controleAcessoProducts: Record<Plano, Product[]> = {
  [Plano.tem]: [],
  [Plano.loc]: [
    {
      name: "Controle Acesso Veicular",
      cod: "64400",
      price: 169.0,
      plano: Plano.loc,
      features: [
        "Relatórios de entrada e saída",
        "Controle de acesso a portões",
        "Garantia de reposição de peças",
        "Pedido de visitas ilimitado",
        "Visita mensal obrigatória",
        "Garantia na substituição da bateria dos controles",
        "Atendimento no PLANTÃO nos sábados, domingos e feriados, horário de 8:00 as  17:00",
      ],
      acompanha: [
        "1 Módulo Guarita HCS",
        "1 Receptor HCS",
        "2 Controles 3 teclas",
        "2 Luminárias Vermelha 14W Espiral",
        "1 Refletor Superled",
        "1 Suporte giratório",
        "1 Relé Fotoelétrico",
        "2 Liberador",
        "1 Central p/controle de acesso",
        "1 Bloqueador p/botoeira",
        "2 Fontes 12V 1A estabilizada",
      ],
      observacao: `Caso o cliente possua mais de um portão de pedestre será instalado 2 leitores sem custo.\nCaso venha a exceder a quantidade de metros especificadas, os custos referente a metraem necessária adicional ficarão a cargo do cliente.\n Será vendido separadamento o dispositivo de acesso(Chaveiro/TAG)conforme demanda do cliente.\n- Valor do Chaveiro/TAG já cadastrado em nome do usuário R$ 15,90 (Unidade).\nSerá vendido separadamento o dispositivo de acesso(Controle Veicular) conforme demanda do cliente.\n-Valor do controle veicular já cadastrado em nome do usuário R$ 45,00(Unidade).\nPara os portões de pedestre deverá ter no local uma fechadura elétrica, eletroíma oufecho eletrônico para liberação pelo leitor`,
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege5,
      category: Categories.controle_acesso,
    },
    {
      name: "Controle Acesso Pedestre/Veicular",
      cod: "101300",
      price: 197.0,
      plano: Plano.loc,
      features: [
        "Relatórios Completos de entrada e saída",
        "Controle de acesso a portões de pedestre e veicular",
        "Manutenções preventivas e corretivas",
        "Valor fixo mensal",
      ],
      acompanha: [
        "1 Módulo Guarita",
        "1 Receptor Veicular",
        "1 Receptor Pedestre",
        "2 Leitor de Chaveiro/TAG",
        "1 Luminárias Tartaruga",
        "1 Lâmpada Vermelha 14W Espiral",
        "1 Refletor LED 30W",
        "1 Suporte Relé Fotoelétrico",
        "1 Relé Fotoelétrico",
        "2 Temporizadores",
        "2 Liberadores sem fio",
        "1 Fonte 12V 2A estabilizada",
        "1 Módulo Relé p/Automação Refletor",
        "1 Caixa PVC Sobrepor 30x30cm",
        "1 Caixa PVC Sobrepor 10x10cm",
        "30m Cabo CAT5e UTP",
        "5m Cabo PP 2x1,5mm",
      ],
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege6,
      category: Categories.controle_acesso,
    },
    {
      name: "Controle Acesso Pedestre Tag",
      cod: "8822",
      price: 197.0,
      plano: Plano.loc,
      features: [
        "Relatórios Completos de entrada e saída",
        "Controle de acesso a portões de pedestre e veicular",
        "Manutenções preventivas e corretivas",
        "Valor fixo mensal",
      ],
      acompanha: [
        "1 Módulo Guarita",
        "1 Receptor para Pedestre",
        "1 Leitor de Chaveiro/TAG",
        "1 Fonte 12V 2A estabilizada",
        "1 Caixa PVC Sobrepor 30x30cm",
        "30m Cabo CAT5e UTP",
      ],
      observacao: `Caso o cliente possua mais de um portão de pedestre será instalado 2 leitores sem custo.\nCaso venha a exceder a quantidade de metros especificadas, os custos referente a metraem necessária adicional ficarão a cargo do cliente.\n Será vendido separadamento o dispositivo de acesso(Chaveiro/TAG)conforme demanda do cliente.\n- Valor do Chaveiro/TAG já cadastrado em nome do usuário R$ 15,90 (Unidade).\nPara os portões de pedestre deverá ter no local uma fechadura elétrica, eletroíma ou fecho eletrônico para liberação pelo leitor`,
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege7,
      category: Categories.controle_acesso,
    },
    {
      name: "Controle Acesso Pedestre Biométrico",
      cod: "08793",
      price: 229.0,
      plano: Plano.loc,
      features: [
        "Relatórios Completos de entrada e saída",
        "Controle de acesso a portões de pedestre e veicular",
        "Manutenções preventivas e corretivas",
        "Valor fixo mensal",
      ],
      acompanha: [
        "1 Leitora Biométrica e Chaveiro/TAG",
        "1 Fonte 12V 2A estabilizada",
        "1 Caixa PVC Sobrepor 30x30cm",
        "15m Cabo CAT5e UTP",
      ],
      observacao: `As biometrias serão
        cadastradas logo após a
        implantação sem nenhum custo. Será vendido separadamento e
        opcionalmente o dispositivo de
        acesso(Chaveiro/TAG)
        conforme demanda do cliente.
        Valor do Chaveiro/TAG já
        cadastrado em nome do usuário
        R$ 24,90 (Unidade)
        Caso o cliente necesisste de
        leitores adicionais será cobrado
        o valor de R$ 139,90
      `,
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege8,
      category: Categories.controle_acesso,
    },
    {
      name: "Controle Acesso Imaxx Facil - IDFACE",
      cod: "1525",
      price: 256.0,
      plano: Plano.loc,
      features: [
        "Display touchscreen de 7''",
        "Grau de Proteção IP65",
        "Comunicação TCP/IP",
        "Identifação de até 100.000 faces com detecção de rosto vivo",
        "Regras de acesso personalizadas por grupos e horários",
      ],
      acompanha: [
        "1 Leitora Biométrica e Chaveiro/TAG",
        "1 Fonte 12V 2A estabilizada",
        "1 Caixa PVC Sobrepor 30x30cm",
        "15m Cabo CAT5e UTP",
      ],
      observacao: `
        MANUTENÇÃO
        PREVENTIVA MENSAL
        VISANDO AUMENTAR A
        VIDA ÚTIL DOS
        EQUIPAMENTOS
        CADASTRO / EXCLUSÃO
        DE
        MORADORES/USUÁRIOS
        DO SISTEMA
        ATUALIZAÇÃO
        PERIÓDICA DO SISTEMA
        OPERACIONAL DO
        EQUIPAMENTO
        SEM LIMITE DE
        CHAMADAS MENSAIS.
        UM TELEFONE IP PARA
        ATENDIMENTPO DAS
        CHAMADAS DO LEITOR (
        PARA PESSOAS QUE
        NÃO ESTÃO
CADASTRADAS)`,
      onlineContact: "",
      whatsappContact: "",
      image: ServProtege9,
      category: Categories.controle_acesso,
    },
  ],
  [Plano.prot]: [],
};

export function getProductsMapByPlano(plano: Plano) {
  switch (plano) {
    case Plano.tem:
      return new Map<Categories, Product[]>([
        [Categories.auto, autoProducts[Plano.tem]],
        [Categories.cancela, cancelaProducts[Plano.tem]],
        [Categories.porta_sensor, sensorProducts[Plano.tem]],
        [Categories.porta_enrolar, enrolarProducts[Plano.tem]],
        [Categories.cftv, cftvProducts[Plano.tem]],
        [Categories.cerca_eletrica, cercaProducts[Plano.tem]],
      ]);
    case Plano.loc:
      return new Map<Categories, Product[]>([
        [Categories.auto, autoProducts[Plano.loc]],
        [Categories.cancela, cancelaProducts[Plano.loc]],
        [Categories.porta_sensor, sensorProducts[Plano.loc]],
        [Categories.cerca_eletrica, cercaProducts[Plano.loc]],
        [Categories.cftv, cftvProducts[Plano.loc]],
        [Categories.controle_acesso, controleAcessoProducts[Plano.loc]],
      ]);
    case Plano.prot:
      return new Map<Categories, Product[]>([
        [Categories.protege_portao, protegePortaoProducts[Plano.prot]],
      ]);
    default:
      throw new Error("Voce passou um plano que não existe");
  }
}

export function getAllProducts() {
  return [
    ...autoProducts.ServLOC,
    ...autoProducts.ServTEM,
    ...autoProducts.ServPROTEGE,
    ...cancelaProducts.ServTEM,
    ...cancelaProducts.ServLOC,
    ...cancelaProducts.ServPROTEGE,
    ...sensorProducts.ServTEM,
    ...sensorProducts.ServLOC,
    ...sensorProducts.ServPROTEGE,
    ...enrolarProducts.ServTEM,
    ...enrolarProducts.ServPROTEGE,
    ...enrolarProducts.ServLOC,
    ...cercaProducts.ServTEM,
    ...cercaProducts.ServLOC,
    ...cercaProducts.ServPROTEGE,
    ...cftvProducts.ServTEM,
    ...cftvProducts.ServLOC,
    ...cftvProducts.ServPROTEGE,
    ...controleAcessoProducts.ServTEM,
    ...controleAcessoProducts.ServLOC,
    ...controleAcessoProducts.ServPROTEGE,
    ...protegePortaoProducts.ServLOC,
    ...protegePortaoProducts.ServTEM,
    ...protegePortaoProducts.ServPROTEGE,
  ];
}

export function getProductByCod(cod: string) {
  return [
    ...autoProducts.ServLOC,
    ...autoProducts.ServTEM,
    ...autoProducts.ServPROTEGE,
    ...cancelaProducts.ServTEM,
    ...cancelaProducts.ServLOC,
    ...cancelaProducts.ServPROTEGE,
    ...sensorProducts.ServTEM,
    ...sensorProducts.ServLOC,
    ...sensorProducts.ServPROTEGE,
    ...enrolarProducts.ServTEM,
    ...enrolarProducts.ServPROTEGE,
    ...enrolarProducts.ServLOC,
    ...cercaProducts.ServTEM,
    ...cercaProducts.ServLOC,
    ...cercaProducts.ServPROTEGE,
    ...cftvProducts.ServTEM,
    ...cftvProducts.ServLOC,
    ...cftvProducts.ServPROTEGE,
    ...controleAcessoProducts.ServTEM,
    ...controleAcessoProducts.ServLOC,
    ...controleAcessoProducts.ServPROTEGE,
    ...protegePortaoProducts.ServLOC,
    ...protegePortaoProducts.ServTEM,
    ...protegePortaoProducts.ServPROTEGE,
  ].find((product) => product.cod === cod);
}

export function getProductsByPlano(plano: string) {
  switch (plano) {
    case Plano.tem:
      return [
        ...autoProducts.ServTEM,
        ...cancelaProducts.ServTEM,
        ...cercaProducts.ServTEM,
        ...sensorProducts.ServTEM,
        ...enrolarProducts.ServTEM,
        ...cftvProducts.ServTEM,
      ];
    case Plano.loc:
      return [
        ...autoProducts.ServLOC,
        ...cancelaProducts.ServLOC,
        ...sensorProducts.ServLOC,
        ...cercaProducts.ServLOC,
        ...cftvProducts.ServLOC,
        ...controleAcessoProducts.ServLOC,
      ];
    case Plano.prot:
      return [...protegePortaoProducts.ServPROTEGE];
    default:
      throw new Error(
        "Voce informou um plano que não existe no getProductsByPlano" +
          " o plano informado foi" +
          plano
      );
  }
}
