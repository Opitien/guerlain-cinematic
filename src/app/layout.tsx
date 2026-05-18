import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guerlain-cinematic.guerlain.com"),
  title: "L'Art & La Matière | GUERLAIN",
  description: "The art of fragrance, refined into emotion. A cinematic olfactory journey into the high-perfumery collection by GUERLAIN.",
  authors: [{ name: "Guerlain" }],
  keywords: ["Guerlain", "L'Art & La Matière", "Perfume", "High Perfumery", "Luxury Fragrance", "Bespoke Perfume", "Paris Perfume"],
  openGraph: {
    title: "L'Art & La Matière | GUERLAIN",
    description: "The art of fragrance, refined into emotion. A cinematic olfactory journey into the high-perfumery collection by GUERLAIN.",
    url: "https://guerlain-cinematic.guerlain.com",
    siteName: "Guerlain Haute Parfumerie",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Guerlain L'Art & La Matière Haute Parfumerie Decanter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Art & La Matière | GUERLAIN",
    description: "The art of fragrance, refined into emotion. A cinematic olfactory journey into the high-perfumery collection by GUERLAIN.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <body className="bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
