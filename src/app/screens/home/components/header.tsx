"use client";

import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import Link from "next/link";
import ProdutosNav from "./nav/produtos-nav";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Category } from "@/app/produtos/page";
import { Subcategory } from "@/app/produtos/[category]/page";
import { Product } from "@/app/produtos/[category]/[produto]/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({
  categories,
  subcategories,
  products,
}: {
  categories: Category[];
  subcategories: Subcategory[];
  products: Product[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F5F5] shadow-md">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative z-10 pl-4">
            <Image
              className="w-32 md:w-40 h-auto"
              src={Logo}
              alt="Logo da ServPro"
              priority
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 relative w-10 h-10 focus:outline-none flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center h-full">
            <li className="group h-full">
              <Link
                href="/sobre-nos"
                className="relative h-full px-4 flex items-center text-primary/90 font-medium text-[14px] transition-colors duration-200 group-hover:text-primary"
              >
                <span className="relative z-10">Sobre Nós</span>
                <span className="absolute inset-0 w-full h-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary/5" />
              </Link>
            </li>

            <li className="h-full">
              <Link href="/produtos">
                <ProdutosNav
                  products={products}
                  categories={categories}
                  subcategories={subcategories}
                />
              </Link>
            </li>

            <li className="group h-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span className="relative cursor-pointer h-full px-4 flex items-center text-primary/90 font-medium text-[14px] transition-colors duration-200 group-hover:text-primary">
                    <span className="relative z-10">Soluções</span>
                    <span className="absolute inset-0 w-full h-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary/5" />
                  </span>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link
                      target="_blank"
                      href="https://planos.redeservpro.com.br/"
                      className="text-primary focus:text-primary font-medium"
                    >
                      Planos
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      target="_blank"
                      href="https://lp.redeservpro.com.br/"
                      className="text-primary focus:text-primary font-medium"
                    >
                      Esquadrias
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      target="_blank"
                      href="https://intermaxx.com.br/"
                      className="text-primary focus:text-primary font-medium"
                    >
                      Interfone Interativo
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      target="_blank"
                      href="https://fonemaxx.com.br/"
                      className="text-primary focus:text-primary font-medium"
                    >
                      Telefonia em Nuvem
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li className="group h-full">
              <Link
                href="https://api.whatsapp.com/send/?phone=558000901234&text=Ol%C3%A1%2C+gostaria+de+saber+mais+detalhes.&type=phone_number&app_absent=0"
                target="_blank"
                className="relative h-full px-4 flex items-center text-primary/90 font-medium text-[14px] transition-colors duration-200 group-hover:text-primary"
              >
                <span className="relative z-10">Contato</span>
                <span className="absolute inset-0 w-full h-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary/5" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.4 },
                  opacity: { duration: 0.3, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.4 },
                  opacity: { duration: 0.2 },
                },
              }}
              className="lg:hidden overflow-hidden bg-[#F5F5F5] absolute top-full left-0 right-0 border-t border-primary/10 shadow-lg"
            >
              <motion.ul
                className="space-y-1"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                {[
                  { href: "/sobre-nos", text: "Sobre Nós" },
                  { href: "/produtos", text: "Produtos" },
                  {
                    href: "https://api.whatsapp.com/send/?phone=558000901234&text=Ol%C3%A1%2C+gostaria+de+saber+mais+detalhes.&type=phone_number&app_absent=0",
                    text: "Contato",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={item.text || index}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    className="group"
                  >
                    {/* {item.component || (
                      <Link
                        href={item.href}
                        className="relative block px-4 py-2 text-[14px] font-medium text-primary/90 transition-colors duration-200 group-hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="relative z-10">{item.text}</span>
                        <span className="absolute inset-0 w-full h-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary/5" />
                      </Link>
                    )} */}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
