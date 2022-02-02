import { fireEvent, render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";

beforeEach(() => {
  global.open = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Navigation", () => {
  it("should render the Navigation component correctly.", () => {
    render(<Navigation />);

    const navigationTitle = screen.getByTestId("navigation-title");
    const navigationGitHubBtn = screen.getByTestId(
      "icon-btn-navigation-github"
    );
    const navigationLinkedInBtn = screen.getByTestId(
      "icon-btn-navigation-linkedin"
    );

    expect(navigationTitle.textContent).toEqual("JG.dev");
    expect(navigationGitHubBtn).toBeDefined();
    expect(navigationLinkedInBtn).toBeDefined();
  });

  it("should open a new tab when clicking the GitHub IconButton.", () => {
    render(<Navigation />);

    const navigationGitHubBtn = screen.getByTestId(
      "icon-btn-navigation-github"
    );
    fireEvent.click(navigationGitHubBtn);

    expect(global.open).toHaveBeenCalledWith(
      "https://github.com/joshuagardiner",
      "_blank"
    );
  });

  it("should open a new tab when clicking the LinkedIn IconButton.", () => {
    render(<Navigation />);

    const navigationLinkedInBtn = screen.getByTestId(
      "icon-btn-navigation-linkedin"
    );
    fireEvent.click(navigationLinkedInBtn);

    expect(global.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/joshua-gardiner",
      "_blank"
    );
  });

  it("renders the Navigation component unchanged.", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
