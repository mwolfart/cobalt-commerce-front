import { Heading, Typography } from "@mwolfart/cobalt-ui";
import initTranslations from "@/app/i18n";
import { Suspense } from "react";
import { CategoryProducts } from "@/components/server/category-products";
import { BeatLoader } from "react-spinners";
// import { ProductEntity } from "@/entities/product";

type Props = {
  params: {
    locale: string;
    slug: string;
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

export default async function CategoryPage({ params }: Props) {
  const { locale, slug: categorySlug } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="flex justify-center pt-8">
      <div className="flex flex-col gap-4 justify-center h-full px-8">
        <Heading variant="h2" as="h1" className="">
          {t(`categories.${categorySlug}.title`)}
        </Heading>
        <Typography>{t(`categories.${categorySlug}.description`)}</Typography>
        <Suspense fallback={<BeatLoader />}>
          <CategoryProducts
            category={categorySlug}
            errorMessage={t("common.error-loading-products")}
          />
        </Suspense>
      </div>
    </div>
  );
}
