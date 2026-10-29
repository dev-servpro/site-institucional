import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getVagaBySlugMock, getVagasMock } from "@/data/vagas-mock";
import CandidatarSeButton from "./CandidatarSeButton";

interface VagaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const vagas = await getVagasMock();
  return vagas.map((vaga) => ({
    slug: vaga.slug,
  }));
}

export default async function VagaPage({ params }: VagaPageProps) {
  const { slug } = await params;
  const vaga = await getVagaBySlugMock(slug);

  if (!vaga) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/trabalhe-conosco"
            className="text-amber-700 hover:text-amber-800 transition-colors duration-200"
          >
            ← Voltar para vagas
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
              {vaga.tipoContrato}
            </span>
            <span className="text-gray-500 text-sm">
              Publicado em{" "}
              {new Date(vaga.dataPublicacao).toLocaleDateString("pt-BR")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {vaga.titulo}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
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

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 mb-8 rounded-2xl overflow-hidden">
          <Image
            src={vaga.imagem}
            alt={vaga.titulo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4"></h2>
            <p className="text-gray-700 leading-relaxed">{vaga.descricao}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Atividades */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                O que você vai fazer por aqui :
              </h3>
              <ul className="space-y-2">
                {vaga.atividades.map((atividade, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="text-amber-700 mt-1">•</span>
                    <span>{atividade}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requisitos */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                O que esperamos de você :
              </h3>
              <ul className="space-y-2">
                {vaga.requisitos.map((requisito, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="text-amber-700 mt-1">•</span>
                    <span>{requisito}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefícios */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                O que oferecemos :
              </h3>
              <ul className="space-y-2">
                {vaga.beneficios.map((beneficio, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="text-amber-700 mt-1">•</span>
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interessado nesta oportunidade?
            </h3>
            <p className="text-gray-600 mb-6">
              Envie seu currículo e faça parte da nossa equipe!
            </p>

            <CandidatarSeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
