import { Shield, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Nossos produtos são desenvolvidos com os mais altos padrões de qualidade e segurança, garantindo durabilidade e confiabilidade."
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Nossa equipe está sempre pronta para atender você com agilidade e eficiência, desde o primeiro contato até a instalação."
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Contamos com profissionais altamente qualificados e experientes para garantir a melhor solução para sua necessidade."
  },
  {
    icon: Award,
    title: "Satisfação Garantida",
    description: "Nosso compromisso é com a sua satisfação total. Trabalhamos para superar suas expectativas em cada etapa do processo."
  }
];

export default function WhyChooseUsIndex() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Por que nos escolher</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acreditamos que só o trabalho constrói. Conheça os diferenciais que nos tornam a melhor escolha para sua segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 