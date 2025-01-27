import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { test, describe, expect } from "vitest";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders the header with the correct name", () => {
    const name = "Test Product";

    render(<Header name={name} />);

    const headingElement = screen.getByText(`Product > ${name}`);
    expect(headingElement).toBeInTheDocument();
  });
});
