import { Check, InfoIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Product } from "@/data/produtos";

export default function OrcamentoMaisDetalhes({
  product,
}: {
  product: Partial<Product>;
}) {
  return (
    <Dialog>
      <div className="w-full flex justify-start lg:justify-center">
        <DialogTrigger asChild className="mt-4 lg:mt-0">
          <Button size="sm" variant="outline" className="gap-1.5">
            <InfoIcon className="w-3.5 h-3.5" />
            Mais detalhes
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription className="font-semibold">
            Mais detalhes
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-4 w-full mx-auto">
          <CardDescription className="mb-4 flex items-center justify-center gap-x-1 w-full">
            <span>Plano </span>
            <span className="text-primary-darker text-center">
              {product?.plano}
            </span>
          </CardDescription>

          {product?.features?.map((feature) => (
            <li className="flex items-center gap-x-1 mt-2" key={feature}>
              <div className="bg-primary rounded-full w-6 h-6">
                <Check className="text-primary-foreground p-1" />
              </div>
              <span className="text-sm text-accent-foreground ml-1 font-light">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {product?.acompanha?.length && product?.acompanha?.length > 0 ? (
          <CardDescription className="text-primary-darker font-semibold">
            Acompanha:
          </CardDescription>
        ) : null}
        <ul className="w-full mx-auto">
          {product.acompanha?.map((feature) => (
            <li
              className="flex items-center gap-x-1 first:mt-0 mt-2"
              key={feature}
            >
              <div className="bg-white rounded-full w-6 h-6">
                <Check className="text-primary-darker p-1" />
              </div>
              <span className="text-sm text-accent-foreground ml-1 font-light">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {product.observacao ? (
          <div className="flex">
            <CardDescription className="text-primary-darker font-semibold">
              Observação:
            </CardDescription>
            <span className="text-sm ml-2">{product?.observacao}</span>
          </div>
        ) : null}

        {product.vlInstalacao ? (
          <div className="flex">
            <CardDescription className="text-primary-darker font-semibold">
              Instalação:
            </CardDescription>
            <span className="text-sm ml-2">{product?.vlInstalacao}</span>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
