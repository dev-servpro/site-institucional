import { getProductByCod } from "../data/produtos";
//   cpf: dadosContratante.cpf_cnpj,
//   email: dadosContratante.email,
//   phone_cliente: dadosContratante.phone,
//   cart: JSON.stringify(cart.cart),
//   plano_id: 1,
//   bairro_cobranca: dadosEnderecoCobranca.bairro.toUpperCase(),
//   numero_cobranca: dadosEnderecoCobranca.numero,
//   logradouro_cobranca: dadosEnderecoCobranca.logradouro.toUpperCase(),
//   cep_cobranca: dadosEnderecoCobranca.cep,
//   cidade_cobranca: dadosEnderecoCobranca.cidade.toUpperCase(),
//   uf_cobranca: dadosEnderecoCobranca.uf.toUpperCase(),
//   complemento_cobranca: dadosEnderecoCobranca.complemento.toUpperCase(),
//   referencia_cobranca: dadosEnderecoCobranca.referencia.toUpperCase(),
//   vencimento: Number(dadosContratante.vencimento),
//   status: "pendente",
//   bairro_instalacao: dadosEndereco.bairro.toUpperCase(),
//   numero_instalacao: dadosEndereco.numero.toUpperCase(),
//   logradouro_instalacao: dadosEndereco.logradouro.toUpperCase(),
//   cep_instalacao: dadosEndereco.cep.toUpperCase(),
//   cidade_instalacao: dadosEndereco.cidade.toUpperCase(),
//   uf_instalacao: dadosEndereco.uf.toUpperCase(),
//   complemento_instalacao: dadosEndereco.complemento.toUpperCase(),
//   referencia_instalacao: dadosEndereco.referencia.toUpperCase(),
//   name_cliente: dadosPessoaisResidencial.nome.toUpperCase(),
//

import { CartState } from "@/lib/redux/features/cart/cart-slice";
import { cartPrice } from "./cart-price";

export function generateChatbotMessage({
  cpf,
  email,
  phone_cliente,
  cart,
  plano_id,
  bairro_cobranca,
  numero_cobranca,
  logradouro_cobranca,
  cep_cobranca,
  cidade_cobranca,
  uf_cobranca,
  complemento_cobranca,
  referencia_cobranca,
  vencimento,
  bairro_instalacao,
  numero_instalacao,
  logradouro_instalacao,
  cep_instalacao,
  cidade_instalacao,
  uf_instalacao,
  complemento_instalacao,
  referencia_instalacao,
  name_cliente,
  nome_empresa,
  nome_responsavel,
  cpf_responsavel,
  tipo_contrato,
}: {
  cpf: string;
  email: string;
  phone_cliente: string;
  cart: string;
  plano_id: number;
  bairro_cobranca: string;
  numero_cobranca: string;
  logradouro_cobranca: string;
  cep_cobranca: string;
  cidade_cobranca: string;
  uf_cobranca: string;
  complemento_cobranca: string;
  referencia_cobranca: string;
  vencimento: number;
  bairro_instalacao: string;
  numero_instalacao: string;
  logradouro_instalacao: string;
  cep_instalacao: string;
  cidade_instalacao: string;
  uf_instalacao: string;
  complemento_instalacao: string;
  referencia_instalacao: string;
  name_cliente?: string;
  nome_empresa?: string;
  nome_responsavel?: string;
  cpf_responsavel?: string;
  tipo_contrato?: string;
}) {
  console.log(plano_id, "chamando funcao")
  return `Olá ${
    tipo_contrato === "res" ? name_cliente : nome_empresa
  }, recebemos sua proposta com os seguintes dados.
  
  ${tipo_contrato === "res" ? "CPF" : "CNPJ"}: ${cpf}
  Email: ${email}
  Telefone: ${phone_cliente}

  ${tipo_contrato !== "res" ? "Nome do responsável: " : ""} ${
    tipo_contrato !== "res" ? nome_responsavel : ""
  }
  ${tipo_contrato !== "res" ? "CPF do responsável: " : ""} ${
    tipo_contrato !== "res" ? cpf_responsavel : ""
  }

  Endereço de instalação:
  ${logradouro_instalacao}, ${numero_instalacao}, ${bairro_instalacao}, ${cidade_instalacao}, ${uf_instalacao}, ${cep_instalacao}
  ${complemento_instalacao} ${referencia_instalacao}

  Endereço de cobrança:
  ${logradouro_cobranca}, ${numero_cobranca}, ${bairro_cobranca}, ${cidade_cobranca}, ${uf_cobranca}, ${cep_cobranca}
  ${complemento_cobranca} ${referencia_cobranca}

  Plano escolhido:
  ${
    plano_id === 1
      ? "Plano ServTEM"
      : plano_id === 2
      ? "Plano ServLOC"
      : "Plano ServPROTEGE"
  }  

  Seu carrinho:
  ${(JSON.parse(cart) as CartState["cart"])
    .map(
      (item) =>
        `${getProductByCod(item.cod)!.name} COD:${item.cod} QTD:${
          item.quantity
        } PREÇO: ${getProductByCod(item.cod)!.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`
    )
    .join("\n")}  

  Valor total: ${cartPrice({
    cart: JSON.parse(cart),
    planoURI: plano_id === 1 ? "tem" : plano_id === 2 ? "loc" : "prot",
  }).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}

  Vencimento: Dia ${vencimento}
  `;
}
