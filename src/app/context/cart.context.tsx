import { Plano } from "@/data/produtos";
import React, { createContext, Dispatch, SetStateAction } from "react";

export const CartContext = createContext<{
  cart: Map<string, number>;
  setCart: Dispatch<SetStateAction<Map<string, number>>>;
  plano: Plano;
}>({
  cart: new Map(),
  setCart: function () {},
  plano: Plano.tem,
});

export const CartContextProvider = ({
  children,
  cart,
  setCart,
  plano
}: {
  children: React.ReactNode;
  cart: Map<string, number>;
  setCart: Dispatch<SetStateAction<Map<string, number>>>;
  plano: Plano
}) => {
  return (
    <CartContext.Provider value={{ cart, setCart, plano }}>
      {children}
    </CartContext.Provider>
  );
};
