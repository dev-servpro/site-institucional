export type Pedido = {
  id: string;
  data: string;
  status: string;
  produtos: string[];
  rastreio: string;
};

export const pedidosFake: Pedido[] = [
  {
    id: "PED123",
    data: "2025-10-01",
    status: "Em transporte",
    produtos: ["Camiseta Preta", "Boné Azul"],
    rastreio: "BR1234567890",
  },
  {
    id: "PED124",
    data: "2025-09-15",
    status: "Entregue",
    produtos: ["Tênis Esportivo"],
    rastreio: "BR9876543210",
  },
];
