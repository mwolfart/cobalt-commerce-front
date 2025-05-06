"use client";

import { Heading, Typography } from "@mwolfart/cobalt-ui";
import Image from "next/image";
import { AddToCartButton } from "../add-to-cart-button";
import { OutOfStockButton } from "../out-of-stock-button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ProductEntity } from "@/entities/product";
import { GroupSelector } from "../group-selector";
import { getSizeOptionsFromVariantList } from "@/utils/get-size-options-from-variant-list";
import { getColorOptionsFromVariantList } from "@/utils/get-color-options-from-variant-list";

type Props = {
  title: string;
  product: ProductEntity;
};

export const ProductVariantOverview = ({ title, product }: Props) => {
  const { t } = useTranslation();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.length > 0 ? product.variants[0] : null
  );

  const [selectedSize, setSelectedSize] = useState(
    product.variants.length > 0 ? product.variants[0].size : null
  );
  const [selectedColor, setSelectedColor] = useState(
    product.variants.length > 0 ? product.variants[0].color : null
  );

  useEffect(() => {
    if (selectedSize && selectedColor) {
      const variant = product.variants.find(
        (v) => v.size === selectedSize && v.color === selectedColor
      );
      setSelectedVariant(variant || null);
    } else if (selectedSize) {
      const variant = product.variants.find(
        (v) =>
          v.size === selectedSize &&
          (v.color === undefined || v.color === selectedColor)
      );
      setSelectedVariant(variant || null);
    } else if (selectedColor) {
      const variant = product.variants.find(
        (v) =>
          v.color === selectedColor &&
          (v.size === undefined || v.size === selectedColor)
      );
      setSelectedVariant(variant || null);
    }
  }, [selectedSize, selectedColor, product.variants]);

  if (product.variants.length === 0) {
    return <div></div>;
  }

  const sizeOptions = getSizeOptionsFromVariantList(product.variants);
  const colorOptions = getColorOptionsFromVariantList(product.variants);

  return (
    <div className="grid md:grid-cols-2 gap-16 max-w-[1260px] mx-8">
      <div className="flex flex-col gap-2 h-full">
        <Heading variant="h2" as="h1">
          {title}
        </Heading>
        <div className="flex-grow flex flex-col gap-2">
          <Typography>
            {selectedVariant?.description || product.description}
          </Typography>
          <span className="text-xl text-bold text-blue-500">
            {selectedVariant?.price}
          </span>
        </div>
        <div className="flex md:hidden flex-col py-2 h-full">
          <Image
            width={384}
            height={384}
            className="object-cover rounded-lg"
            alt={t("product.picture-of", { name: product.name })}
            src={selectedVariant?.image || product.image || product.thumbnail}
          />
        </div>
        {sizeOptions.length > 0 && (
          <GroupSelector
            availableOptions={sizeOptions}
            onSelect={setSelectedSize}
          />
        )}
        {colorOptions.length > 0 && (
          <GroupSelector
            availableOptions={colorOptions}
            onSelect={setSelectedColor}
          />
        )}
        {selectedVariant && selectedVariant.qty > 0 ? (
          <AddToCartButton
            productId={selectedVariant.id}
            productPrice={selectedVariant.price}
          />
        ) : (
          <OutOfStockButton />
        )}
      </div>
      <div className="hidden md:flex flex-col gap-2 h-full">
        <Image
          width={384}
          height={384}
          className="object-cover rounded-lg"
          alt={t("product.picture-of", { name: product.name })}
          src={selectedVariant?.image || product.image || product.thumbnail}
        />
      </div>
    </div>
  );
};
