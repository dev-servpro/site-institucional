import HeroCarousel from "./hero-carousel";

export default function HomeHeroIndex() {
  return (
    <section
      className="text-primary-foreground relative"
      aria-labelledby={"hero-title"}
    >
      <HeroCarousel />
    </section>
  );
}
