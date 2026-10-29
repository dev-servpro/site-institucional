import { getPlanoByURI, getProductsByPlano, PlanoURI } from "../data/produtos";

export function cartPrice({
  cart,
  planoURI,
}: {
  cart: { cod: string; quantity: number }[];
  planoURI: PlanoURI;
}) {
  const plano = getPlanoByURI(planoURI)
  return cart.reduce((acc, { cod, quantity }) => {
    return (
      acc +
      getProductsByPlano(plano).find((product) => product.cod === cod)!.price *
        quantity
    );
  }, 0);
}
