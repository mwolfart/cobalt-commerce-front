import type { Metadata } from "next";
import { Titillium_Web, Zain } from "next/font/google";
import "./globals.css";

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

const zain = Zain({
  variable: "--font-zain",
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cobalt Shop",
  description: "Shop for the latest Cobalt products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.variable} ${zain.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
