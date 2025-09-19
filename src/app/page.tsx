import HomeAmbientesIndex from "./screens/home/components/ambientes/ambientes-index";
import HomeHeroIndex from "./screens/home/components/hero/hero-index";
import NosEscolherHome from "./screens/home/components/nos-escolher/nos-escolher";
import { TestimonialHomeIndex } from "./screens/home/components/testimonial/testimonial-home-index";
import ProdutosHomeWrapper from "./screens/home/components/produtos/produtos-wrapper";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <HomeHeroIndex />
        <HomeAmbientesIndex />
        <ProdutosHomeWrapper />
        <NosEscolherHome />
        <TestimonialHomeIndex />
      </div>
    </div>
  );
}
