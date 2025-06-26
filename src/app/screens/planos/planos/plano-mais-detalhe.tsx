import { Check, InfoIcon } from "lucide-react";
import { CardDescription } from "../../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Product } from "@/data/produtos";

export default function MaisDetalhesPlano({
  product,
}: {
  product: Partial<Product>;
}) {
  return (
    <Dialog>
      <div className="w-full flex justify-center">
        <DialogTrigger className="h-fit mt-2">
          <CardDescription className="text-center  underline flex items-center justify-center cursor-pointer">
            <InfoIcon className="w-4 h-4 mr-1" />
            Mais detalhes
          </CardDescription>
        </DialogTrigger>
      </div>

      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
        className="max-w-[90%] sm:max-w-lg rounded-lg max-h-[30rem] overflow-auto"
      >
        <DialogHeader>
          <DialogTitle>Mais detalhes</DialogTitle>
          <DialogDescription className="font-semibold">
            {product.name}
          </DialogDescription>
        </DialogHeader>

        <CardDescription className="text-primary-darker font-semibold">
          Acompanha:
        </CardDescription>
        <ul className="w-full mx-auto">
          {product.acompanha?.map((feature) => (
            <li
              className="flex items-center gap-x-1 first:mt-0 mt-2"
              key={feature}
            >
              <div className="rounded-full w-6 h-6">
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
