import { getTopProducts } from "@/infrastructure/api/products";
import { ProductGrid } from "../product-grid";
import { Typography } from "@mwolfart/cobalt-ui";

type Props = {
  errorMessage: string;
};

export const TopProducts = async ({ errorMessage }: Props) => {
  try {
    const products = await getTopProducts();
    return <ProductGrid products={products} />;
  } catch {
    return <Typography>{errorMessage}</Typography>;
  }
};
