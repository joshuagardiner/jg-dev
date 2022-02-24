import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the Footer component correctly.", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer.textContent).toEqual("Joshua Gardiner, 2022");
  });
});
