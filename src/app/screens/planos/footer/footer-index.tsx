import Link from "next/link";
import Image from "next/image";
import { atendimento, phone } from "@/data/links-rapidos";
import { FacebookIcon, InstagramIcon, Phone, YoutubeIcon } from "lucide-react";
import Logo from "../../../../../public/images/logo.png";

export default function FooterIndex() {
  return (
    <footer className="bg-accent text-accent-foreground py-12 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-x-4 md:text-center">
          <section className="mt-6">
            <h5 className="text-lg font-medium">Atendimento</h5>
            <ul className="space-y-0.5">
              {atendimento.map(({ href, label }) => {
                // TODO: trocar label como key por href
                return (
                  <li key={label}>
                    <Link className="text-sm text-muted-foreground" href={href}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* <section className="mt-6">
            <h5 className="text-lg font-medium">Regulatório</h5>
            <ul className="space-y-0.5">
              {regulatorio.map(({ href, label }) => {
                return (
                  // TODO: trocar label como key por href
                  <li key={label}>
                    <Link className="text-sm text-muted-foreground" href={href}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section> */}

          {/* <section className="mt-6">
            <h5 className="text-lg font-medium">Onde estamos</h5>
            <ul className="space-y-0.5">
              {enderecos.map(({ value, icon: Icon }) => {
                return (
                  <li
                    className="flex pl-1 items-center space-x-2 space-y-3"
                    key={value}
                  >
                    <div className="min-w-6">
                      <Icon className="w-6 mt-3 h-auto" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section> */}

          <section className="mt-6">
            <h5 className="text-lg font-medium">Compre por telefone</h5>

            <div className="flex items-center space-x-2 mt-1 md:justify-center">
              <Phone className="fill-foreground" />
              <span className="text-sm text-muted-foreground">{phone}</span>
            </div>
          </section>
        </div>

        <section>
          <ul className="flex items-center justify-center mt-12 mb-8 space-x-4">
            <li className="border border-primary rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200">
              <Link
                target="_blank"
                href="https://www.instagram.com/servprobrasil"
              >
                <InstagramIcon className="h-5 w-5 fill-primary" />
              </Link>
            </li>
            <li>
              <Link
                className="border border-primary rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
                target="_blank"
                href="https://www.facebook.com/redeservpro"
              >
                <FacebookIcon className="h-5 w-5 fill-primary rounded-full" />
              </Link>
            </li>
            <li>
              <Link
                className="border border-primary rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
                target="_blank"
                href="https://www.youtube.com/@RedeServProBrasil"
              >
                <YoutubeIcon className="h-5 w-5 fill-primary" />
              </Link>
            </li>
          </ul>
        </section>

        <section className="w-full flex items-center justify-center flex-col">
          <Image
            sizes="100vw"
            className="self-start lg:self-center -ml-4"
            src={Logo}
            alt=""
          />
          Sistema de CFTV Descubra nossa linha completa de soluções em sistema
          de cftv VER PRODUTOS
          <p className="text-[0.5rem] max-w-[80%] font-normal text-muted-foreground text-center mt-8">
            Redes ServPro {new Date().getFullYear()}. Todos os direitos
            reservados
          </p>
        </section>
      </div>
    </footer>
  );
}
