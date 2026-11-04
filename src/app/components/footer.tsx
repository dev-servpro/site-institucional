"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo da ServPro"
              className="w-48 md:w-64 lg:w-72 h-auto brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Menu Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-white">Menu</h3>
            <nav className="space-y-4">
              <Link
                href="/sobre-nos"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide"
              >
                Sobre Nós
              </Link>
              <Link
                href="/novidades"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide"
              >
                Produtos
              </Link>
              <div className="space-y-2">
                <span className="block text-gray-300 text-[15px] tracking-wide font-semibold mb-1">Soluções</span>
                <a
                  href="https://planos.redeservpro.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide pl-4"
                >
                  Planos
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide pl-4"
                >
                  Esquadrias
                </a>
                <a
                  href="https://lpmkt.redeservpro.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide pl-4"
                >
                  Interfone Interativo
                </a>
                <a
                  href="https://intermaxx.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide pl-4"
                >
                </a>
              </div>
            </nav>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Redes Sociais
            </h3>
            <nav className="space-y-4">
              <Link
                href="https://www.facebook.com/redeservpro"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide"
              >
                <Facebook className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/servprobrasil"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide"
              >
                <Instagram className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/RedeServProBrasil"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide"
              >
                <Youtube className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Youtube</span>
              </Link>
              <Link
                href="https://br.linkedin.com/company/redeservpro"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide"
              >
                <Linkedin className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Linkedin</span>
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <Link
                href="mailto:contato@redeservpro.com.br"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide"
              >
                contato@redeservpro.com.br
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=558000901234&text=Ol%C3%A1%2C+gostaria+de+saber+mais+detalhes.&type=phone_number&app_absent=0"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide"
              >
                0800 090 1234
              </Link>
            </div>
          </div>

          {/* Institutional Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Institucional
            </h3>
            {/* TERMOS E POLITICAS DE PRIVACIDADE
            <nav className="space-y-4">
              <Link
                href="/politica-de-privacidade"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide"
              >
                Política de privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide"
              >
                Termos de uso
              </Link>
            </nav>
            */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-gray-400 text-[15px] text-center tracking-wide">
            Copyright © 2025 Rede ServPro | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
