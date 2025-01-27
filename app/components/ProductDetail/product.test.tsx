import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { ProductDetail } from "app/types/productDetail";
import { test, describe, expect } from "vitest";

const mockProduct: ProductDetail = {
  imageUrl: "https://example.com/image.jpg",
  productName: "Test Product",
  mkName: "Test MK Name",
  rating: 4,
  storageOptions: ["64GB", "128GB", "256GB"],
  badge: "New",
  countOfPrices: 3,
  price: 999.99,
  freeShipping: true,
  lastUpdate: "2023-10-01",
};

describe("Product Component", () => {
  test("renders product details correctly", () => {
    render(<Product product={mockProduct} />);

    expect(screen.getByText(mockProduct.productName)).toBeInTheDocument();

    expect(screen.getByText(`=${mockProduct.mkName}`)).toBeInTheDocument();

    const stars = screen.getAllByText("★");
    expect(stars).toHaveLength(5);
    stars.forEach((star, index) => {
      if (index < mockProduct.rating) {
        expect(star).toHaveStyle("color: rgb(255, 193, 7)");
      } else {
        expect(star).toHaveStyle("color: rgb(228, 229, 233)");
      }
    });

    mockProduct.storageOptions.forEach((storage) => {
      expect(screen.getByText(storage)).toBeInTheDocument();
    });

    expect(screen.getByText("Features:")).toBeInTheDocument();
    expect(screen.getByText("Ultra Wide camera")).toBeInTheDocument();
    expect(screen.getByText("Even longer battery life")).toBeInTheDocument();
    expect(screen.getByText("Durable design")).toBeInTheDocument();
    expect(screen.getByText("Action button")).toBeInTheDocument();
  });

  test("renders the product image", () => {
    render(<Product product={mockProduct} />);
    const img = screen.getByAltText(mockProduct.productName);
    expect(img).toHaveAttribute("src", mockProduct.imageUrl);
  });
});
