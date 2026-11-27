"use client";

import { Plano } from "@/data/produtos";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type PlanoType = `${Plano}`;

interface PlanoContextType {
  selectedPlano: PlanoType | "";
  linha: string;
  setLinha: Dispatch<SetStateAction<string>>;
  setSelectedPlano: Dispatch<SetStateAction<PlanoType | "">>;
}

const PlanoContext = createContext<PlanoContextType | undefined>(undefined);

export function PlanoProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlano, setSelectedPlano] = useState<PlanoType | "">("");
  const [linha, setLinha] = useState<string>("");

  return (
    <PlanoContext.Provider
      value={{
        selectedPlano,
        setSelectedPlano,
        linha,
        setLinha,
      }}
    >
      {children}
    </PlanoContext.Provider>
  );
}

export function usePlano() {
  const context = useContext(PlanoContext);
  if (context === undefined) {
    throw new Error("usePlano must be used within a PlanoProvider");
  }
  return context;
}
