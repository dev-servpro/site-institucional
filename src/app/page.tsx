import HomeAmbientesIndex from "./screens/home/components/ambientes/ambientes-index";
import Header from "./screens/home/components/header";
import HomeHeroIndex from "./screens/home/components/hero/hero-index";
import NosEscolherHome from "./screens/home/components/nos-escolher/nos-escolher";
import NumerosHomeIndex from "./screens/home/components/numeros/numeros-home-index";
import HomeProdutosIndex from "./screens/home/components/produtos/produtos-index";
import { TestimonialHomeIndex } from "./screens/home/components/testimonial/testimonial-home-index";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeroIndex />
      <HomeAmbientesIndex />
      <HomeProdutosIndex />
      <NosEscolherHome />
      <TestimonialHomeIndex />
      <Footer />
    </>
  );
}
