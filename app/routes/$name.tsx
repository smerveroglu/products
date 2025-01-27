import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import Header from "app/components/ProductDetail/Header";
import { getProductDetail } from "app/utils/api";
import { ProductDetail } from "app/types/productDetail";
import Product from "app/components/ProductDetail/Product";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const name = params.name;
  if (!code) {
    throw new Error("Code is required");
  }
  const product = await getProductDetail(code);
  return { product, name };
};

export default function ProductInfo() {
  const { name, product } = useLoaderData<{
    product: ProductDetail;
    name: string;
  }>();
  return (
    <div>
      <Header name={name} />
      <Product product={product} />
    </div>
  );
}
