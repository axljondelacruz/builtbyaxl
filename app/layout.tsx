import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
