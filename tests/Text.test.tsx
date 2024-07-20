import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "../src";
import "@testing-library/jest-dom";

describe("Text", () => {
  it("renders text content correctly", () => {
    render(<Text>Hello, world!</Text>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Text className="custom-class">Custom text</Text>);
    expect(screen.getByText("Custom text")).toHaveClass("custom-class");
  });

  it('renders as different HTML elements based on "as" prop', () => {
    render(<Text as="h1">Heading</Text>);
    expect(
      screen.getByRole("heading", { level: 1, name: "Heading" })
    ).toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    render(<Text size="xl">Large text</Text>);
    expect(screen.getByText("Large text")).toHaveClass("text-xl");
  });

  it("applies weight classes correctly", () => {
    render(<Text weight="bold">Bold text</Text>);
    expect(screen.getByText("Bold text")).toHaveClass("font-bold");
  });
});
