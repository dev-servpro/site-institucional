import { createSlice } from "@reduxjs/toolkit";

export interface DadosPessoaisJuridico {
  nome_empresa: string;
  nome_responsavel: string;
  cpf_responsavel: string;
}

export const dadosPessoaisJuridicos: DadosPessoaisJuridico = {
  nome_empresa: "",
  nome_responsavel: "",
  cpf_responsavel: "",
};

export const dadosPessoaisJuridicosSlice = createSlice({
  name: "dadosPessoaisJuridicos",
  initialState: dadosPessoaisJuridicos,
  reducers: {
    setDadosPessoaisJuridicos(
      state,
      { payload }: { payload: DadosPessoaisJuridico }
    ) {
      state.cpf_responsavel = payload.cpf_responsavel
      state.nome_empresa = payload.nome_empresa
      state.nome_responsavel = payload.nome_responsavel
    },
  },
});

export const { setDadosPessoaisJuridicos } = dadosPessoaisJuridicosSlice.actions;
