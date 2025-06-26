import NavButton from "./components/nav/nav-button";
import Nav from "./components/nav/nav-index";
import HeaderContextProvider from "./header-context";
import ServProLogo from "../../../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function HeaderIndex() {
  return (
    <HeaderContextProvider>
      <header className="w-full relative border-b bg-muted shadow-sm">
        <section
          className="justify-between p-5 min-h-16 flex items-center  container mx-auto"
          aria-label="Primeira linha do cabeçalho do site"
        >
          <Link className="block" href="/">
            <Image
              className="w-52 h-auto -ml-3"
              sizes="100vw"
              src={ServProLogo}
              alt=""
            />
          </Link>
          <NavButton />

          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {navLinks.map(({ label, href }) => {
                return (
                  <li
                    className="ml-4 text-muted-foreground hover:text-primary-darker last:border-primary last:border last:bg-primary last:text-white last:rounded-full  last:hover:bg-primary-darker last:hover:text-white [&>a]:last:p-3"
                    key={href}
                  >
                    <a
                      className="block text-sm font-medium py-2"
                      target={href.includes("http") ? "_blank" : undefined}
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>

        <div className="lg:hidden">
          <Nav />
        </div>
      </header>
    </HeaderContextProvider>
  );
}
