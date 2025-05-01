import type { Metadata } from "next";
import { Titillium_Web, Zain } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/feature/header";
import { Footer } from "@/components/feature/footer";
import initTranslations from "../i18n";
import { DesktopNav } from "@/components/feature/nav";

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
  const { t } = await initTranslations(locale, ["common"]);

  const categories = [
    { title: t("nav.home"), href: "/" },
    {
      title: t("nav.clothing"),
      href: "/clothing",
      subitems: [
        {
          title: t("nav.subcategories.tshirts"),
          href: "/t-shirts",
        },
        {
          title: t("nav.subcategories.pants"),
          href: "/pants",
        },
        {
          title: t("nav.subcategories.shorts"),
          href: "/shorts",
        },
      ],
    },
    {
      title: t("nav.accessories"),
      href: "/accessories",
      subitems: [
        {
          title: t("nav.subcategories.hats"),
          href: "/hats",
        },
        {
          title: t("nav.subcategories.bags"),
          href: "/bags",
        },
        {
          title: t("nav.subcategories.watches"),
          href: "/watches",
        },
      ],
    },
    { title: t("nav.books"), href: "/books" },
  ];

  return (
    <html>
      <body
        className={`${titilliumWeb.variable} ${zain.variable} antialiased h-screen flex flex-col`}
      >
        <Header items={categories} />
        <DesktopNav items={categories} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
