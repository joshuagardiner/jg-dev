import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the Header component correctly.", () => {
    render(<Header />);

    const header = screen.getByTestId("header-component");

    expect(header).toBeDefined();
  });

  it("renders the Header component unchanged.", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
