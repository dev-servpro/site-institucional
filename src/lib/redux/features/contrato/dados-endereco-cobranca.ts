import { createSlice } from "@reduxjs/toolkit";

export interface dadosEnderecoCobranca {
  cep: string;
  cidade: string;
  uf: string;
  referencia: string;
  logradouro: string;
  complemento: string;
  numero: string;
  bairro: string;
}

export const dadosEnderecoCobranca: dadosEnderecoCobranca = {
  cep: "",
  cidade: "",
  uf: "",
  referencia: "",
  logradouro: "",
  complemento: "",
  numero: "",
  bairro: "",
};

export const dadosEnderecoCobrancaSlice = createSlice({
  name: "dadosEnderecoCobranca",
  initialState: dadosEnderecoCobranca,
  reducers: {
    setDadosEnderecoCobranca(
      state,
      { payload }: { payload: dadosEnderecoCobranca }
    ) {
      state.bairro = payload.bairro;
      state.cep = payload.cep;
      state.cidade = payload.cidade;
      state.complemento = payload.complemento;
      state.logradouro = payload.logradouro;
      state.numero = payload.numero;
      state.referencia = payload.referencia;
      state.uf = payload.uf;
    },
  },
});

export const { setDadosEnderecoCobranca } = dadosEnderecoCobrancaSlice.actions;
