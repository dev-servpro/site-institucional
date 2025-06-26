import { Marquee } from "@/app/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import { Quote } from "lucide-react";
import GerleneVeras from "../../../../../../public/images/Gerlene-Veras.webp";
import BrunoCamboim from "../../../../../../public/images/Bruno-Camboim.webp";
import NathallyKimberly from "../../../../../../public/images/Nathally-Kimberly.webp";
import LucianoFernandes from "../../../../../../public/images/Luciano-Fernandes-P.webp";

const reviews = [
  {
    name: "Gerlene Veras",
    username: "@jack",
    body: "Excelente aquisição! A SERVPRO passa segurança, agente pode confiar, seu produto é de qualidade. O Portão da garagem ficou muito lindo e o automático é super veloz (rsrs), os funcionários da entrega, da instalação e pós-venda super atenciosos também! Estou grata com o atendimento, prático e rápido. Resolvi tudo pelo telefone disponível no site, e pelo whatsapp da Letícia, quem atendeu com prontidão e cortesia a minha necessidade. Fui na loja só uma vez para definir a escolha do portão, tranquilo. Recomendo demais! Gerlene Veras.",
    img: GerleneVeras,
  },
  {
    name: "Nathally Kimberly",
    username: "@jill",
    body: "Tive uma ótima experiência com a compra do portão da minha casa. O vendedor Junrley Martins foi super atencioso desde o atendimento até o acompanhamento das obras com as medidas específicas. Estou muito satisfeita com a empresa e recomendo. Obrigada!",
    img: NathallyKimberly,
  },
  {
    name: "Bruno Camboim",
    username: "@john",
    body: "Eu Bruno Pimentel Camboim e minha esposa Rafaele Moura Queiroz Camboim, fomos muito bem atendidos pela gestora Débora Lima desde o inicio com o orçamento, até o fechamento do pedido 084136, a equipe que fez a instalação do motor no portão nos atendeu com agilidade e o produto é de ótima qualidade, estamos muito felizes por ter escolhido a Servpro, vocês dão show de atendimento, meus parabéns!!!",
    img: BrunoCamboim,
  },
  {
    name: "Luciano Fernandes",
    username: "@jane",
    body: "Muito satisfeito com aquisição do portão. Desde o primeiro contato, atendimento do vendedor Jurley, sempre atencioso com minhas demandas via whats, prazos de entrega e colocação e qualidade do produto. Super recomendo.",
    img: LucianoFernandes,
  },
];

const firstRow = reviews;
const secondRow = reviews;

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: StaticImageData;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className="relative w-[min(90vw,24rem)] md:w-[28rem] mx-3 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-100" />
      
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-100">
          <Image
            className="object-cover"
            src={img}
            alt={name}
            fill
            sizes="48px"
          />
        </div>
        <div>
          <figcaption className="text-base font-medium">
            {name}
          </figcaption>
          <p className="text-sm text-slate-500">Cliente SERVPRO</p>
        </div>
      </div>

      <blockquote className="relative text-sm text-slate-600 leading-relaxed line-clamp-4">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden gap-6">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <Marquee pauseOnHover reverse className="[--duration:45s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/50 to-transparent" />
    </div>
  );
}
