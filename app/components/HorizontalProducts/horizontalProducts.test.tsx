import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HorizontalProducts from "./HorizontalProducts";
import { ProductList } from "app/types/productList";
import { test, describe, expect } from "vitest";

const mockProducts: ProductList = {
  horizontalProductList: [
    {
      code: 12345,
      name: "Test Product 1",
      imageUrl: "https://example.com/image1.jpg",
      price: 1000,
      countOfPrices: 5,
      followCount: 10,
      dropRatio: 20,
      url: "https://example.com/product1",
    },
    {
      code: 67890,
      name: "Test Product 2",
      imageUrl: "https://example.com/image2.jpg",
      price: 2000,
      countOfPrices: 3,
      followCount: 5,
      dropRatio: 15,
      url: "https://example.com/product2",
    },
  ],
  productList: [
    {
      code: 12345,
      name: "Test Product 1",
      imageUrl: "https://example.com/image1.jpg",
      price: 1000,
      countOfPrices: 5,
      followCount: 10,
      dropRatio: 20,
      url: "https://example.com/product1",
    },
    {
      code: 67890,
      name: "Test Product 2",
      imageUrl: "https://example.com/image2.jpg",
      price: 2000,
      countOfPrices: 3,
      followCount: 5,
      dropRatio: 15,
      url: "https://example.com/product2",
    },
  ],
};

describe("HorizontalProducts Component", () => {
  test("renders product list correctly", () => {
    render(
      <MemoryRouter>
        <HorizontalProducts products={mockProducts} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Test Product 1")).toBeInTheDocument();
    expect(screen.getByText("Test Product 2")).toBeInTheDocument();
  });

  test("scrolls left when left chevron is clicked", () => {
    render(
      <MemoryRouter>
        <HorizontalProducts products={mockProducts} />
      </MemoryRouter>,
    );

    const slider = screen.getByRole("region", { name: /Product slider/i });
    const leftChevron = screen.getByLabelText(/chevron left/i);

    expect(slider.scrollLeft).toBe(0);

    fireEvent.click(leftChevron);

    expect(slider.scrollLeft).toBe(-450);
  });

  test("scrolls right when right chevron is clicked", () => {
    render(
      <MemoryRouter>
        <HorizontalProducts products={mockProducts} />
      </MemoryRouter>,
    );

    const slider = screen.getByRole("region", { name: /Product slider/i });
    const rightChevron = screen.getByLabelText(/chevron right/i);

    expect(slider.scrollLeft).toBe(0);

    fireEvent.click(rightChevron);

    expect(slider.scrollLeft).toBe(450);
  });
});
