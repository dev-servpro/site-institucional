import { Users, Clock, Award, Building } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2500+",
    label: "Clientes satisfeitos",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    value: "18",
    label: "Anos de experiência",
    color: "text-green-600"
  },
  {
    icon: Building,
    value: "150",
    label: "Atendimentos por dia",
    color: "text-purple-600"
  },
  {
    icon: Award,
    value: "100+",
    label: "Colaboradores",
    color: "text-orange-600"
  }
];

export default function StatsIndex() {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 