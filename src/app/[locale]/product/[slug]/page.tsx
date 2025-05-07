// import initTranslations from "@/app/i18n";
import initTranslations from "@/app/i18n";
import { ProductVariantOverview } from "@/components/client/product-variant-overview";
import { getProductBySlug } from "@/infrastructure/api/products";
import { Heading } from "@mwolfart/cobalt-ui";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

// const product: ProductEntity = {
//   id: "1",
//   slug: "t-shirt",
//   name: "T-Shirt",
//   description: "Comfortable cotton t-shirt",
//   thumbnail:
//     "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//   variants: [
//     {
//       id: "1",
//       price: 19.99,
//       qty: 10,
//       size: "M",
//       color: "Blue",
//       description: "Comfortable cotton t-shirt in blue",
//       thumbnail:
//         "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//     },
//     {
//       id: "2",
//       price: 19.99,
//       qty: 20,
//       size: "L",
//       color: "Blue",
//       description: "Comfortable cotton t-shirt in blue",
//       thumbnail:
//         "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//     },
//     {
//       id: "3",
//       price: 21.99,
//       qty: 20,
//       size: "M",
//       color: "Turquoise",
//       description: "Comfortable cotton t-shirt in turquoise",
//       thumbnail:
//         "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//     },
//     {
//       id: "4",
//       price: 21.99,
//       qty: 10,
//       size: "S",
//       color: "Turquoise",
//       description: "Comfortable cotton t-shirt in turquoise",
//       thumbnail:
//         "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
//     },
//   ],
// };

// const product: ProductEntity = {
//   id: "2",
//   slug: "jeans",
//   name: "Jeans",
//   description: "Stylish denim jeans",
//   thumbnail:
//     "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/indigo-pants_jri28h.jpg",
//   variants: [
//     {
//       id: "5",
//       price: 49.99,
//       qty: 10,
//       size: "S",
//     },
//     {
//       id: "6",
//       price: 49.99,
//       qty: 10,
//       size: "M",
//     },
//     {
//       id: "7",
//       price: 49.99,
//       qty: 10,
//       size: "L",
//     },
//   ],
// };

// const product: ProductEntity = {
//   id: "3",
//   slug: "sneakers",
//   name: "Sneakers",
//   description: "Trendy sneakers for everyday wear",
//   thumbnail:
//     "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499014/b-shorts_qfkmov.jpg",
//   variants: [
//     {
//       id: "8",
//       price: 39.99,
//       qty: 10,
//       size: "10",
//     },
//     {
//       id: "9",
//       price: 39.99,
//       qty: 10,
//       size: "11",
//     },
//     {
//       id: "10",
//       price: 39.99,
//       qty: 10,
//       size: "12",
//     },
//   ],
// };

// const product: ProductEntity = {
//   id: "4",
//   slug: "hat",
//   name: "Hat",
//   description: "Cool baseball cap",
//   thumbnail:
//     "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/b-book_zmr8jj.jpg",
//   variants: [
//     {
//       id: "11",
//       price: 15.99,
//       qty: 10,
//     },
//   ],
// };

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  try {
    const product = await getProductBySlug(slug);

    return (
      <div className="flex justify-center pt-8 sm:pt-16">
        <ProductVariantOverview title={product.name} product={product} />
      </div>
    );
  } catch {
    return (
      <div className="flex justify-center pt-8 sm:pt-16">
        <Heading variant="h3" as="h1">
          {t("common.error-loading-product")}
        </Heading>
      </div>
    );
  }
}
