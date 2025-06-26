import { navLinks } from "@/data/nav";
import NavContainer from "./nav-container";
import NavLinkClosed from "./nav-link-closed";

export default function NavClosed() {
  return (
    <NavContainer className="overflow-x-auto snap-x">
      <ul className="flex gap-x-5 items-center min-h-12">
        {navLinks.map(({ label, href }, idx) => {
          return (
            <NavLinkClosed
              key={href}
              href={href}
              label={label}
              isLast={idx === navLinks.length - 1}
            />
          );
        })}
      </ul>
    </NavContainer>
  );
}
