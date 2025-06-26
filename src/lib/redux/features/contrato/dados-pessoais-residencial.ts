import { createSlice } from "@reduxjs/toolkit";

export interface DadosPessoaisResidencial {
  nome: string;
}

export const dadosPessoaisResidencial: DadosPessoaisResidencial = {
  nome: "",
};

export const dadosPessoaisResidencialSlice = createSlice({
  name: "dadosPessoaisResidencial",
  initialState: dadosPessoaisResidencial,
  reducers: {
    setDadosResidencial(
      state,
      { payload }: { payload: DadosPessoaisResidencial }
    ) {
      state.nome = payload.nome;
    },
  },
});

export const { setDadosResidencial } = dadosPessoaisResidencialSlice.actions;
