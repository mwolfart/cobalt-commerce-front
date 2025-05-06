import { ProductVariantEntity } from "@/entities/product";

export const getSizeOptionsFromVariantList = (list: ProductVariantEntity[]) => {
  const uniqueValues = new Set<string>();
  list.forEach((item) => {
    if (item.size) {
      uniqueValues.add(item.size);
    }
  });
  return Array.from(uniqueValues).sort((a, b) => {
    const aIsNumber = !isNaN(Number(a));
    if (aIsNumber) {
      return Number(a) - Number(b);
    } else {
      const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
      return sizes.indexOf(a) - sizes.indexOf(b);
    }
  });
};
