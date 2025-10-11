'use client';

import { useEffect, useState } from 'react';
import { pedidosFake, Pedido } from './pedidosFake';

export default function AreaCliente() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    setPedidos(pedidosFake);
  }, []);

  return (
    <section className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-primary mb-4">Área do Cliente</h1>
      <p className="text-gray-600 mb-4">Bem-vindo à sua área exclusiva.</p>

      {pedidos.map((pedido) => (
        <div
          key={pedido.id}
          className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">Pedido: {pedido.id}</h2>
          <p><strong>Data:</strong> {pedido.data}</p>
          <p><strong>Status:</strong> {pedido.status}</p>
          <p><strong>Produtos:</strong> {pedido.produtos.join(', ')}</p>
          <p><strong>Código de Rastreio:</strong> {pedido.rastreio}</p>
        </div>
      ))}
    </section>
  );
}




  
  