// import AwardsBannerIndex from "./awards-banner/awards-banner-index";
import FaqIndex from "./faq/faq-index";
import HomeHeroIndex from "./hero/hero-index";
import PlanosIndex from "./planos/planos-index";
import SecuritySteps from "./security-steps";
// import * as motion from "motion/react-client";

export default function PlanosScreenIndex() {
  return (
    <>
      <HomeHeroIndex />

      <PlanosIndex />

      <SecuritySteps />

      <FaqIndex />
    </>
  );
}
