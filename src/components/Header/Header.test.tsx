import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the Header component correctly.", () => {
    render(<Header />);

    const headerComponent = screen.getByTestId("header-component");
    const navigationComponent = screen.getByTestId("navigation-component");

    expect(headerComponent).toBeDefined();
    expect(navigationComponent).toBeDefined();
  });

  it("renders the Header component unchanged.", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
