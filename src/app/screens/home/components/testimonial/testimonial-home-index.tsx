import { MarqueeDemo } from "./marquee-testimonial-index";

export function TestimonialHomeIndex() {
  return (
    <section className="bg-gradient-to-b from-white to-amber-50/30 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-sm md:text-base uppercase font-medium tracking-wider text-amber-700 mb-2">
            Avaliações
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            O que nossos clientes dizem
          </h2>
          <div className="mt-4 w-16 h-1 bg-amber-700 mx-auto" />
        </div>

        <MarqueeDemo />
      </div>
    </section>
  );
}
