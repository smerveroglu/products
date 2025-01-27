import { useState } from "react";
import Product from "./Product";
import type { ProductList } from "app/types/productList";
import { getProducts } from "app/utils/api";

export default function Products({
  initialProducts,
}: {
  initialProducts: ProductList;
}) {
  const [products, setProducts] = useState<ProductList>(initialProducts);
  const [nextUrl, setNextUrl] = useState<string | null>(
    initialProducts.nextUrl ?? null,
  );

  const loadMoreProducts = async () => {
    if (nextUrl) {
      const newProducts = (await getProducts(nextUrl)).products;
      setProducts((prev) => ({
        ...prev,
        productList: [...prev.productList, ...newProducts.productList],
      }));
      setNextUrl(newProducts.nextUrl);
    }
  };

  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-2 max-w-2xl">
        {products.productList.map((product) => (
          <Product key={product.code} product={product} />
        ))}
      </div>
      {nextUrl && (
        <div className="flex justify-center">
          <button
            onClick={loadMoreProducts}
            className="text-lg  mt-4 px-8 py-2 bg-gray-400 text-white rounded"
          >
            Load more products
          </button>
        </div>
      )}
    </>
  );
}
