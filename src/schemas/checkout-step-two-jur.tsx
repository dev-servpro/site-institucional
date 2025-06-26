import { formErrorMessages } from "@/app/errors/form-errors";
import { z } from "zod";

function isValidCPF(cpf: string): boolean {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  const digits = cpf.split("").map((el) => +el);
  const getVerifyingDigit = (arr: number[]) => {
    const reduced = arr.reduce(
      (sum, digit, index) => sum + digit * (arr.length - index + 1),
      0
    );
    return ((reduced * 10) % 11) % 10;
  };
  return (
    getVerifyingDigit(digits.slice(0, 9)) === digits[9] &&
    getVerifyingDigit(digits.slice(0, 10)) === digits[10]
  );
}

export const stepTwoJurCheckoutSchema = z.object({
  referencia: z.string(),
  cep: z
    .string()
    .min(1, {
      message: formErrorMessages.campoObrigatorio("CEP"),
    })
    .regex(/^(?:\d{5}-?\d{3}|)$/, {
      message: formErrorMessages.cepInvalido,
    }),
  cidade: z.string().min(1, {
    message: formErrorMessages.campoObrigatorio("cidade"),
  }),
  uf: z.string().min(1, {
    message: formErrorMessages.campoObrigatorio("UF"),
  }),
  logradouro: z.string().min(1, {
    message: formErrorMessages.campoObrigatorio("endereço"),
  }),
  bairro: z.string().min(1, {
    message: formErrorMessages.campoObrigatorio("bairro"),
  }),
  complemento: z.string(),
  numero: z.string().min(1, {
    message: formErrorMessages.campoObrigatorio("número"),
  }),
  nomeEmpresa: z
    .string()
    .min(1, { message: formErrorMessages.campoObrigatorio("nome") }),
  nomeResponsavel: z
    .string()
    .min(1, { message: formErrorMessages.campoObrigatorio("nome") }),
  cpfResponsavel: z
    .string()
    .min(1, {
      message: formErrorMessages.campoObrigatorio("CPF/CNPJ"),
    })
    .refine((doc) => {
      return isValidCPF(doc);
    }, "CPF/CNPJ inválido."),
});

export type StepTwoJurCheckoutSchema = z.infer<typeof stepTwoJurCheckoutSchema>;

export function stepTwoJurCheckoutSchemaDefaultValue({
  endereco,
}: {
  endereco: {
    referencia: string;
    cep: string;
    cidade: string;
    uf: string;
    logradouro: string;
    bairro: string;
    complemento: string;
    numero: string;
  };
}): StepTwoJurCheckoutSchema {
  return {
    referencia: endereco?.referencia ?? "",
    cep: endereco?.cep ?? "",
    cidade: endereco?.cidade ?? "",
    uf: endereco?.uf ?? "",
    logradouro: endereco?.logradouro ?? "",
    bairro: endereco?.bairro ?? "",
    complemento: endereco?.complemento ?? "",
    numero: endereco?.numero ?? "",
    nomeEmpresa: "",
    cpfResponsavel: "",
    nomeResponsavel: "",
  };
}
