import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart: { cod: string; quantity: number }[];
  plano: "tem" | "loc" | "prot";
}

export const cartState: CartState = {
  cart: [],
  plano: "tem",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    setCart: (state, { payload }: { payload: CartState["cart"] }) => {
      state.cart = payload;
    },
    setPlano: (
      state,
      {
        payload,
      }: {
        payload: CartState["plano"];
      }
    ) => {
      state.plano = payload;
    },
    addItemToCart(state, { payload }: { payload: string }) {
      const index = state.cart.findIndex(({ cod }) => payload === cod);
      const product = state.cart[index];
      const cartItemQuantity = product?.quantity;
      const isItemAlreadyInTheCart = !!cartItemQuantity;
      if (isItemAlreadyInTheCart) {
        state.cart[index].quantity = cartItemQuantity + 1;
        return;
      }
      state.cart.push({ cod: payload, quantity: 1 });
    },
    removeItemInTheCart(state, { payload }: { payload: string }) {
      const index = state.cart.findIndex(({ cod }) => payload === cod);
      const product = state.cart[index];
      const cartItemQuantity = product?.quantity;
      if (cartItemQuantity === undefined) {
        return;
      }
      if (cartItemQuantity - 1 < 1) {
        return {
          ...state,
          cart: state.cart.filter(({ cod }) => cod !== payload),
        };
      }
      state.cart[index].quantity = cartItemQuantity - 1;
    },
    removeAllItemInTheCart(state, { payload }: { payload: string }) {
      return {
        ...state,
        cart: state.cart.filter(({ cod }) => cod !== payload),
      };
    },
  },
});

export const { addItemToCart, removeItemInTheCart, setPlano, setCart } =
  cartSlice.actions;
