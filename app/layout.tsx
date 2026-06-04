import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Built by Axl — Web design & development for small businesses",
  description:
    "Built by Axl designs and builds fast, modern websites for small businesses. Clean code, honest pricing, real results.",
  openGraph: {
    title: "Built by Axl",
    description:
      "Web design & development for small businesses. Built right, built to last.",
    url: "https://builtbyaxl.com",
    siteName: "Built by Axl",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
