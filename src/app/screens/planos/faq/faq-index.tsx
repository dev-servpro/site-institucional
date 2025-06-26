import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export default function FaqIndex() {
  return (
    <section
      className="px-5 py-12 container mx-auto"
      aria-labelledby="faq-title-id"
    >
      <h3
        className="text-primary-darker text-2xl/[2.5rem] lg:text-4xl text-left font-medium"
        id="faq-title-id"
      >
        Perguntas Frequentes
      </h3>

      <div className="mt-8">
        <Accordion className="space-y-4" type="multiple">
          <AccordionItem value="1">
            <AccordionTrigger className="hover:no-underline text-foreground text-base font-semibold">
              Como eu faço para autorizar meu pedido?
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Clique no botão laranja logo a cima e selecione a forma de
                pagamento, seu consultor(a) receberá a autorização por e-mail.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2">
            <AccordionTrigger className="hover:no-underline text-foreground text-base font-semibold">
              Como posso acompanhar o prazo de entrega do meu pedido?
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Caso o produto não tenha pronta-entrega, o prazo estipulado é de
                até 20 ( vinte ) dias úteis a contar da data do seu pedido. Você
                pode entrar em contato direto com a equipe de atendimento,
                através do telefone constante neste orçamento, de segunda a
                sexta-feira das 8:00 às 17:00, ou sábado das 8:00 às 12:00,
                tendo em mãos o número do pedido.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3">
            <AccordionTrigger className="hover:no-underline text-foreground text-base font-semibold">
              Como funciona a garantia dos produtos SERVPRO?
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                A garantia é de 01 (um) ano a partir da data da compra, sendo
                que após os primeiros 90 dias é cobrado apenas uma taxa de
                visita técnica caso haja necessidade
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="4">
            <AccordionTrigger className="hover:no-underline text-foreground text-base font-semibold">
              A SERVPRO cobre qualquer proposta?
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Sim. Só será válido se for apresentado anúncio, tablóide ou
                proposta impressa do concorrente com produto, marca, modelo e
                preço à vista de forma clara e legível. O anúncio ou tablóide ou
                proposta do concorrente deverá ficar retido com o nosso gerente
                ou representante.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="5">
            <AccordionTrigger className="hover:no-underline text-foreground text-base font-semibold">
              Quais os serviços que serão por conta do CLIENTE ?
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Serviços de alvenaria, tubulação, canaletas, haste de
                aterramento, frete fora da praça da unidade de fabricação da
                SERVPRO.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
