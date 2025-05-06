export type ProductEntity = {
  id: string;
  slug: string;
  name: string;
  thumbnail: string;
  image?: string;
  categories?: string[];
  description?: string;
  variants: ProductVariantEntity[];
};

export type ProductVariantEntity = {
  id: string;
  price: number;
  qty: number;
  thumbnail?: string;
  color?: string;
  size?: string;
  description?: string;
  image?: string;
};

export type CartProductEntity = {
  id: string;
  slug: string;
  name: string;
  thumbnail: string;
  price: number;
  size?: string;
  color?: string;
};
