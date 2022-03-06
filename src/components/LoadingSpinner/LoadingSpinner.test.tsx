import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("should render the LoadingSpinner component correctly.", () => {
    render(<LoadingSpinner text={"TEST"} />);
    expect(screen.getByTestId("loading-spinner").textContent).toEqual("TEST");
  });
});
