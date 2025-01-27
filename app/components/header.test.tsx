import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, test, expect } from "vitest";

describe("Header Component", () => {
  test("renders the header with the correct title", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { name: /products/i });
    expect(heading).toBeInTheDocument();
  });
});
