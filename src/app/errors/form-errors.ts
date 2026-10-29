export const formErrorMessages = {
  emailInvalido: "Insira um e-mail válido",
  passwordMin: (min: number) =>
    `A senha deve conter no mínimo ${min} caracteres`,
  campoObrigatorio: (campo: string) => `O ${campo} é obrigatório`,
  cpfInvalido: "Insira um CPF válido",
  cnpjInvalido: "Insira um CNPJ válido",
  telefoneInvalido: "Insira um celular válido",
  cepInvalido: "Insira um cep válido",
};