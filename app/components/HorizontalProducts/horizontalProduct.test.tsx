import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HorizontalProduct from "./HorizontalProduct";
import type { Product } from "app/types/productList";
import { test, describe, expect } from "vitest";

const mockProduct: Product = {
  code: 12345,
  name: "Test Product",
  imageUrl: "https://example.com/image.jpg",
  price: 1000,
  countOfPrices: 5,
  followCount: 10,
  dropRatio: 20,
  url: "https://example.com/product",
};

describe("HorizontalProduct Component", () => {
  test("renders product details correctly", () => {
    render(
      <MemoryRouter>
        <HorizontalProduct product={mockProduct} />
      </MemoryRouter>,
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

    expect(
      screen.getByText(
        `${new Intl.NumberFormat("tr-TR").format(mockProduct.price)} TL`,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${mockProduct.countOfPrices} satıcı`),
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${mockProduct.followCount}+ takip`),
    ).toBeInTheDocument();

    expect(screen.getByText(`${mockProduct.dropRatio}%`)).toBeInTheDocument();

    const img = screen.getByAltText(mockProduct.name);
    expect(img).toHaveAttribute("src", mockProduct.imageUrl);
  });

  test("renders the link with correct pathname and search params", () => {
    render(
      <MemoryRouter>
        <HorizontalProduct product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByText(mockProduct.name).closest("a");
    expect(link).toHaveAttribute(
      "href",
      `/${mockProduct.name.replace(/\s+/g, "-")}?code=${mockProduct.code}`,
    );
  });
});
