import { render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the Header component correctly.", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeDefined();
  });
});
