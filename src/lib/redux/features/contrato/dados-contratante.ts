import { createSlice } from "@reduxjs/toolkit";

export interface DadosContratante {
  cpf_cnpj: string;
  vencimento: string;
  email: string;
  phone: string;
}

export const dadosContratante: DadosContratante = {
  cpf_cnpj: "",
  vencimento: "",
  email: "",
  phone: "",
};

export const dadosContratanteSlice = createSlice({
  name: "dadosContratante",
  initialState: dadosContratante,
  reducers: {
    setDadosContratante(
      state,
      { payload }: { payload: DadosContratante }
    ) {
      state.cpf_cnpj = payload.cpf_cnpj;
      state.vencimento = payload.vencimento;
      state.email = payload.email;
      state.phone = payload.phone;
    },
  },
});

export const { setDadosContratante } = dadosContratanteSlice.actions;
