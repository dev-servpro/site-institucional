import { features } from "@/data/features";

export default function AwardsBannerIndex() {
  return (
    <section
      className="px-5 py-12 container mx-auto"
      aria-labelledby="awards-banner-title-id"
    >
      {/* <div className="lg:hidden">
        <PromoBannerIndex />
      </div> */}

      <h2
        className="text-primary-darker text-2xl/[2.5rem] lg:text-4xl text-center mt-12 mb-6 lg:mt-0 mb:0 font-medium max-w-[800px] mx-auto"
        id={"awards-banner-title-id"}
      >
        Mais de 18 anos de experiência. Junte-se aos nossos 2500+ clientes
        satisfeitos
      </h2>

      <section className="flex flex-col items-center mt-14">
        {/* <div className="hidden lg:block">
          <PromoBannerIndex />
        </div> */}

        <ul className="space-y-6">
          {features.map(({ description, icon: Icon, title }) => {
            return (
              <li
                key={title}
                className="flex flex-col justify-center items-center "
              >
                <Icon className="text-primary-darker h-16 w-16 stroke-[1px]" />
                <h3 className="text-center text-primary-darker mt-4 text-2xl lg:text-3xl font-semibold">
                  {title}
                </h3>

                <p className="text-center text-sm lg:text-base max-w-[80%] mt-2">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
