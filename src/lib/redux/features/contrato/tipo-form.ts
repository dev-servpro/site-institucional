import { createSlice } from "@reduxjs/toolkit";

export interface TipoContrato {
  enderecoCobrancaIgual: boolean;
  tipoContrato: "res" | "jur";
}

export const tipoContrato: TipoContrato = {
  enderecoCobrancaIgual: false,
  tipoContrato: "res",
};

export const tipoContratoSlice = createSlice({
  name: "tipoContrato",
  initialState: tipoContrato,
  reducers: {
    setTipoContratoReducer(state, { payload }: { payload: TipoContrato }) {
      state.enderecoCobrancaIgual = payload.enderecoCobrancaIgual;
      state.tipoContrato = payload.tipoContrato;
    },
  },
});

export const { setTipoContratoReducer } = tipoContratoSlice.actions;
