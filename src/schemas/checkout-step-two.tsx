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

function isValidCNPJ(cnpj: string): boolean {
  // Remover caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]/g, "");

  // Verificar se o CNPJ tem 14 dígitos
  if (cnpj.length !== 14) {
    return false;
  }

  // Verificar se todos os dígitos são iguais
  if (/^(.)\1*$/.test(cnpj)) {
    return false;
  }

  // Calcular o primeiro dígito verificador
  let soma = 0;
  const multiplicadores = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 12; i++) {
    soma += parseInt(cnpj[i]) * multiplicadores[i];
  }
  const dv1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Calcular o segundo dígito verificador
  soma = 0;
  const multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 13; i++) {
    soma += parseInt(cnpj[i]) * multiplicadores2[i];
  }
  const dv2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Verificar se os dígitos verificadores são válidos
  return parseInt(cnpj[12]) === dv1 && parseInt(cnpj[13]) === dv2;
}

export const stepTwoCheckoutSchema = z.object({
  cpf_cnpj: z
    .string({
      required_error: "CPF/CNPJ é obrigatório.",
    })
    .refine((doc) => {
      const cleanedDoc = doc.replace(/\D/g, "");
      if (cleanedDoc.length === 11) {
        return isValidCPF(doc);
      }
      return isValidCNPJ(doc);
    }, "CPF/CNPJ inválido."),
  vencimento: z.string().min(1, "O vencimento é obrigatório"),
  email: z.string().email("Digite um email válido"),
  phone: z
    .string()
    .min(1, {
      message: formErrorMessages.campoObrigatorio("telefone"),
    })
    .regex(/^(?:\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}|)$/, {
      message: formErrorMessages.telefoneInvalido,
    }),
});

export type StepTwoCheckoutSchema = z.infer<typeof stepTwoCheckoutSchema>;

export const stepTwoCheckoutSchemaDefaultValue: StepTwoCheckoutSchema = {
  cpf_cnpj: "",
  vencimento: "5",
  email: "",
  phone: "",
};
