export function cartToSearchParams(
  cart: {
    cod: string;
    quantity: number;
  }[]
) {
  let query = "prod=";
  cart.forEach(
    ({ cod, quantity }, index) =>
      (query += `${cod}q${quantity}${index === cart.length - 1 ? "" : ","}`)
  );
  return query;
}
