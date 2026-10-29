import { Card } from "../../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

const testimonials = [
  {
    name: "Gerlene Veras",
    role: "Cliente SERVPRO",
    content: "Excelente aquisição! A SERVPRO passa segurança, agente pode confiar, seu produto é de qualidade. O Portão da garagem ficou muito lindo e o automático é super veloz, os funcionários da entrega, da instalação e pós-venda super atenciosos também!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gerlene"
  },
  {
    name: "Nathally Kimberly",
    role: "Cliente SERVPRO",
    content: "Tive uma ótima experiência com a compra do portão da minha casa. O vendedor Junrley Martins foi super atencioso desde o atendimento até o acompanhamento das obras com as medidas específicas. Estou muito satisfeita com a empresa e recomendo.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nathally"
  },
  {
    name: "Bruno Camboim",
    role: "Cliente SERVPRO",
    content: "Fomos muito bem atendidos pela gestora Débora Lima desde o inicio com o orçamento, até o fechamento do pedido. A equipe que fez a instalação do motor no portão nos atendeu com agilidade e o produto é de ótima qualidade.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bruno"
  }
];

export default function TestimonialsIndex() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 