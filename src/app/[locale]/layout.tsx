import type { Metadata } from "next";
import { Titillium_Web, Zain } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/feature/header";
import { Nav } from "@/components/feature/nav";
import { Footer } from "@/components/feature/footer";
import initTranslations from "../i18n";

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

  return (
    <html>
      <body
        className={`${titilliumWeb.variable} ${zain.variable} antialiased h-screen flex flex-col`}
      >
        <Header />
        <Nav
          items={[
            { title: t("nav.home") },
            {
              title: t("nav.clothing"),
              subitems: [
                t("nav.subcategories.tshirts"),
                t("nav.subcategories.pants"),
                t("nav.subcategories.shorts"),
              ],
            },
            {
              title: t("nav.accessories"),
              subitems: [
                t("nav.subcategories.hats"),
                t("nav.subcategories.bags"),
                t("nav.subcategories.watches"),
              ],
            },
            { title: t("nav.books") },
          ]}
        />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
