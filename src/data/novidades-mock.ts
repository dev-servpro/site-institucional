export type MockWpMedia = {
  source_url: string;
};

export type MockWpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: { [key: string]: Array<any> } & {
    "wp:featuredmedia"?: MockWpMedia[];
  };
};

const POSTS: MockWpPost[] = [
  {
    id: 1,
    slug: "lancamento-cameras-ip-ppa",
    title: { rendered: "Lançamento: <strong>Câmeras IP PPA</strong>" },
    content: {
      rendered:
        "<p>Lançamento de cameras IP PPA TESTE 1</p>"
    },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "https://redeservpro.com.br/wp-content/uploads/2024/01/PPA_website_1737726185646.webp" },
      ],
    },
  },
  {
    id: 2,
    slug: "como-escolher-portas-de-enrolar",
    title: { rendered: "Como escolher <em>portas de enrolar</em> para seu negócio" },
    content: {
      rendered:
        "<p>Como escolher portas de enrolar TESTE 2</p>"
    },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "https://redeservpro.com.br/wp-content/uploads/2024/01/Banner-site-2048x1024-portas-de-enrolar.webp" },
      ],
    },
  },
  {
    id: 3,
    slug: "tutorial-central-de-alarme",
    title: { rendered: "Tutorial: configurando <u>sua central de alarme</u>" },
    content: {
      rendered:
        "<p>Tutorial central de alarme TESTE 3</p>",
    },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "https://redeservpro.com.br/wp-content/uploads/2024/01/Gp-05-Alarmes-Monitorados-PPA-JC-DSC-Qolsys_2_1721161642928.webp" },
      ],
    },
  },
];

export async function getPostsMock(): Promise<MockWpPost[]> {
  return POSTS;
}

export async function getPostBySlugMock(slug: string): Promise<MockWpPost | undefined> {
  return POSTS.find((p) => p.slug === slug);
}

export async function getStaticParamsFromMock(): Promise<{ slug: string }[]> {
  return POSTS.map((p) => ({ slug: p.slug }));
}
