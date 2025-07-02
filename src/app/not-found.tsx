import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white px-4 py-16">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-amber-700 mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Ops! A página que você está procurando não existe ou foi movida.<br />
          Volte para a página inicial ou explore outros conteúdos do site.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-amber-800 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para o início
        </Link>
      </div>
    </div>
  );
} 