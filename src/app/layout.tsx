import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Assistir Filmes Online | Assistir Séries Online | HBO Max",
  description:
    "Conheça a HBO Max, a plataforma de streaming que reúne todos os filmes e séries de TV favoritos da HBO, além dos novos Max Originals.",
  icons: {
    icon: "/images/icon.png",
  },
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
