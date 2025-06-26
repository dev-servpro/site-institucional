"use client";

import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  addItemToCart,
  removeItemInTheCart,
} from "@/lib/redux/features/cart/cart-slice";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/redux/hooks";
import { Product } from "@/data/produtos";

export default function CartAdder({
  product: productProps,
}: {
  product: Product;
}) {
  const productId = productProps.cod;
  const { cart } = useAppSelector((state) => state.cart);
  const product = cart.find(({ cod }) => productId === cod);
  const isProductAlreadyInTheCart = !!product;
  const dispatch = useDispatch();

  return (
    <span className="flex mt-2 justify-center lg:justify-start items-center w-full">
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
          !isProductAlreadyInTheCart && "lg:opacity-0"
        )}
      >
        <span className="lg:hidden">{!isProductAlreadyInTheCart && 0}</span>
        {isProductAlreadyInTheCart && product.quantity}
      </span>

      <Button
        onClick={() => {
          dispatch(removeItemInTheCart(productId));
        }}
        disabled={!isProductAlreadyInTheCart}
        className={cn(
          "p-1 w-10 h-10",
          !isProductAlreadyInTheCart && "lg:!opacity-0"
        )}
        size="icon"
        variant={"ghost"}
      >
        <MinusCircle className="!size-5" />
      </Button>
    </span>
  );
}
