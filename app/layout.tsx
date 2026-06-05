import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted at build time via next/font — no render-blocking request to
// Google, no layout shift. Exposed as CSS variables used in globals.css.
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builtbyaxl.com"),
  title: "Built by Axl — Web design & development for small businesses",
  description:
    "Hand-built websites for small businesses and local companies in Las Vegas and beyond. One flat price, no page-builder fees, and a site you own outright.",
  keywords: [
    "web design",
    "web development",
    "small business website",
    "Las Vegas web designer",
    "landing pages",
  ],
  openGraph: {
    title: "Built by Axl — Your website. No agency. No rent.",
    description:
      "Hand-built websites for small businesses. One flat price, no monthly fees, yours outright.",
    url: "https://builtbyaxl.com",
    siteName: "Built by Axl",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Built by Axl — web design & development for small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Axl — Your website. No agency. No rent.",
    description:
      "Hand-built websites for small businesses. One flat price, no monthly fees, yours outright.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://builtbyaxl.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning: ScrollReveal's boot script adds the `fx`
  // class to <html> before React hydrates, which is intentional.
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
