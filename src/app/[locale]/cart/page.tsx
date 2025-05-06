"use client";

import { useCartStore } from "@/providers/cart-provider";
import { Button, Heading, Typography } from "@mwolfart/cobalt-ui";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CartPage() {
  const { t } = useTranslation();
  const { items, totalQty, totalPrice, remove } = useCartStore(
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
            {items.map(({ product, amount }, index) => (
              <div key={index} className="flex gap-4 md:gap-8">
                <Image
                  height={256}
                  width={256}
                  src={product.thumbnail}
                  aria-hidden
                  alt={product.name}
                />
                <div className="flex flex-col gap-2">
                  <Heading variant="h4" as="h3">
                    {product.name}
                  </Heading>
                  <div className="flex gap-2">
                    {product.size && (
                      <Typography>
                        <span className="font-bold text-blue-500">
                          {t("cart.size")}:{" "}
                        </span>
                        {product.size}
                      </Typography>
                    )}
                    {product.color && (
                      <Typography>
                        <span className="font-bold text-blue-500">
                          {t("cart.color")}:{" "}
                        </span>
                        {product.color}
                      </Typography>
                    )}
                  </div>
                  <div className="flex-grow flex flex-col gap-1">
                    <Typography>
                      <span className="font-bold">{t("cart.quantity")}: </span>
                      {amount}
                    </Typography>
                    <Typography>
                      <span className="font-bold">
                        {t("cart.unit-price")}:{" "}
                      </span>
                      {product.price}
                    </Typography>
                    <Typography>
                      <span className="font-bold">
                        {t("cart.total-price")}:{" "}
                      </span>
                      {product.price * amount}
                    </Typography>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => remove(product.id, amount)}
                  >
                    {t("cart.remove")}
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex gap-4 items-center">
              <Typography className="!text-2xl !inline-flex gap-2 font-bold">
                {t("cart.total")}:
                <span className="text-blue-500 font-semibold">
                  {totalPrice}
                </span>
              </Typography>
            </div>
          </div>
        ) : (
          <Typography className="!text-xl">
            {t("cart.cart-is-empty")}
          </Typography>
        )}
      </div>
    </div>
  );
}
