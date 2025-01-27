import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "app/components/Header";
import HorizontalProducts from "../components/HorizontalProducts/HorizontalProducts";
import { ProductList } from "app/types/productList";
import Products from "app/components/Products/Products";
import { getProducts } from "app/utils/api";

export const loader: LoaderFunction = async () => {
  const products = await getProducts();
  return products;
};

export default function ProductsPage() {
  const { products } = useLoaderData<{
    products: ProductList;
  }>();

  if (!products) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <Header />
      <div className="bg-purple-600 min-h-screen py-6 gap-6 grid grid-cols-1">
        <HorizontalProducts products={products} />
        <Products initialProducts={products} />
      </div>
    </div>
  );
}
