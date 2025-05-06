"use client";

import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import Link from "next/link";
import ProdutosNav from "./nav/produtos-nav";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white p-4 shadow-sm">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image 
              className="w-36 md:w-52.5 h-auto" 
              src={Logo} 
              alt="Logo da ServPro" 
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 relative w-10 h-10 focus:outline-none flex items-center justify-center"
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
          <ul className="hidden lg:flex space-x-8">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Sobre Nós
              </Link>
            </li>

            <li className="hidden lg:block">
              <ProdutosNav />
            </li>

            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Soluções
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Onde Encontrar
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Contato
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
                  opacity: { duration: 0.3, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.4 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="lg:hidden overflow-hidden"
            >
              <motion.ul 
                className="space-y-4 pt-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {[
                  { href: "/", text: "Sobre Nós" },
                  { component: <ProdutosNav key="produtos" /> },
                  { href: "/", text: "Soluções" },
                  { href: "/", text: "Onde Encontrar" },
                  { href: "/", text: "Contato" }
                ].map((item, index) => (
                  <motion.li
                    key={item.text || index}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                    className="block"
                  >
                    {item.component || (
                      <Link
                        href={item.href}
                        className="block hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.text}
                      </Link>
                    )}
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
