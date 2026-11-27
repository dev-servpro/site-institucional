import { Building, Building2 } from "lucide-react";

export const linksRapidos = [
  {
    label: "App Giga+ Fibra",
    href: "/",
  },
  {
    label: "Quem Somos",
    href: "/",
  },
  {
    label: "Trabalhe Conosco",
    href: "/",
  },
  {
    label: "Perguntas Frequentes",
    href: "/",
  },
  {
    label: "TV",
    href: "/",
  },
  {
    label: "Telefone Fixo",
    href: "/",
  },
  {
    label: "Indique um amigo",
    href: "/",
  },
  {
    label: "Internet Corporativa",
    href: "/",
  },
  {
    label: "Internet Empresarial",
    href: "/",
  },
  {
    label: "Serviços Digitais",
    href: "/",
  },
  {
    label: "Onde Estamos",
    href: "/",
  }
];

export const atendimento = [
  { label: "Fale Conosco", href: "https://wa.me/558000901234" }
]

export const regulatorio = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Ética e Integridade", href: "/" },
  { label: "Contratos e Regulamentos", href: "/" },
  { label: "Segurança da Informação", href: "/" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Patrocinadores", href: "/" }
]

export enum EnderecosTypes {
  matriz = "Matriz",
  filial = "Filial"
}

export const enderecos = [
  {
    type: EnderecosTypes.matriz,
    value: "R. Irmã Bazet, 182 - Montese, Fortaleza - CE, 60420-670",
    icon: Building
  },
  {
    type: EnderecosTypes.filial,
    value: "Av. Dom Severino, 3330 - Sala 05 - São Cristóvão, Teresina - PI, 644049-375",
    icon: Building2
  }
]

export const phone = "0800 090 1234"

export const email = "contato@redeservpro.com.br"
