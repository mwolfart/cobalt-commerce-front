import { Heading, Typography } from "@mwolfart/cobalt-ui";
import initTranslations from "@/app/i18n";
import { ProductEntity } from "@/entities/product";
import Image from "next/image";
import { AddToCartButton } from "@/components/feature/add-to-cart-button";
import { OutOfStockButton } from "@/components/feature/out-of-stock-button";

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
  qty: 0,
  image:
    "https://res.cloudinary.com/dh0apn34n/image/upload/v1745499013/blue-m-shirt_fndcbj.jpg",
};

export default async function Category({ params }: Props) {
  // const { locale, slug } = await params;
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="flex justify-center pt-8 sm:pt-16">
      <div className="grid md:grid-cols-2 gap-16 max-w-[1260px] mx-8">
        <div className="flex flex-col gap-2 h-full">
          <Heading variant="h2" as="h1">
            {product.name}
          </Heading>
          <div className="flex-grow flex flex-col gap-2">
            <Typography>{product.description}</Typography>
            <span className="text-xl text-bold text-blue-500">
              {product.price}
            </span>
          </div>
          <div className="flex md:hidden flex-col py-2 h-full">
            <Image
              width={384}
              height={384}
              className="object-cover rounded-lg"
              alt={t("product.picture-of", { name: product.name })}
              src={product.image!}
            />
          </div>
          {product.qty > 0 ? <AddToCartButton /> : <OutOfStockButton />}
        </div>
        <div className="hidden md:flex flex-col gap-2 h-full">
          <Image
            width={384}
            height={384}
            className="object-cover rounded-lg"
            alt={t("product.picture-of", { name: product.name })}
            src={product.image!}
          />
        </div>
      </div>
    </div>
  );
}
