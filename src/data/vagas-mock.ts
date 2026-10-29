export type Vaga = {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  atividades: string[];
  requisitos: string[];
  beneficios: string[];
  tipoContrato: string;
  localizacao: string;
  salario: string;
  horario: string;
  imagem: string;
  dataPublicacao: string;
  ativa: boolean;
};

const VAGAS: Vaga[] = [
  {
    id: 1,
    slug: "vendedor-externo-fortaleza",
    titulo: "Vendedor Externo",
    descricao:
      "Você é comunicativo, tem brilho nos olhos por vendas e gosta de estar na rua, conectando pessoas e oportunidades? Então essa vaga é pra você!",
    atividades: [
      "Atuar com vendas externas, apresentando os produtos SERVPRO",
      "Abordar clientes em condomínios, arquitetos, obras e comércios na região de Fortaleza",
      "Realizar negociações com foco em metas e conversões",
      "Preencher relatórios e acompanhar resultados de visitas e vendas",
    ],
    requisitos: [
      "Facilidade de comunicação e persuasão",
      "Energia, proatividade e foco em metas",
      "Experiência com vendas externas será um diferencial",
      "Ensino médio completo",
      "Ter veículo próprio (moto ou carro) é requisito obrigatório",
      "Disponibilidade para deslocamento",
    ],
    beneficios: [
      "Salário fixo + comissão por vendas (excelente percentual)",
      "Ajuda de custo",
      "Premiações por metas",
      "Cesta de benefícios",
      "Oportunidade de crescimento em uma empresa em expansão",
    ],
    tipoContrato: "CLT",
    localizacao: "Fortaleza - CE",
    salario: "",
    horario: "",
    imagem: "/images/empresa.png",
    dataPublicacao: "2025-10-22",
    ativa: true,
  },
];

export async function getVagasMock(): Promise<Vaga[]> {
  return VAGAS.filter((vaga) => vaga.ativa);
}

export async function getVagaBySlugMock(
  slug: string
): Promise<Vaga | undefined> {
  return VAGAS.find((v) => v.slug === slug);
}

export async function getStaticParamsFromMock(): Promise<{ slug: string }[]> {
  return VAGAS.map((v) => ({ slug: v.slug }));
}
