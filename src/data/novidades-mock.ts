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
    slug: "lancamento-cameras-ip-ppa",
    title: { rendered: "Lançamento: <strong>Câmeras IP PPA</strong>" },
    content: {
      rendered:
        "<p>Apresentamos nossa nova linha de <strong>Câmeras IP PPA</strong>, desenvolvidas com tecnologia de ponta para oferecer máxima segurança e qualidade de imagem. Essas câmeras são ideais para monitoramento residencial e comercial, proporcionando visão noturna de alta definição e conectividade inteligente.</p><p>Com resolução 4K e sistema de detecção de movimento avançado, nossas câmeras IP PPA garantem proteção 24 horas por dia, 7 dias por semana. A instalação é simples e o sistema pode ser acessado remotamente através do seu smartphone ou computador.</p>"
    },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "/images/CAMERA PPA.png" },
      ],
    },
  },
  {
    id: 2,
    slug: "como-escolher-portas-de-enrolar",
    title: { rendered: "Como escolher <em>portas de enrolar</em> para seu negócio" },
    content: {
      rendered:
        "<p>As <strong>portas de enrolar</strong> são uma solução prática e eficiente para proteger seu estabelecimento comercial ou residencial. Nossa linha inclui modelos resistentes e duráveis, desenvolvidos para oferecer máxima segurança e facilidade de operação.</p><p>Disponíveis em diversos materiais e acabamentos, nossas portas de enrolar combinam estética moderna com funcionalidade superior. O sistema de enrolamento automático permite abertura e fechamento suave, enquanto a estrutura reforçada garante proteção contra intempéries e tentativas de invasão.</p>"
    },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "/images/PORTAO DE ENROLAR.png" },
      ],
    },
  },
  {
    id: 3,
    slug: "tutorial-central-de-alarme",
    title: { rendered: "Tutorial: configurando <u>sua central de alarme</u>" },
    content: {
      rendered:
        "<p>A <strong>central de alarme</strong> é o coração do seu sistema de segurança residencial ou comercial. Nossa linha de centrais oferece tecnologia avançada com interface intuitiva, permitindo controle total sobre todos os dispositivos conectados ao sistema.</p><p>Com recursos como monitoramento 24h, notificações via smartphone e integração com sensores de movimento, fumaça e abertura de portas, nossas centrais de alarme garantem proteção completa. A instalação é profissional e o suporte técnico está sempre disponível para garantir o funcionamento perfeito do seu sistema.</p>",
    },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: "/images/CENTRAL DE ALARME.png" },
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
