import { formErrorMessages } from "@/app/errors/form-errors";
import { z } from "zod";

export const stepTwoResCheckoutSchema = z.object({
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
  nome: z
    .string()
    .min(1, { message: formErrorMessages.campoObrigatorio("nome") }),
});

export type StepTwoResCheckoutSchema = z.infer<typeof stepTwoResCheckoutSchema>;

export function stepTwoResCheckoutSchemaDefaultValue({
  endereco,
}: {
  endereco?: {
    referencia: string;
    cep: string;
    cidade: string;
    uf: string;
    logradouro: string;
    bairro: string;
    complemento: string;
    numero: string;
  };
}): StepTwoResCheckoutSchema {
  return {
    referencia: endereco?.referencia ?? "",
    cep: endereco?.cep ?? "",
    cidade: endereco?.cidade ?? "",
    uf: endereco?.uf ?? "",
    logradouro: endereco?.logradouro ?? "",
    bairro: endereco?.bairro ?? "",
    complemento: endereco?.complemento ?? "",
    numero: endereco?.numero ?? "",
    nome: "",
  };
}
