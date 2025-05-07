import { getProductByCategory } from "@/infrastructure/api/products";
import { ProductGrid } from "../product-grid";
import { Typography } from "@mwolfart/cobalt-ui";

type Props = {
  category: string;
  errorMessage: string;
};

export const CategoryProducts = async ({ category, errorMessage }: Props) => {
  try {
    const products = await getProductByCategory(category);
    return <ProductGrid products={products} />;
  } catch {
    return <Typography>{errorMessage}</Typography>;
  }
};
