import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import Image from "next/image";
import MaisDetalhesPlano from "./plano-mais-detalhe";
import PlanosCardTitle from "./card-title";
import * as motion from "motion/react-client";
import { getURIPlanoByPlano, Product } from "@/data/produtos";

interface PlanosCardProps {
  product: Product;
}

const MotionCard = motion.create(Card);

export default function PlanosCard({ product }: PlanosCardProps) {
  const { name, features, plano, price, cod, promotionalPrice, onlineContact } =
    product;

  return (
    <MotionCard
      aria-labelledby={`${name}-id`}
      className="pt-2 flex select-none flex-col min-h-full px-3 pb-2 w-full shadow-lg drop-shadow-xs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        damping: 30,
        bounceStiffness: 500,
        duration: 0.3,
        delay: onlineContact ? 0.2 : 0.1,
      }}
    >
      <CardHeader>
        <div className="overflow-hidden">
          <PlanosCardTitle title={name} />
        </div>

        <div className="h-[100px] flex justify-center">
          <AspectRatio ratio={16 / 9}>
            <Image
              height={150}
              className="rounded-md h-auto object-cover mx-auto"
              src={product.image}
              alt={product.name}
            />
          </AspectRatio>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col items-center">
        <section
          className="flex flex-col items-center mt-10"
          aria-labelledby={`${name}-${price}-id`}
        >
          {promotionalPrice ? (
            <CardDescription className="text-sm text-muted-foreground">
              De <span className="line-through">{price}</span> por apenas
            </CardDescription>
          ) : null}

          <CardDescription
            className="text-primary-darker font-semibold text-[2rem]/[2.25rem]"
            id={`${name}-${price}-id`}
          >
            {(promotionalPrice ?? price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            <span className="text-sm font-normal">/mês</span>
          </CardDescription>
        </section>

        <ul className="mt-2 mb-2 w-full mx-auto">
          <CardDescription className="mb-2 flex items-center justify-center gap-x-1 w-full">
            <span>Plano </span>
            <span className="text-primary-darker text-center">{plano}</span>
          </CardDescription>

          {features.map((feature) => (
            <li className="flex items-center gap-x-1 mt-1.5" key={feature}>
              <div className="bg-primary rounded-full w-6 h-6">
                <Check className="text-primary-foreground p-1" />
              </div>
              <span className="text-xs text-accent-foreground ml-1 font-light">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto block">
        <Button className="rounded-full !w-full !py-4 h-fit" asChild>
          <Link href={`/orcamento/${getURIPlanoByPlano(plano)}?prod=${cod}q1`}>
            Contratar Online
          </Link>
        </Button>

        {(product?.acompanha && product.acompanha.length > 0) ||
        product?.observacao ||
        product?.vlInstalacao ? (
          <MaisDetalhesPlano product={product} />
        ) : null}
      </CardFooter>
    </MotionCard>
  );
}
