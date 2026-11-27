import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Rede ServPro",
  description:
    "Saiba como a Rede ServPro coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

const sections = [
  {
    title: "1. Objetivo deste documento",
    content: (
      <>
        <p>
          Esta Política de Privacidade descreve como a{" "}
          <strong>SERVPRO SERVIÇOS PROFISSIONAIS LTDA</strong>, inscrita no CNPJ
          sob o nº 39.886.875/0001-78, com sede na Rua Irmã Bazet, 182, Bairro
          Montese, Fortaleza – CE, CEP 60420-670, tratamos os dados pessoais
          coletados por meio do site{" "}
          <Link
            href="https://redeservpro.com.br"
            className="text-amber-700 hover:text-amber-800 underline"
          >
            redeservpro.com.br
          </Link>{" "}
          e demais canais digitais vinculados à nossa marca.
        </p>
        <p>
          Ao acessar nosso site ou utilizar nossos serviços, você declara ter
          lido e compreendido esta Política de Privacidade.
        </p>
      </>
    ),
  },
  {
    title: "2. Dados que coletamos",
    content: (
      <>
        <p>Podemos coletar as seguintes categorias de dados pessoais:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Dados de identificação e contato:</strong> nome, e-mail,
            telefone, CPF/CNPJ, endereço e demais informações fornecidas
            voluntariamente em formulários, chat ou canais de atendimento.
          </li>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de
            navegador, páginas visitadas, tempo de permanência, origem de
            acesso e informações similares coletadas por cookies e tecnologias
            de analytics.
          </li>
          <li>
            <strong>Dados de comunicação:</strong> mensagens enviadas por
            WhatsApp, chat online, e-mail ou outros canais de contato.
          </li>
          <li>
            <strong>Dados comerciais:</strong> informações relacionadas a
            interesse em produtos, planos, orçamentos e contratação de
            serviços.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Como utilizamos seus dados",
    content: (
      <>
        <p>Utilizamos os dados pessoais para as seguintes finalidades:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Responder solicitações, dúvidas e pedidos de contato;</li>
          <li>
            Enviar informações sobre produtos, serviços, planos e novidades,
            quando houver consentimento ou interesse legítimo;
          </li>
          <li>Melhorar a experiência de navegação e a performance do site;</li>
          <li>Cumprir obrigações legais e regulatórias;</li>
          <li>Prevenir fraudes e garantir a segurança dos nossos sistemas.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Base legal para o tratamento",
    content: (
      <p>
        O tratamento de dados pessoais é realizado com fundamento nas bases
        legais previstas na Lei nº 13.709/2018 (LGPD), incluindo o
        consentimento do titular, a execução de contrato ou de procedimentos
        preliminares, o cumprimento de obrigação legal, o exercício regular de
        direitos e o legítimo interesse, quando aplicável.
      </p>
    ),
  },
  {
    title: "5. Cookies e tecnologias de rastreamento",
    content: (
      <>
        <p>
          Utilizamos cookies e ferramentas de análise para entender como os
          visitantes interagem com nosso site.
        </p>
        <p>
          Você pode gerenciar ou desativar cookies diretamente nas
          configurações do seu navegador. A desativação de cookies essenciais
          pode afetar o funcionamento de algumas funcionalidades do site.
        </p>
      </>
    ),
  },
  {
    title: "6. Compartilhamento de dados",
    content: (
      <>
        <p>
          Seus dados pessoais poderão ser compartilhados com prestadores de
          serviços que nos auxiliam na operação do site, atendimento ao
          cliente, marketing, hospedagem e análise de dados, sempre mediante
          contratos que garantam a proteção das informações.
        </p>
        <p className="mt-3">
          Também poderemos compartilhar dados quando necessário para cumprimento
          de obrigação legal, ordem judicial ou requisição de autoridade
          competente.
        </p>
      </>
    ),
  },
  {
    title: "7. Retenção e segurança",
    content: (
      <p>
        Mantemos os dados pessoais apenas pelo tempo necessário para cumprir as
        finalidades descritas nesta política ou conforme exigido por lei.
        Adotamos medidas técnicas e administrativas adequadas para proteger as
        informações contra acesso não autorizado, perda, alteração ou
        divulgação indevida.
      </p>
    ),
  },
  {
    title: "8. Seus direitos como titular",
    content: (
      <>
        <p>
          Nos termos da LGPD, você pode solicitar, a qualquer momento:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Confirmação da existência de tratamento de dados;</li>
          <li>Acesso, correção ou atualização de dados incompletos;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Eliminação de dados tratados com base no consentimento;</li>
          <li>Informação sobre compartilhamentos realizados;</li>
          <li>Revogação do consentimento, quando aplicável.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Contato",
    content: (
      <>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre esta Política
          de Privacidade, entre em contato conosco:
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li>
            <strong>E-mail:</strong>{" "}
            <Link
              href="mailto:contato@redeservpro.com.br"
              className="text-amber-700 hover:text-amber-800 underline"
            >
              contato@redeservpro.com.br
            </Link>
          </li>
          <li>
            <strong>Telefone:</strong> 0800 090 1234
          </li>
          <li>
            <strong>Endereço:</strong> Rua Irmã Bazet, 182, Bairro Montese,
            Fortaleza – CE, CEP 60420-670
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Alterações desta política",
    content: (
      <>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente para
          refletir mudanças legais, operacionais ou tecnológicas.
        </p>
        <p>
          Notificaremos o Usuário sobre eventuais alterações nesta Política, de
          modo destacado, para que o Usuário tenha pleno conhecimento do
          conteúdo alterado.
        </p>
      </>
    ),
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-3">
            Institucional
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-4 drop-shadow-sm">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Transparência sobre como tratamos seus dados pessoais, em
            conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
          <div className="mt-6 w-20 h-1 bg-amber-700 mx-auto" />
        </div>

        <article className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                {section.content}
              </div>
            </section>
          ))}

          <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
            Última atualização: 20 de agosto de 2026.
          </p>
        </article>
      </div>
    </section>
  );
}
