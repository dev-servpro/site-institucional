import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./components/footer";
import HeaderWrapper from "./screens/home/components/header-wrapper";

const poppins = Montserrat({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rede ServPro",
  description:
    "A Rede ServPro é uma rede de lojas de móveis e eletrodomésticos que oferece produtos de qualidade e serviços excepcionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-Br">
      <body
        className={cn(
          `antialiased min-h-screen bg-[#EFEAE3] flex flex-col`,
          poppins.className
        )}
      >
        <HeaderWrapper />
        <main className="grow flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
