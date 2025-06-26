export const cpfMask = (value: string) => {
  const inputFormatted = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return inputFormatted;
};

export const rgMask = (value: string) => {
  const inputFormatted = value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)$/, "$1-$2");

  return inputFormatted;
};

export const phoneMask = (value: string) => {
  const inputFormatted = value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})/, "$1-$2");

  return inputFormatted;
};

export const cnpjMask = (value: string) => {
  const inputFormatted = value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");

  return inputFormatted;
};

export const zipCodeMask = (value: string) => {
  const inputFormatted = value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(\d{3})(\d)/, "$1$2");

  return inputFormatted;
};

export const removeMask = (value: string | number) =>
  `${value}`.replace(/\D/g, "");

export const moneyMask = (value: string) => {
  const inputFormatted = value
    .replace(/^0/, "")
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");

  return inputFormatted;
};