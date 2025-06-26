import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import extenso from "extenso";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Estilos para o PDF
// Componente do PDF
export const ContratoServTemJur = ({
  bairro,
  cidade,
  cnpj,
  logradouro,
  nome,
  nomeResponsavel,
  uf,
  price,
  vencimento,
  numero,
  complemento,
}: {
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  cnpj: string;
  email: string;
  logradouro: string;
  nome: string;
  nomeResponsavel: string;
  numero: string;
  referencia: string;
  telefone: string;
  uf: string;
  price: number;
  vencimento: number;
}) => {
  return (
    <Document>
      {/* Página 1 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>
          TERMO DE INTENÇÃO PARA PRESTAÇÃO DE SERVIÇO EM EQUIPAMENTOS
          ELETRÔNICOS
        </Text>

        <Text style={styles.sectionTitle}>1. Das Partes</Text>
        <Text style={styles.clause}>
          <Text style={styles.bold}>CONTRATADA: </Text>
          SERVPRO SERVIÇOS PROFISSIONAIS LTDA, CNPJ: 39.886.875/0001-78, situada
          na Rua Irmã Bazet, 182, Bairro Montese, Fortaleza - CE, CEP
          60.420-670.
        </Text>
        <Text style={styles.clause}>
          <Text style={styles.bold}>CONTRATANTE:</Text> {nome.toUpperCase()}, CNPJ: {cnpj},
          com localização na {logradouro.toUpperCase()}, {numero}
          {complemento ? ", " + complemento.toUpperCase() : ""}, {bairro.toUpperCase()}, {cidade.toUpperCase()} - {uf.toUpperCase()},
          representado por {nomeResponsavel.toUpperCase()}.
        </Text>

        <Text style={styles.sectionTitle}>2. Do Objeto</Text>
        <Text style={styles.clause}>
          Este termo tem como objetivo a prestação de serviço para manutenção
          preventiva e corretiva dos equipamentos eletrônicos, garantindo seu
          funcionamento adequado no endereço do CONTRATANTE.
        </Text>
        <Text style={styles.sectionTitle}>3. OBRIGAÇÕES DAS PARTES</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>3.1</Text> O CONTRATANTE deve solicitar
          manutenções corretivas sempre que necessário
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>3.2</Text> A CONTRATADA se compromete a
          realizar manutenções preventivas mensais e atender manutenções
          corretivas dentro de 24h, das 8h às 22h, todos os dias.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>3.3</Text> Danos por mau uso, vandalismo ou
          fatores externos (chuva, quedas de energia, sobrecarga) serão de
          responsabilidade do CONTRATANTE.
        </Text>

        <Text style={styles.sectionTitle}>4. Preço e Pagamento</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.1</Text> Valor mensal:{" "}
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          ({extenso(price, { mode: "currency", currency: { type: "BRL" } })}),
          com vencimento todo dia {vencimento} (
          {extenso(vencimento, { mode: "number" })}) a ser pago por meio de
          boleto bancário ou carnê.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.2</Text> Atrasos geram multa de 2%, juros
          de 10% ao mês e correção pelo INPC.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.3</Text> Inadimplência superior a 30 dias
          resulta na rescisão do contrato.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.4</Text> Novas instalações ou mudanças
          serão cobradas à parte.
        </Text>

        <Text style={styles.sectionTitle}>5. PRAZO E RESCISÃO</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.1</Text> Contrato por prazo indeterminado.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.2</Text> Qualquer parte pode rescindir
          mediante aviso prévio de 30 dias por escrito.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.3</Text> Atraso superior a 60 dias pode
          levar ao cancelamento do contrato e inclusão do nome do CONTRATANTE em
          órgãos de proteção ao crédito.
        </Text>

        <Text style={styles.sectionTitle}>6. DISPOSIÇÕES GERAIS</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.1</Text> A CONTRATANTE é responsável por
          eventuais danos nos equipamentos devido a infraestrutura inadequada ou
          problemas elétricos.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.2</Text> Equipamentos devem ser devolvidos
          nas mesmas condições em que foram recebidos, salvo desgaste natural.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.3</Text> Não há garantia contra ações
          criminosas ou de terceiros que ingressem nas dependências sem
          identificação.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.4</Text> A CONTRATADA é responsável por
          encargos trabalhistas e previdenciários de seus funcionários.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.5</Text> Em hipótese alguma, a{" "}
          <Text style={styles.bold}>CONTRATADA</Text> dará garantia contra ação
          de criminosos ou ações de terceiros que adentrarem sem identificação,
          mas com o consentimento dos usuários.
        </Text>

        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Fortaleza (CE), {format(new Date(), "dd", { locale: ptBR })} de{" "}
          {format(new Date(), "MMMM", { locale: ptBR })} de{" "}
          {format(new Date(), "yyyy", { locale: ptBR })}
        </Text>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11, // Tamanho padrão para o texto
    lineHeight: 1,
    fontFamily: "Times-Roman",
    textAlign: "justify",
  },
  title: {
    fontSize: 11, // Tamanho específico para o título
    marginBottom: 10,
    fontFamily: "Times-Bold",
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 11,
    marginBottom: 10,
    fontWeight: "700",
    fontFamily: "Times-Bold",
    textTransform: "uppercase",
  },
  clause: {
    marginBottom: 5,
    textAlign: "justify",
    lineHeight: 1,
  },
  subClause: {
    marginBottom: 2,
    textAlign: "justify",
    lineHeight: 1,
    marginLeft: 20, // Recuo para subcláusulas
  },
  bold: {
    fontWeight: "700",
    fontFamily: "Times-Bold",
  },
  paragraph: {
    marginLeft: 20,
    marginBottom: 5,
    textAlign: "justify",
    lineHeight: 1,
  },
  signatureSection: {
    marginTop: 5,
  },
  signature: {
    marginTop: 5,
    textAlign: "center",
  },
  preSignature: {
    marginBottom: 10,
    textAlign: "center",
  },
  signatureLine: {
    width: 200, // Largura da linha de assinatura
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  underline: {
    textDecoration: "underline",
  },
});

// Estilos para o PDF
