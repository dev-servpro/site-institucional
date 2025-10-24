import Link from "next/link";
import Image from "next/image";
import { getVagasMock } from "@/data/vagas-mock";

export const dynamic = "force-dynamic";

export default async function TrabalheConoscoPage() {
  const vagas = await getVagasMock();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-3">
              Carreiras
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trabalhe Conosco
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Junte-se à nossa equipe e faça parte de uma empresa que valoriza a
              inovação e o crescimento profissional.
            </p>
            <div className="mt-6 w-20 h-1 bg-amber-700 mx-auto" />
          </div>

          <div className="space-y-6">
            {vagas.map((vaga) => (
              <div
                key={vaga.slug}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <Link href={`/trabalhe-conosco/${vaga.slug}`} className="block">
                  <div className="flex flex-col lg:flex-row">
                    {/* Imagem */}
                    <div className="relative w-full lg:w-80 h-48 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={vaga.imagem}
                        alt={vaga.titulo}
                        fill
                        sizes="(max-width: 1024px) 100vw, 320px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {vaga.tipoContrato}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-200 mb-3">
                            {vaga.titulo}
                          </h2>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {vaga.descricao}
                          </p>

                          {/* Informações principais */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/loc-icon.svg"
                                alt="localização"
                                width={16}
                                height={16}
                              />
                              <span>{vaga.localizacao}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>{vaga.salario}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>{vaga.horario}</span>
                            </div>
                          </div>
                        </div>

                        {/* Botão */}
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg font-medium group-hover:bg-amber-800 transition-colors duration-200">
                            <span>Ver detalhes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {vagas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhuma vaga disponível no momento.
              </p>
              <p className="text-gray-400 mt-2">
                Cadastre-se em nossa newsletter para ser notificado sobre novas
                oportunidades.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
