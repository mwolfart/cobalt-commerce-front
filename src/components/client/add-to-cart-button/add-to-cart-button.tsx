"use client";

import {
  CartProductEntity,
  ProductEntity,
  ProductVariantEntity,
} from "@/entities/product";
import { useCartStore } from "@/providers/cart-provider";
import { Button } from "@mwolfart/cobalt-ui";
import { useTranslation } from "react-i18next";

type Props = {
  product: ProductEntity;
  variant: ProductVariantEntity;
};

export const AddToCartButton = ({ product, variant }: Props) => {
  const { t } = useTranslation();
  const { add } = useCartStore((state) => state);

  const cartProduct: CartProductEntity = {
    id: variant.id,
    slug: product.slug,
    name: product.name,
    price: variant.price,
    thumbnail: variant.thumbnail || product.thumbnail,
    color: variant.color,
    size: variant.size,
  };

  console.log("cartProduct", cartProduct);

  return (
    <Button variant="primary" onClick={() => add(cartProduct, 1)}>
      {t("common.add-to-cart")}
    </Button>
  );
};
