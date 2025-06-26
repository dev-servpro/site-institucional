import { getPlanoByURI, getProductsByPlano, PlanoURI } from "../data/produtos";

export function searchParamsItems({
  searchParams,
  plano: planoURI,
}: {
  searchParams: string;
  plano: string;
}) {
  const paramsSplit = searchParams.split(",");
  const map = new Map<string, number>();
  const plano = getPlanoByURI(planoURI as PlanoURI);

  paramsSplit.forEach((split) => {
    const [cod, quantity] = split.split("q");
    if (!cod || !quantity || isNaN(Number(quantity))) {
      return;
    }
    if (!getProductsByPlano(plano).find((product) => product.cod === cod)) {
      return;
    }
    map.set(cod, Number(quantity));
  });
  return Array.from(map.entries().map(([cod, quantity]) => ({
    cod,
    quantity,
  })));
}
