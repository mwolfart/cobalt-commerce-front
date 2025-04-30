import { Heading } from "@mwolfart/cobalt-ui";
import initTranslations from "../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import { ImageCarousel } from "@/components/feature/image-carousel";
import { ProductGrid } from "@/components/feature/product-grid";

type Props = {
  params: {
    locale: string;
  };
};

const products = [
  {
    id: "1",
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 19.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
    qty: 10,
  },
  {
    id: "2",
    name: "Jeans",
    description: "Stylish denim jeans",
    price: 49.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/indigo-pants_jri28h.jpg",
    qty: 10,
  },
  {
    id: "3",
    name: "Sneakers",
    description: "Trendy sneakers for everyday wear",
    price: 79.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499014/b-shorts_qfkmov.jpg",
    qty: 10,
  },
  {
    id: "4",
    name: "Hat",
    description: "Cool baseball cap",
    price: 15.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/b-book_zmr8jj.jpg",
    qty: 10,
  },
];

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <Heading variant="h1" className="pt-8 px-8 text-center md:pt-16">
        <Trans i18nKey="home.welcome" t={t}>
          Welcome to
          <span className="font-zain text-blue-300 text-6xl whitespace-nowrap">
            Cobalt Shop
          </span>
        </Trans>
      </Heading>
      <ImageCarousel />
      <Heading variant="h2" className="px-8">
        {t("home.top-products")}
      </Heading>
      <ProductGrid products={products} />
    </div>
  );
}
