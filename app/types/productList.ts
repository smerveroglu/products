export type Product = {
  code: number;
  name: string;
  imageUrl: string;
  dropRatio: number;
  price: number;
  countOfPrices: number;
  followCount: number;
  url: string;
};
export type ProductList = {
  horizontalProductList?: Product[];
  productList: Product[];
  nextUrl?: string;
};
