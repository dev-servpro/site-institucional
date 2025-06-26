"use client";
import { useContext } from "react";
import NavClosed from "./nav-closed";
import { HeaderContext } from "../../header-context";
import NavOpened from "./nav-opened";
// import { useTransition } from "@react-spring/web";

export default function Nav() {
  const { isMobileMenuOpen } = useContext(HeaderContext);
  // const transitions = useTransition(isMobileMenuOpen, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { duration: 115 },
  //   exitBeforeEnter: true,
  // });

  return isMobileMenuOpen ? <NavOpened /> : <NavClosed />;
}
