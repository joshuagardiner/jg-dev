import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the Footer component correctly.", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeDefined();
    expect(screen.getByTestId("footer").textContent).toEqual("Joshua Gardiner, 2022");
  });
});
