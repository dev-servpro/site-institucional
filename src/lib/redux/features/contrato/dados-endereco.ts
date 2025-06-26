import { createSlice } from "@reduxjs/toolkit";

export interface DadosEndereco {
  cep: string;
  cidade: string;
  uf: string;
  referencia: string;
  logradouro: string;
  complemento: string;
  numero: string;
  bairro: string;
}

export const dadosEndereco: DadosEndereco = {
  cep: "",
  cidade: "",
  uf: "",
  referencia: "",
  logradouro: "",
  complemento: "",
  numero: "",
  bairro: ""
};

export const dadosEnderecoSlice = createSlice({
  name: "dadosEndereco",
  initialState: dadosEndereco,
  reducers: {
    setDadosEndereco(
      state,
      { payload }: { payload: DadosEndereco }
    ) {
      state.bairro = payload.bairro
      state.cep = payload.cep
      state.cidade = payload.cidade
      state.complemento = payload.complemento
      state.logradouro = payload.logradouro
      state.numero = payload.numero
      state.referencia = payload.referencia
      state.uf = payload.uf
    },
  },
});

export const { setDadosEndereco } = dadosEnderecoSlice.actions;
