import HomeAmbientesIndex from "./screens/home/components/ambientes/ambientes-index";
import HomeHeroIndex from "./screens/home/components/hero/hero-index";
import NosEscolherHome from "./screens/home/components/nos-escolher/nos-escolher";
import HomeProdutosIndex from "./screens/home/components/produtos/produtos-index";
import { TestimonialHomeIndex } from "./screens/home/components/testimonial/testimonial-home-index";

export default function Home() {
  return (
    <>
      <HomeHeroIndex />
      <HomeAmbientesIndex />
      <HomeProdutosIndex />
      <NosEscolherHome />
      <TestimonialHomeIndex />
    </>
  );
}
