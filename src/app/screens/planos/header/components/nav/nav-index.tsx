"use client";
import { useContext } from "react";
import NavClosed from "./nav-closed";
import { HeaderContext } from "../../header-context";
import NavOpened from "./nav-opened";

export default function Nav() {
  const { isMobileMenuOpen } = useContext(HeaderContext);

  return isMobileMenuOpen ? <NavOpened /> : <NavClosed />;
}
