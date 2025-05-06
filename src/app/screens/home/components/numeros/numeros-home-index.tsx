import { NumberTicker } from "@/components/magicui/number-ticker";

const bulletPoints = [
  { label: "Atendimentos por dia", number: 150 },
  { label: "Clientes satisfeitos", number: 2500 },
  { label: "colaboradores", number: 100 },
  { label: "anos de experiencia", number: 18 },
];

export default function NumerosHomeIndex() {
  return (
    <section className="container mx-auto">
      <ul className="flex items-center justify-center space-x-16 mt-30 mb-10">
        {bulletPoints.map(({ label, number }) => {
          return (
            <li className="flex flex-col items-center" key={label}>
              <div className="text-4xl font-medium">
                <span>+</span>
                <NumberTicker value={number} />
              </div>

              <p className="text-sm tracking-widest font-light uppercase">{label}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
