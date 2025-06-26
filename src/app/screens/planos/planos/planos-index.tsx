import { cn } from "@/lib/utils";
import PlanosSelector from "./planos-selector";
import * as motion from "motion/react-client";
import { LucidePackage, LucideShield, LucideWrench } from "lucide-react";

export default function PlanosIndex() {
  return (
    <section
      className={cn("pt-20 container mx-auto px-4 lg:px-0")}
      aria-labelledby={"planos-title"}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ damping: 30, bounceStiffness: 500, duration: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ damping: 30, bounceStiffness: 500, duration: 0.3 }}
          className="text-center text-3xl/[2.625rem] lg:text-5xl font-bold mb-12"
          id="planos-title"
        >
          <span className="bg-gradient-to-r from-primary-darker to-primary bg-clip-text text-transparent">
            A ServPRO tem a solução <br /> ideal para você!
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 flex flex-col h-full transition-all hover:shadow-2xl hover:-translate-y-2">
            <div className="flex justify-start mb-4 relative">
              <div className="absolute inset-0 bg-[#F26522]/10 rounded-full scale-150 blur-xl group-hover:scale-175 transition-transform duration-300" />
              <LucideWrench className="text-primary size-12 animate-float" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Já possui o equipamento?
            </h2>
            <p className="text-[#333]/80 lg:text-lg flex-grow">
              Com o plano &quot;TEM&quot;, oferecemos soluções completas para
              quem já possui o equipamento, garantindo manutenção e assistência
              técnica.
            </p>
          </div>

          <div className="md:translate-y-8">
            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 flex flex-col h-full transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-start mb-4 relative">
                <div className="absolute inset-0 bg-[#F26522]/10 rounded-full scale-150 blur-xl group-hover:scale-175 transition-transform duration-300" />
                <LucidePackage className="text-primary size-12 animate-float" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Não tem o equipamento?
              </h2>
              <p className="text-[#333]/80 lg:text-lg flex-grow">
                Com o plano &quot;LOC&quot;, nossa empresa oferece o aluguel do
                equipamento, incluindo instalação e manutenção completa.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 flex flex-col h-full transition-all hover:shadow-2xl hover:-translate-y-2">
            <div className="flex justify-start mb-4 relative">
              <div className="absolute inset-0 bg-[#F26522]/10 rounded-full scale-150 blur-xl group-hover:scale-175 transition-transform duration-300" />
              <LucideShield className="text-primary size-12 animate-float" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Quer proteger seu portão?
            </h2>
            <p className="text-[#333]/80 lg:text-lg flex-grow">
              Com o plano &quot;PROTEGE&quot;, nossos clientes recebem garantia
              de proteção extra para maior segurança e tranquilidade.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            damping: 30,
            bounceStiffness: 500,
            duration: 0.3,
            delay: 1.2,
          }}
          className="mt-28"
        >
          <PlanosSelector />
        </motion.div>
      </motion.div>
    </section>
  );
}
