import { useContext } from "react";
import { CartContext } from "../app/context/cart.context";

export const useCartContext = () => useContext(CartContext);
