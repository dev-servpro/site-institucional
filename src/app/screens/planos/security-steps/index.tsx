import { HelpCircle, ShoppingBag, Home } from "lucide-react";
import * as motion from "motion/react-client";

export default function SecuritySteps() {
  return (
    <section className="w-full py-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#505050] flex items-center justify-center gap-4 text-primary-darker">
            Passo a passo para a segurança
          </h2>
          <p className="text-lg text-[#666666] mt-4">
            Para te atender melhor precisamos entender sua necessidade.
          </p>
        </motion.div>

        {/* Stepper line above with numbers */}
        <div className="w-full max-w-5xl mx-auto mb-8 relative flex justify-between">
          <div className="h-1 bg-[#FF6B1A] opacity-30 w-full rounded-full absolute left-0 top-1/2 -translate-y-1/2 z-0"></div>
          {/* Step numbers */}
          <div className="flex w-full justify-between relative z-10">
            <div className="flex-1 flex justify-center relative">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF6B1A] text-white font-bold text-lg shadow-md border-4 border-white absolute -top-4">
                1
              </span>
            </div>
            <div className="flex-1 flex justify-center relative">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF6B1A] text-white font-bold text-lg shadow-md border-4 border-white absolute -top-4">
                2
              </span>
            </div>
            <div className="flex-1 flex justify-center relative">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF6B1A] text-white font-bold text-lg shadow-md border-4 border-white absolute -top-4">
                3
              </span>
            </div>
          </div>
        </div>
        {/* Step cards below */}
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-center gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm min-h-full transition hover:shadow-lg cursor-pointer">
            <HelpCircle className="w-12 h-12 text-[#FF6B1A] bg-[#FFF3E8] rounded-full p-2 mb-2 animate-float" />
            <span className="text-sm text-gray-600 mb-2">Equipamento</span>
            <span className="text-base font-bold text-[#333] mb-2">
              Nos conte se já possui ou não o equipamento
            </span>
            <span className="text-gray-500 text-sm mt-auto">
              Avaliamos suas necessidades para oferecer a melhor solução.
            </span>
          </div>
          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm h-full transition hover:shadow-lg cursor-pointer">
            <ShoppingBag className="w-12 h-12 text-[#FF6B1A] bg-[#FFF3E8] rounded-full p-2 mb-2 animate-float" />
            <span className="text-sm text-gray-600 mb-2">Carrinho</span>
            <span className="text-base font-bold text-[#333] mb-2">
              Adicione tudo que precisa para a segurança do seu lar no carrinho
            </span>
            <span className="text-gray-500 text-sm mt-auto">
              Escolha os serviços e produtos, e deixe o resto conosco.
            </span>
          </div>
          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm h-full transition hover:shadow-lg cursor-pointer">
            <Home className="w-12 h-12 text-[#FF6B1A] bg-[#FFF3E8] rounded-full p-2 mb-2 animate-float" />
            <span className="text-sm text-gray-600 mb-2">Instalação</span>
            <span className="text-base font-bold text-[#333] mb-2">
              Instalação feita, manutenção, funcionamento e segurança garantidas
            </span>
            <span className="text-gray-500 text-sm mt-auto">
              Aproveite a tranquilidade de um serviço completo e confiável.
            </span>
          </div>
        </div>
        <div className="text-center mt-8">
          <span className="text-gray-400 italic text-sm">
            Obs: Em alguns casos, é necessária a visita de um técnico para
            avaliação do projeto.
          </span>
        </div>
      </div>
    </section>
  );
}
