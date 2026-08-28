import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nextjs-v2-ashen.vercel.app"),
  title: {
    default: "Tobías Tarnowski — Sistemas, automatización e IA",
    template: "%s — Tobías Tarnowski",
  },
  description:
    "Portfolio de Tobías Tarnowski: automatización con n8n, inteligencia artificial, redes, hardware y desarrollo de sistemas.",
  openGraph: {
    title: "Tobías Tarnowski — Conecto. Automatizo. Resuelvo.",
    description: "Sistemas que conectan IA, automatización, redes y hardware para resolver trabajo real.",
    url: "https://portfolio-nextjs-v2-ashen.vercel.app",
    siteName: "Tobías Tarnowski",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobías Tarnowski — Sistemas, automatización e IA",
    description: "Conecto IA, automatización, redes y hardware.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${archivo.variable} ${plexMono.variable}`}>
      <body id="top">
        <a className="skipLink" href="#main-content">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
