import { Link } from "@remix-run/react";
import type { Product } from "app/types/productList";

export default function Product({ product }: { product: Product }) {
  return (
    <div key={product.code}>
      <Link
        to={{
          pathname: `/${product.name.replace(/\s+/g, "-")}`,
          search: `?code=${product.code}`,
        }}
      >
        <div className="relative grid h-full p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
          <img
            className="mx-auto rounded-t-lg h-52 w-48 object-fit"
            src={product.imageUrl}
            alt={product.name}
          />
          <div className="absolute top-2 left-2 flex items-center justify-center w-8 h-8 bg-red-500 rounded-full text-white text-xs font-bold">
            {product.dropRatio}%
          </div>
          <div className="flex flex-col p-4">
            <p className="mb-4 text-sm text-blue-500">{product.name}</p>
            <p className="text-xl font-bold text-gray-900">
              {`${new Intl.NumberFormat("tr-TR").format(product.price)} TL`}
            </p>
            <p className=" mb-4 text-xs font-bold text-gray-400">
              {`${product.countOfPrices} satıcı`}
            </p>
            <p className=" text-sm font-bold  text-gray-500">
              {`${product.followCount}+ takip`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
