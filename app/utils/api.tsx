export const getProducts = async (url?: string) => {
  const res = await fetch(url || "https://mock.akakce.dev/page.json");
  const products = await res.json();
  return { products };
};

export const getProductDetail = async (code: string) => {
  const res = await fetch(`https://mock.akakce.dev/product${code}.json`);
  const product = await res.json();
  return product;
};
