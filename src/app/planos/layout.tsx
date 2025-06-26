import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { siteMetadata } from "@/data/meta-data";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "../components/providers/query-client-provider";
import StoreProvider from "../components/providers/store-provider";
import { PlanoProvider } from "../context/plano.context";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.subTitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        poppins.className,
        "antialiased scroll-smooth min-h-screen flex flex-col overflow-x-hidden bg-[#eee]/10"
      )}
    >
      <ReactQueryProvider>
        <StoreProvider>
          <PlanoProvider>{children}</PlanoProvider>
        </StoreProvider>
      </ReactQueryProvider>
    </div>
  );
}
