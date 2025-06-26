"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import OrcamentoMaisDetalhes from "./orcamento-mais-detalhe";
import { useAppSelector } from "@/lib/redux/hooks";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemInTheCart } from "@/lib/redux/features/cart/cart-slice";
import { Product, productsCategories } from "@/data/produtos";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: (props) => {
      return (
        <div className="relative w-[100px] h-[100px] mx-auto">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={props.renderValue() as unknown as StaticImport}
              width={200}
              height={200}
              alt=""
            />
          </AspectRatio>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "category",
    header: "Categoria",
    enableColumnFilter: true,
    cell: (props) => {
      const category = productsCategories.find(
        ({ value }) => value === props.renderValue()
      );
      return <span>{category?.label}</span>;
    },
  },
  {
    accessorKey: "price",
    header: "Valor",
    cell: (props) => {
      return (
        <span>
          {(props.renderValue() as number).toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "detalhes",
    header: "",
    cell: function CellRender(props) {
      const product = props.row.original;
      return (
        <div>
          <OrcamentoMaisDetalhes product={product} />
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: function Cell(props) {
      const productId = props.row.original.cod;
      const { cart } = useAppSelector((state) => state.cart);
      const product = cart.find(
        ({ cod }) => productId === cod
      );
      const isProductAlreadyInTheCart = !!product
      const dispatch = useDispatch();

      return (
        <span className="flex items-center w-full">
          <Button
            onClick={() => {
              dispatch(addItemToCart(productId));
            }}
            className="p-1 w-10 h-10"
            size="icon"
            variant={"ghost"}
          >
            <PlusCircle className="!size-5" />
          </Button>

          <span
            className={cn(
              "w-5 text-center",
              !isProductAlreadyInTheCart && "opacity-0"
            )}
          >
            {isProductAlreadyInTheCart && product.quantity}
          </span>

          <Button
            onClick={() => {
              dispatch(removeItemInTheCart(productId))
            }}
            disabled={!isProductAlreadyInTheCart}
            className={cn(
              "p-1 w-10 h-10",
              !isProductAlreadyInTheCart && "!opacity-0"
            )}
            size="icon"
            variant={"ghost"}
          >
            <MinusCircle className="!size-5" />
          </Button>
        </span>
      );
    },
  },
];
