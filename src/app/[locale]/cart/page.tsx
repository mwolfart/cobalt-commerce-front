"use client";

import { useCartStore } from "@/providers/cart-provider";
import { Heading, Typography } from "@mwolfart/cobalt-ui";
import { useTranslation } from "react-i18next";

export default function CartPage() {
  const { t } = useTranslation();
  const { items, totalQty, totalPrice, add, remove } = useCartStore(
    (state) => state
  );
  return (
    <div className="flex justify-center pt-8 sm:pt-16">
      <div className="flex flex-col gap-8 w-full max-w-2xl px-4 sm:px-0">
        <Heading variant="h2" as="h1">
          {t("cart.title")}
        </Heading>
        {totalQty > 0 ? (
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4"></div>
            ))}
          </div>
        ) : (
          <Typography>{t("cart.cart-is-empty")}</Typography>
        )}
      </div>
    </div>
  );
}
