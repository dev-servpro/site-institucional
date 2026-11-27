import Residencia from "../../../../../../public/images/residencia.png";
import Industria from "../../../../../../public/images/industria.png";
import Empresa from "../../../../../../public/images/empresa.png";
import Condominio from "../../../../../../public/images/condominio.png";
import Image from "next/image";
import * as motion from "motion/react-client";

const ambientes = [
  { label: "Residências", image: Residencia },
  { label: "Empresas", image: Empresa },
  { label: "Condomínios", image: Condominio },
  { label: "Indústrias", image: Industria },
];

export default function HomeAmbientesIndex() {
  return (
    <section className="bg-[#EFEAE3] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-2">
            Bem vindo,
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            Onde podemos atendê-lo
          </h2>
          <div className="mt-4 w-16 h-1 bg-amber-700 mx-auto" />
        </motion.div>

        <ul className="mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {ambientes.map(({ image, label }) => (
            <li
              className="shadow-md rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              key={label}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  className="object-cover rounded-t-md"
                  src={image}
                  alt={label}
                  quality={100}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="text-center bg-white rounded-b-md py-2 md:py-3 text-sm md:text-base font-medium">
                {label}
              </p>
            </li>
          ))}
        </ul>
        <div className="divbutton2">
        <a href="https://wa.me/5585989193078?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20queria%20saber%20mais%20sobre%20Porta%20de%20enrolar!"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="button2">Fale conosco</button>
        </a>
        </div>
      </div>
    </section>
  );
}
