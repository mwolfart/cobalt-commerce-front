export type ProductEntity = {
  id: string;
  name: string;
  qty: number;
  price: number;
  thumbnail: string;
  image?: string;
  categories?: string[];
  description?: string;
};
