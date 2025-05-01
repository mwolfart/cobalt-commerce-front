import { ProductEntity } from "@/entities/product";
import { Heading, Typography } from "@mwolfart/cobalt-ui";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: ProductEntity[];
};

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full max-w-[1260px] sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          className="flex flex-col gap-4 justify-center shadow-lg p-8 rounded-lg h-full w-full hover:shadow-2xl transition-all duration-300 ease-in-out"
          href={`/product/${product.slug}`}
        >
          <Image
            src={product.thumbnail}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover object-top rounded-lg self-center"
          />
          <div className="flex flex-col">
            <Heading variant="h5" className="text-xl font-semibold">
              {product.name}
            </Heading>
            <Typography>{product.description}</Typography>
            <span className="text-lg font-bold text-blue-500">
              ${product.price}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
