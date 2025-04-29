import type { Metadata } from "next";
import { Titillium_Web, Zain } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/feature/header";
import { Nav } from "@/components/feature/nav";
import { Footer } from "@/components/feature/footer";

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

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;

  return (
    <html>
      <body
        className={`${titilliumWeb.variable} ${zain.variable} antialiased h-screen flex flex-col`}
      >
        <Header />
        <Nav
          items={[
            { title: "Clothing", subitems: ["T-Shirts", "Pants", "Shorts"] },
            { title: "Accessories", subitems: ["Hats", "Bags", "Watches"] },
            { title: "Books" },
          ]}
        />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
