
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ProtegePortaoIndex() {
  return (
    <section className="w-full py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
        >
          {/* Logo Circle */}
          <div className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-white shadow-lg flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              <Image
                src="/images/protege-portao-logo.png"
                alt="Protege Portão ServPro"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold text-[#505050] mb-4"
            >
              Protege Portão
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-[#666666] mb-6"
            >
              Proteção completa para o seu portão e veículos. 
              Cobertura para sinistros, manutenção e assistência 24h.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#planos" 
                className="inline-block bg-[#FFA74A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF9A33] transition-colors"
              >
                Saiba mais
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 