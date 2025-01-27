import HorizontalProduct from "./HorizontalProduct";
import type { ProductList } from "app/types/productList";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function HorizontalProducts({
  products,
}: {
  products: ProductList;
}) {
  const slideLeft = () => {
    const slider = document.getElementById("slider");

    if (slider) slider.scrollLeft = slider.scrollLeft - 450;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");

    if (slider) slider.scrollLeft = slider.scrollLeft + 450;
  };

  return (
    <div className="relative flex items-center max-w-xl items-center justify-between mx-auto">
      <button
        aria-label="chevron left"
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideLeft}
      >
        <MdChevronLeft size={40} />
      </button>
      <div
        id="slider"
        role="region"
        aria-label="Product slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {products.horizontalProductList?.map((product) => (
          <HorizontalProduct key={product.code} product={product} />
        ))}
      </div>
      <button
        aria-label="chevron right"
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={slideRight}
      >
        <MdChevronRight size={40} />
      </button>
    </div>
  );
}
