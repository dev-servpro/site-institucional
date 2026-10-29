import { navLinks } from "@/data/nav";
import Link from "next/link";

export default function NavOpened() {
  return (
    <nav className="absolute top-full">
      <ul className="bg-primary w-screen desktop:hidden p-4">
        {navLinks.map(({ label, href }) => {
          return (
            <li
              className="first:border-t-[0.5px] first:border-t-orange-600 mb-1 text-sm border-b-primary-foreground text-primary-foreground border-b-[0.5px] last:border-b-0 last:pt-5 [&>a]:last:bg-white [&>a]:last:text-primary [&>a]:last:text-center [&>a]:last:rounded-full [&>a]:last:font-semibold"
              key={href}
            >
              <Link className="block py-4" href={href}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
