import { Heading, Typography } from "@mwolfart/cobalt-ui";
import initTranslations from "@/app/i18n";
import { ProductEntity } from "@/entities/product";
import Image from "next/image";
import { AddToCartButton } from "@/components/feature/add-to-cart-button";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

const product: ProductEntity = {
  id: "1",
  slug: "t-shirt",
  name: "T-Shirt",
  description: "Comfortable cotton t-shirt",
  price: 19.99,
  thumbnail:
    "https://res.cloudinary.com/dh0apn34n/image/upload/c_thumb,w_200,g_face/v1745499013/blue-m-shirt_fndcbj.jpg",
  qty: 10,
  image:
    "https://res.cloudinary.com/dh0apn34n/image/upload/v1745499013/blue-m-shirt_fndcbj.jpg",
};

export default async function Category({ params }: Props) {
  // const { locale, slug } = await params;
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="flex justify-center pt-8">
      <div className="flex flex-col gap-2 h-full">
        <Heading variant="h2" as="h1">
          {product.name}
        </Heading>
        <Typography>{product.description}</Typography>
        <Image
          width={384}
          height={384}
          className="object-cover rounded-lg my-4"
          alt={t("product.picture-of", { name: product.name })}
          src={product.image!}
        />
        <AddToCartButton />
      </div>
    </div>
  );
}
