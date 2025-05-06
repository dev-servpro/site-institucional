"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Facebook, Instagram, Youtube, Linkedin, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 md:py-16">
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
              <div className="group">
                <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                  <span>Sobre Nós</span>
                  <ChevronDown className="w-4 h-4 ml-1.5 opacity-70 group-hover:opacity-100" />
                </button>
              </div>
              <div className="group">
                <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                  <span>Mídia</span>
                  <ChevronDown className="w-4 h-4 ml-1.5 opacity-70 group-hover:opacity-100" />
                </button>
              </div>
              <Link href="/produtos" className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                Produtos
              </Link>
              <div className="group">
                <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                  <span>Soluções</span>
                  <ChevronDown className="w-4 h-4 ml-1.5 opacity-70 group-hover:opacity-100" />
                </button>
              </div>
              <Link href="/onde-encontrar" className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                Onde Encontrar
              </Link>
              <Link href="/contato" className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                Contato
              </Link>
            </nav>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-white">Redes Sociais</h3>
            <nav className="space-y-4">
              <Link href="https://facebook.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide">
                <Facebook className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide">
                <Instagram className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide">
                <Youtube className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Youtube</span>
              </Link>
              <Link href="https://linkedin.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group text-[15px] tracking-wide">
                <Linkedin className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                <span>Linkedin</span>
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <Link href="mailto:atendimento@garen.com.br" className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                atendimento@garen.com.br
              </Link>
              <Link href="tel:+551434073639" className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                (14) 3407-6639
              </Link>
            </div>
          </div>

          {/* Institutional Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-white">Institucional</h3>
            <nav className="space-y-4">
              <Link href="/politica-de-privacidade" className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                Política de privacidade
              </Link>
              <Link href="/termos-de-uso" className="block text-gray-300 hover:text-white transition-colors duration-200 text-[15px] tracking-wide">
                Termos de uso
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-gray-400 text-[15px] text-center tracking-wide">
            Copyright © 2025 Garen | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 