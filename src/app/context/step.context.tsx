import { createContext } from "react";

export interface FormContext {
  goNext: () => void;
}

export const StepContext = createContext<FormContext>({
  goNext: () => {},
});