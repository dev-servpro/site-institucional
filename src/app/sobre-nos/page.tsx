import { TimelineDemo } from "../screens/home/components/timeline/timeline-home.index";

export default function SobreNosPage() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-4 drop-shadow-sm">Sobre Nós</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça a trajetória da ServPro: uma história de dedicação, inovação e compromisso com a qualidade. Descubra como nos tornamos referência em soluções completas para automação, segurança e arquitetura.
          </p>
        </div>
        <TimelineDemo />
      </div>
    </section>
  );
}
