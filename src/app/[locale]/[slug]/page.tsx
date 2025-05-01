import { Heading, Typography } from "@mwolfart/cobalt-ui";
import { ProductGrid } from "@/components/feature/product-grid";
import initTranslations from "@/app/i18n";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

const products = [
  {
    id: "1",
    slug: "t-shirt",
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 19.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
    qty: 10,
  },
  {
    id: "2",
    slug: "jeans",
    name: "Jeans",
    description: "Stylish denim jeans",
    price: 49.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/indigo-pants_jri28h.jpg",
    qty: 10,
  },
  {
    id: "3",
    slug: "sneakers",
    name: "Sneakers",
    description: "Trendy sneakers for everyday wear",
    price: 79.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499014/b-shorts_qfkmov.jpg",
    qty: 10,
  },
  {
    id: "4",
    slug: "hat",
    name: "Hat",
    description: "Cool baseball cap",
    price: 15.99,
    thumbnail:
      "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/b-book_zmr8jj.jpg",
    qty: 10,
  },
];

export default async function Category({ params }: Props) {
  const { locale, slug: categorySlug } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="flex justify-center pt-8">
      <div className="flex flex-col gap-4 justify-center h-full px-8">
        <Heading variant="h2" as="h1" className="">
          {t(`categories.${categorySlug}.title`)}
        </Heading>
        <Typography>{t(`categories.${categorySlug}.description`)}</Typography>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
