"use client";
import React, { createContext, useCallback, useState } from "react";

export const HeaderContext = createContext({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
});

export default function HeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <HeaderContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </HeaderContext.Provider>
  );
}
