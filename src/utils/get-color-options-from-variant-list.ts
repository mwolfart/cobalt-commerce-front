import { ProductVariantEntity } from "@/entities/product";

export const getColorOptionsFromVariantList = (
  list: ProductVariantEntity[]
) => {
  const uniqueValues = new Set<string>();
  list.forEach((item) => {
    if (item.color) {
      uniqueValues.add(item.color);
    }
  });
  return Array.from(uniqueValues);
};
