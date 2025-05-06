"use client";

import { useCartStore } from "@/providers/cart-provider";
import { Button } from "@mwolfart/cobalt-ui";
import { useTranslation } from "react-i18next";

type Props = {
  productId: string;
  productPrice: number;
};

export const AddToCartButton = ({ productId, productPrice }: Props) => {
  const { t } = useTranslation();
  const { add } = useCartStore((state) => state);
  return (
    <Button variant="primary" onClick={() => add(productId, 1, productPrice)}>
      {t("common.add-to-cart")}
    </Button>
  );
};
