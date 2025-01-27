import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Product from "./Product";
import type { Product as ProductType } from "app/types/productList";
import { test, describe, expect } from "vitest";

const mockProduct: ProductType = {
  code: 12345,
  name: "Test Product",
  imageUrl: "https://example.com/image.jpg",
  price: 1000,
  countOfPrices: 5,
  followCount: 10,
  dropRatio: 20,
  url: "https://example.com/product",
};

describe("Product Component", () => {
  test("renders product details correctly", () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} />
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
        <Product product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByText(mockProduct.name).closest("a");
    expect(link).toHaveAttribute(
      "href",
      `/${mockProduct.name.replace(/\s+/g, "-")}?code=${mockProduct.code}`,
    );
  });
});
