import { Heading } from "@mwolfart/cobalt-ui";
import initTranslations from "../i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import { ImageCarousel } from "@/components/server/image-carousel";
import { Suspense } from "react";
import { TopProducts } from "@/components/server/top-products";
import { BeatLoader } from "react-spinners";

type Props = {
  params: {
    locale: string;
  };
};

// const products: ProductEntity[] = [
//   {
//     id: "1",
//     slug: "t-shirt",
//     name: "T-Shirt",
//     description: "Comfortable cotton t-shirt",
//     thumbnail:
//       "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//     variants: [
//       {
//         id: "1",
//         price: 19.99,
//         qty: 10,
//         size: "M",
//         color: "Blue",
//         description: "Comfortable cotton t-shirt in blue",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//       },
//       {
//         id: "2",
//         price: 19.99,
//         qty: 20,
//         size: "L",
//         color: "Blue",
//         description: "Comfortable cotton t-shirt in blue",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//       },
//       {
//         id: "3",
//         price: 21.99,
//         qty: 20,
//         size: "M",
//         color: "Turquoise",
//         description: "Comfortable cotton t-shirt in turquoise",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//       },
//       {
//         id: "4",
//         price: 21.99,
//         qty: 10,
//         size: "S",
//         color: "Turquoise",
//         description: "Comfortable cotton t-shirt in turquoise",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//       },
//     ],
//   },
//   {
//     id: "2",
//     slug: "jeans",
//     name: "Jeans",
//     description: "Stylish denim jeans",
//     thumbnail:
//       "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/indigo-pants_jri28h.jpg",
//     variants: [
//       {
//         id: "5",
//         price: 49.99,
//         qty: 10,
//         size: "S",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/indigo-pants_jri28h.jpg",
//       },
//       {
//         id: "6",
//         price: 49.99,
//         qty: 10,
//         size: "M",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/indigo-pants_jri28h.jpg",
//       },
//       {
//         id: "7",
//         price: 49.99,
//         qty: 10,
//         size: "L",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/indigo-pants_jri28h.jpg",
//       },
//     ],
//   },
//   {
//     id: "3",
//     slug: "sneakers",
//     name: "Sneakers",
//     description: "Trendy sneakers for everyday wear",
//     thumbnail:
//       "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499014/b-shorts_qfkmov.jpg",
//     variants: [
//       {
//         id: "8",
//         price: 39.99,
//         qty: 10,
//         size: "10",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499014/b-shorts_qfkmov.jpg",
//       },
//       {
//         id: "9",
//         price: 39.99,
//         qty: 10,
//         size: "11",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499014/b-shorts_qfkmov.jpg",
//       },
//       {
//         id: "10",
//         price: 39.99,
//         qty: 10,
//         size: "12",
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499014/b-shorts_qfkmov.jpg",
//       },
//     ],
//   },
//   {
//     id: "4",
//     slug: "hat",
//     name: "Hat",
//     description: "Cool baseball cap",
//     thumbnail:
//       "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/b-book_zmr8jj.jpg",
//     variants: [
//       {
//         id: "11",
//         price: 15.99,
//         qty: 10,
//         thumbnail:
//           "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/b-book_zmr8jj.jpg",
//       },
//     ],
//   },
// ];

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
      <div className="px-8">
        <Suspense fallback={<BeatLoader />}>
          <TopProducts errorMessage={t("common.error-loading-products")} />
        </Suspense>
      </div>
    </div>
  );
}
