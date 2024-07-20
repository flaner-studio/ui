import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "../src/";

describe("Button", () => {
  it("renders with the correct text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled button</Button>);
    expect(
      screen.getByRole("button", { name: /disabled button/i })
    ).toBeDisabled();
  });

  test("applies variant styles correctly", () => {
    render(<Button variant="primary">Primary button</Button>);
    const button = screen.getByRole("button", { name: /primary button/i });
    expect(button).toHaveClass("bg-blue-500");
  });

  test("applies size styles correctly", () => {
    render(<Button size="large">Large button</Button>);
    const button = screen.getByRole("button", { name: /large button/i });
    expect(button).toHaveClass("px-6 py-3 text-lg");
  });
});
