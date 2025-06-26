import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import extenso from "extenso";

// Estilos para o PDF
// Componente do PDF
export const ContratoServLocJur = ({
  bairro,
  cidade,
  cnpj,
  nomeResponsavel,
  logradouro,
  nome,
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
  nomeResponsavel: string;
  email: string;
  logradouro: string;
  nome: string;
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
          TERMO DE INTENÇÃO PARA PRESTAÇÃO DE SERVIÇO E LOCAÇÃO DE EQUIPAMENTOS
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
          com localização na {logradouro.toUpperCase()}, {numero.toUpperCase()}
          {complemento ? ", " + complemento.toUpperCase() : ""}, {bairro.toUpperCase()}, {cidade.toUpperCase()} - {uf.toUpperCase()},
          representado por {nomeResponsavel.toUpperCase()}.
        </Text>

        <Text style={styles.sectionTitle}>2. Do Objeto</Text>
        <Text style={styles.clause}>
          Locação de equipamentos eletrônicos da SERVPRO para instalação no
          endereço do LOCATÁRIO, Os equipamentos permanecem de propriedade da
          LOCADORA e devem ser utilizados exclusivamente para os fins
          contratados.
        </Text>
        <Text style={styles.sectionTitle}>3. OBRIGAÇÕES DAS PARTES</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>3.1 LOCADORA:</Text> Instalação e manutenção
          preventiva e corretiva dos equipamentos. Atendimento técnico em até
          24h após o chamado.
          <Text style={styles.bold}>3.2 LOCADORA:</Text> Manter os equipamentos
          em boas condições e permitir o acesso para manutenção.
          Responsabiliza-se por danos causados por mau uso, vandalismo ou
          eventos externos (ex.: falta de energia, sobrecarga elétrica).
        </Text>

        <Text style={styles.sectionTitle}>4. Preço e Pagamento</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.1</Text> Valor mensal:
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          ({extenso(price, { mode: "currency", currency: { type: "BRL" } })})
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.2</Text> Pagamento até o dia {vencimento}{" "}
          ({extenso(vencimento, { mode: "number" })}) de cada mês via boleto.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.3</Text> Reajuste anual pelo IPCA.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.4</Text> Multa de 2% e juros de 10% ao mês
          em caso de atraso.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>4.5</Text> Suspensão dos serviços após 60
          dias de inadimplência.
        </Text>

        <Text style={styles.sectionTitle}>5. PRAZO E RESCISÃO</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.1</Text> Vigência de 24 meses.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.2</Text> Rescisão antecipada: Multa de 30%
          do saldo contratual.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.3</Text> Não há multa se a LOCADORA
          descumprir suas obrigações ou em caso fortuito/força maior.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.3</Text> Aviso prévio de 30 dias para
          rescisão.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>5.3</Text> Retirada dos equipamentos pela
          LOCADORA em até 10 dias úteis após o término do contrato.
        </Text>

        <Text style={styles.sectionTitle}>6. DISPOSIÇÕES GERAIS</Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.1</Text> O LOCATÁRIO deve garantir
          infraestrutura adequada para funcionamento dos equipamentos.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.2</Text> A LOCADORA não se responsabiliza
          por danos decorrentes de ações criminosas ou terceiros.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.3</Text> Eventuais alterações neste termo
          serão formalizadas por aditivo contratual.
        </Text>
        <Text style={styles.subClause}>
          <Text style={styles.bold}>6.4</Text> Foro competente: Fortaleza-CE.
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
