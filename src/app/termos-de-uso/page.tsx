import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Rede ServPro",
  description:
    "Conheça as condições de uso do site e dos serviços digitais da Rede ServPro.",
};

const sections = [
  {
    title: "1. Aceitação dos termos",
    content: (
      <>
        <p>
          Estes Termos de Uso regulam o acesso e a utilização do site{" "}
          <Link
            href="https://redeservpro.com.br"
            className="text-amber-700 hover:text-amber-800 underline"
          >
            redeservpro.com.br
          </Link>{" "}
          e demais canais digitais operados pela{" "}
          <strong>SERVPRO SERVIÇOS PROFISSIONAIS LTDA</strong>, inscrita no CNPJ
          sob o nº 39.886.875/0001-78, com sede na Rua Irmã Bazet, 182, Bairro
          Montese, Fortaleza – CE, CEP 60420-670.
        </p>
        <p>
          Ao acessar ou utilizar nosso site, você declara ter lido, compreendido
          e concordado com estes Termos de Uso e com nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-amber-700 hover:text-amber-800 underline"
          >
            Política de Privacidade
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "2. Objetivo",
    content: (
      <p>
        O site tem caráter informativo e comercial, destinado à divulgação de
        produtos, soluções e serviços relacionados a automação, segurança
        eletrônica, controle de acesso, CFTV, portas automáticas e demais
        linhas oferecidas pela Rede ServPro. O conteúdo disponibilizado não
        substitui orientação técnica personalizada, proposta comercial formal ou
        contrato de prestação de serviços.
      </p>
    ),
  },
  {
    title: "3. Uso permitido",
    content: (
      <>
        <p>
          Você concorda em utilizar o site de forma lícita, respeitosa e de
          acordo com estes Termos. É permitido:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Navegar e consultar informações sobre produtos e serviços;</li>
          <li>
            Entrar em contato conosco por meio dos canais disponibilizados no
            site;
          </li>
          <li>
            Solicitar orçamentos, informações comerciais ou suporte, quando
            aplicável;
          </li>
          <li>
            Compartilhar conteúdo do site para fins informativos, desde que
            preserve a integridade das informações e a identificação da Rede
            ServPro.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Condutas proibidas",
    content: (
      <>
        <p>É expressamente proibido, entre outras condutas:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            Utilizar o site para fins ilícitos, fraudulentos ou que violem
            direitos de terceiros;
          </li>
          <li>
            Tentar acessar áreas restritas, sistemas ou dados sem autorização;
          </li>
          <li>
            Introduzir vírus, malware ou qualquer código malicioso;
          </li>
          <li>
            Copiar, reproduzir, modificar ou distribuir conteúdo do site sem
            autorização prévia, quando aplicável;
          </li>
          <li>
            Utilizar robôs, scrapers ou ferramentas automatizadas de forma
            abusiva que comprometa a estabilidade do site;
          </li>
          <li>
            Enviar informações falsas, incompletas ou de terceiros sem
            consentimento.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Propriedade intelectual",
    content: (
      <>
      <p>
      Você, Usuário, é titular de todo o conteúdo que inserir no Site,
      sob qualquer forma. Você declara, ainda, que o conteúdo inserido no Site é de sua autoria ou,
      sendo de autoria de terceiro, que você detém as autorizações e licenças necessárias para utilizar tal conteúdo.
      A <strong>SERVPRO SERVIÇOS PROFISSIONAIS LTDA</strong> não é responsável caso você utilize, insira,
      manipule ou apresente conteúdo de autoria de terceiro como sendo de sua autoria ou,
      ainda que o faça falsamente alegando que tem autorização do titular do conteúdo para tal.
      </p>
      <p>
        Todo o conteúdo do site — incluindo textos, imagens, logotipos, marcas,
        layout, vídeos, catálogos e demais materiais — é protegido por direitos
        de propriedade intelectual e pertence à Rede ServPro ou a licenciadores
        autorizados. O uso não autorizado de qualquer material pode configurar
        violação de direitos autorais, de marca ou de outras normas aplicáveis.
      </p>
      <p>
        A <strong>SERVPRO SERVIÇOS PROFISSIONAIS LTDA</strong> é titular exclusiva de todos os direitos, morais e patrimoniais,
        incidentes ou eventualmente incidentes sobre aspectos visuais e/ou artísticos do Site, de suas respectivas interfaces,
        bem como o código-fonte, os elementos técnicos, de design, de processos, relatórios, e outros que nos ajudam a caracterizar o Site,
        todos os sinais distintivos, marcas, logos e qualquer material passível de proteção por direitos autorais ou propriedade industrial.
        </p>
        <p>
        Para permitir sua utilização do Site, a  <strong>SERVPRO SERVIÇOS PROFISSIONAIS LTDA</strong> concede,
        pela duração da manutenção da sua Conta, uma licença de uso pessoal, limitada, revogável, intransferível,
        não exclusiva e não passível de sublicenciamento, dos direitos de propriedade intelectual necessários à utilização do Site,
        o que não inclui direitos de reprodução, alteração, comunicação ao público ou qualquer forma de distribuição.
        É estritamente proibida qualquer tipo de cópia, alteração ou redistribuição da aplicação, do website,
        do código-fonte ou de qualquer elemento incluído sob a sigla Propriedade Intelectual, em parte ou no todo.
        Você também concorda que não vai fazer, tentar fazer, ou ajudar alguém a fazer nenhum tipo de engenharia reversa ou,
        tentativa de acesso ao código fonte e estrutura do banco de dados, em relação ao Serviço.
        </p>
      </>
    ),
  },
  {
    title: "6. Informações, preços e disponibilidade",
    content: (
      <>
        <p>
          As informações apresentadas no site, incluindo descrições de
          produtos, especificações técnicas, imagens e valores, são fornecidas
          para fins informativos e podem ser alteradas a qualquer momento, sem
          aviso prévio.
        </p>
        <p className="mt-3">
          Eventuais preços, condições comerciais, prazos de entrega e
          disponibilidade de produtos ou serviços devem ser confirmados
          diretamente com nossa equipe comercial ou por meio de proposta formal.
        </p>
      </>
    ),
  },
  {
    title: "7. Links para sites de terceiros",
    content: (
      <p>
        O site pode conter links para páginas externas, como redes sociais,
        parceiros comerciais ou plataformas de atendimento. A Rede ServPro não
        se responsabiliza pelo conteúdo, políticas ou práticas adotadas por
        sites de terceiros. Recomendamos a leitura dos termos e políticas de
        privacidade de cada plataforma acessada.
      </p>
    ),
  },
  {
    title: "8. Responsabilidade",
    content: (
      <>
        <p>
          Empregamos esforços razoáveis para manter o site disponível, seguro e
          atualizado. Contudo, não garantimos que o site funcionará de forma
          ininterrupta, livre de erros ou totalmente compatível com todos os
          dispositivos e navegadores.
        </p>
        <p className="mt-3">
          A Rede ServPro não se responsabiliza por danos diretos ou indiretos
          decorrentes do uso ou da impossibilidade de uso do site, salvo nos
          casos previstos em lei. Decisões tomadas com base exclusivamente em
          informações do site, sem validação comercial ou técnica, são de
          responsabilidade do usuário.
        </p>
      </>
    ),
  },
  {
    title: "9. Privacidade e proteção de dados",
    content: (
      <p>
        O tratamento de dados pessoais coletados por meio do site é regido pela
        nossa{" "}
        <Link
          href="/politica-de-privacidade"
          className="text-amber-700 hover:text-amber-800 underline"
        >
          Política de Privacidade
        </Link>
        , em conformidade com a Lei Geral de Proteção de Dados (LGPD).
      </p>
    ),
  },
  {
    title: "10. Legislação aplicável e foro",
    content: (
      <p>
        Estes Termos de Uso são regidos pelas leis da República Federativa do
        Brasil. Fica eleito o foro da Comarca de Fortaleza – CE para dirimir
        quaisquer controvérsias decorrentes destes termos, com renúncia a
        qualquer outro, por mais privilegiado que seja, salvo disposição legal
        em contrário.
      </p>
    ),
  },
  {
    title: "11. Contato",
    content: (
      <>
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato
          conosco:
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
];

export default function TermosDeUsoPage() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-3">
            Institucional
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-4 drop-shadow-sm">
            Termos de Uso
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Condições para utilização do site e dos canais digitais da Rede
            ServPro.
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
