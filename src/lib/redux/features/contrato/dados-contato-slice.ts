import { createSlice } from "@reduxjs/toolkit";

export interface DadosContato {
  email: string;
  telefone: string;
}

export const dadosContato: DadosContato = {
  email: "",
  telefone: "",
};

export const dadosContatoSlice = createSlice({
  name: "dadosContato",
  initialState: dadosContato,
  reducers: {
    setDadosContato(
      state,
      { payload }: { payload: { email: string; telefone: string } }
    ) {
      state.email = payload.email;
      state.telefone = payload.telefone;
    },
  },
});

export const { setDadosContato } = dadosContatoSlice.actions;
