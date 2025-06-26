import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cart-slice";
import { dadosContatoSlice } from "./features/contrato/dados-contato-slice";
import { dadosEnderecoSlice } from "./features/contrato/dados-endereco";
import { dadosPessoaisResidencialSlice } from "./features/contrato/dados-pessoais-residencial";
import { dadosPessoaisJuridicosSlice } from "./features/contrato/dados-pessoais-juridico";
import { tipoContratoSlice } from "./features/contrato/tipo-form";
import { dadosContratanteSlice } from "./features/contrato/dados-contratante";
import { dadosEnderecoCobrancaSlice } from "./features/contrato/dados-endereco-cobranca";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      dadosContato: dadosContatoSlice.reducer,
      dadosEndereco: dadosEnderecoSlice.reducer,
      dadosEnderecoCobranca: dadosEnderecoCobrancaSlice.reducer,
      dadosPessoaisResidencial: dadosPessoaisResidencialSlice.reducer,
      dadosPessoaisJuridicos: dadosPessoaisJuridicosSlice.reducer,
      tipoContrato: tipoContratoSlice.reducer,
      dadosContratante: dadosContratanteSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
