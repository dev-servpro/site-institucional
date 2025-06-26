import { z } from 'zod';

export const createContratoFisicoSchema = z.object({
  cpf: z
    .string({ required_error: 'O CPF é obrigatório' })
    .min(1, 'O cliente não pode ser vazio'),
  name_cliente: z.string().min(1, 'O nome do cliente não pode ser vazio'),
  email: z.string().min(1, 'O email não pode ser vazio'),
  phone_cliente: z.string().min(1, 'O telefone não pode ser vazio'),
  plano_id: z.number().min(1, 'O plano não pode ser vazio'),
  cep_cobranca: z.string().min(1, 'O cep de cobrança não pode ser vazio'),
  cep_instalacao: z.string().min(1, 'O cep de instalação não pode ser vazio'),
  logradouro_cobranca: z
    .string()
    .min(1, 'O logradouro de cobrança não pode ser vazio'),
  logradouro_instalacao: z
    .string()
    .min(1, 'O logradouro de instalação não pode ser vazio'),
  numero_cobranca: z.string().min(1, 'O número de cobrança não pode ser vazio'),
  numero_instalacao: z
    .string()
    .min(1, 'O número de instalação não pode ser vazio'),
  complemento_cobranca: z.string().optional(),
  complemento_instalacao: z.string().optional(),
  referencia_cobranca: z.string().optional(),
  referencia_instalacao: z.string().optional(),
  bairro_cobranca: z.string().min(1, 'O bairro de cobrança não pode ser vazio'),
  bairro_instalacao: z
    .string()
    .min(1, 'O bairro de instalação não pode ser vazio'),
  cidade_cobranca: z.string().min(1, 'A cidade de cobrança não pode ser vazio'),
  cidade_instalacao: z
    .string()
    .min(1, 'A cidade de instalação não pode ser vazio'),
  uf_cobranca: z.string().min(1, 'O uf de cobrança não pode ser vazio'),
  uf_instalacao: z.string().min(1, 'O uf de instalação não pode ser vazio'),
  vencimento: z.number().min(1, 'O vencimento não pode ser vazio'),
  cart: z.string().min(1, 'O carrinho não pode ser vazio'),
  status: z.string().min(1, 'O status não pode ser vazio'),
});

export type CreateContratoFisicoDto = z.infer<
  typeof createContratoFisicoSchema
>;
