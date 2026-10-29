import { formErrorMessages } from "@/app/errors/form-errors";
import { z } from "zod";

export const stepOneCheckoutSchema = z.object({
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
});

export type StepOneCheckoutSchema = z.infer<typeof stepOneCheckoutSchema>;

export const stepOneCheckoutSchemaDefaultValues: StepOneCheckoutSchema = {
  referencia: "",
  cep: "",
  cidade: "",
  uf: "",
  logradouro: "",
  bairro: "",
  complemento: "",
  numero: "",
};
