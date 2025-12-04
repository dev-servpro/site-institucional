export type MockWpMedia = {
  source_url: string;
};

export type MockWpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: { [key: string]: Array<Record<string, unknown>> } & {
    "wp:featuredmedia"?: MockWpMedia[];
  };
};

const POSTS: MockWpPost[] = [
  {
    id: 1,
    slug: "lancamento-eletroima",
    title: { rendered: "Lançamento: <strong>Eletroimã</strong>" },
    content: {
      rendered:
        "<p>Apresentamos nosso Eletroímã Profissional, desenvolvido para entregar força magnética robusta e desempenho contínuo. Ideal para aplicações industriais, automação e sistemas de retenção, ele oferece potência, estabilidade e alta confiabilidade em qualquer operação. Com acionamento elétrico rápido e construção resistente, o eletroímã garante resposta imediata e longa durabilidade. Sua instalação é simples e a integração com sensores, controladores e outros equipamentos é fácil, proporcionando mais eficiência e segurança para o seu projeto.</p>",
    },
    _embedded: {
      "wp:featuredmedia": [{ source_url: "/images/eletroimaZ.png" }],
    },
  },
  {
    id: 2,
    slug: "lancamento-mola-aerea",
    title: {
      rendered: "Não deixe de conferir nossas <strong>Molas Aéreas </strong>",
    },
    content: {
      rendered:
        "<p>Apresentamos nossa linha de Molas Aéreas desenvolvidas para garantir fechamento automático suave, seguro e silencioso em qualquer porta. Fabricadas com materiais de alta resistência, oferecem ajuste de velocidade, longa durabilidade e fácil instalação, sendo ideais para ambientes residenciais e comerciais.</p>",
    },
    _embedded: {
      "wp:featuredmedia": [{ source_url: "/images/molaAereaZ.png" }],
    },
  },
  {
    id: 3,
    slug: "porteiro-eletronico",
    title: {
      rendered: "<p>Confira nosso Porteiro Eletrônico</p>",
    },
    content: {
      rendered:
        "<p>Trazendo mais segurança e praticidade ao seu dia a dia, nosso Porteiro Eletrônico oferece comunicação nítida, controle de acesso eficiente e instalação descomplicada. Com áudio de alta qualidade e estrutura resistente, ele permite identificar visitantes e liberar a entrada com total comodidade, sendo ideal para residências e estabelecimentos comerciais.</p>",
    },
    _embedded: {
      "wp:featuredmedia": [{ source_url: "/images/porteiroEletronicoZ.png" }],
    },
  },
];

export async function getPostsMock(): Promise<MockWpPost[]> {
  return POSTS;
}

// Função para normalizar slugs (remove acentos, converte para minúsculo)
function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .trim();
}

export async function getPostBySlugMock(
  slug: string
): Promise<MockWpPost | undefined> {
  // Normaliza o slug recebido para fazer busca case-insensitive e sem acentos
  // Isso garante compatibilidade mesmo se alguém acessar com caracteres especiais
  const normalizedSlug = normalizeSlug(slug);
  return POSTS.find((p) => normalizeSlug(p.slug) === normalizedSlug);
}

export async function getStaticParamsFromMock(): Promise<{ slug: string }[]> {
  return POSTS.map((p) => ({ slug: p.slug }));
}
