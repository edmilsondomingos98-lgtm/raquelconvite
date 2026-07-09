import type { Metadata, Viewport } from "next";
import { Fraunces, Sacramento, Figtree } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "16 Anos da Raquel — Está Convidado(a)",
  description:
    "Convite digital para os 16 anos da Raquel. Abre cada etapa para descobrir data, dress code, localização e confirma a tua presença.",
  openGraph: {
    title: "16 Anos da Raquel 🌺",
    description:
      "Está convidado(a) para celebrar os 16 anos da Raquel. Abre o convite para descobrir todos os detalhes.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Está convidado(a) para os 16 anos da Raquel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "16 Anos da Raquel 🌺",
    description: "Está convidado(a) para celebrar os 16 anos da Raquel.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#E63A73",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${fraunces.variable} ${sacramento.variable} ${figtree.variable} font-body bg-palmDeep`}
      >
        {children}
      </body>
    </html>
  );
}
