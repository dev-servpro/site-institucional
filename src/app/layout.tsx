import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./chat-mobile.css";
import { cn } from "@/lib/utils";
import Footer from "./components/footer";
import HeaderWrapper from "./screens/home/components/header-wrapper";
import Script from "next/script";

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
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WB96BBMX');
          `,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Smartzapp Chat */}
      <Script
        id="smartzapp-chat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(s, z, c, h, a, t) {
              s.webchat = s.webchat || function() {
                (s.webchat.q = s.webchat.q || []).push(arguments);
              };
              t = z.createElement(c),
                a = z.getElementsByTagName(c)[0]; t.async = 1;
              t.src = 'https://servpro.sz.chat/webchat/v2/webchat.js'; 
              a.parentNode.insertBefore(t, a);
              s.webchat('cid', '67b7994463ca1900189c082b');
              s.webchat('host', h);
            })(window, document, 'script', 'https://servpro.sz.chat');
          `,
        }}
      />
      {/* End Smartzapp Chat */}

      {/* Microsoft Clarity */}
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vxor9cqqye");
          `,
        }}
      />
      {/* End Microsoft Clarity */}

      <body
        className={cn(
          `antialiased min-h-screen bg-[#EFEAE3] flex flex-col`,
          poppins.className,
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WB96BBMX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <HeaderWrapper />
        <main className="grow flex-1">{children}</main>

        <div className="divbutton">
          <a
            href="https://wa.me/5585989193078?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20queria%20saber%20mais%20sobre%20Porta%20de%20enrolar!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button1">Fale conosco</button>
          </a>
        </div>

        <Footer />
        {/* WhatsApp Chat - Comentado para usar Smartzapp */}
        {/* <WhatsAppChat 
          phoneNumber="5585987654321" 
          defaultMessage="Olá! Gostaria de mais informações sobre os produtos da Rede ServPro."
          businessName="Rede ServPro"
        /> */}
      </body>
    </html>
  );
}
