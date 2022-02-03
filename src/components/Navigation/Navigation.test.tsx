import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Navigation } from "./Navigation";

describe("Navigation", () => {
  const OLD_OPEN = global.open;

  beforeEach(() => {
    global.open = jest.fn();
  });

  afterEach(() => {
    global.open = OLD_OPEN;
    jest.clearAllMocks();
  });

  it("renders the Navigation component correctly.", () => {
    render(<Navigation title={"TEST"} />);

    const navigationTitle = screen.getByTestId("navigation-title");
    const navigationGitHubBtn = screen.getByTestId("icon-btn-navigation-github");
    const navigationLinkedInBtn = screen.getByTestId("icon-btn-navigation-linkedin");

    expect(navigationTitle.textContent).toEqual("TEST");
    expect(navigationGitHubBtn).toBeDefined();
    expect(navigationLinkedInBtn).toBeDefined();
  });

  it("should open a new tab when clicking the GitHub IconButton.", () => {
    render(<Navigation title={"TEST"} />);

    const navigationGitHubBtn = screen.getByTestId("icon-btn-navigation-github");
    fireEvent.click(navigationGitHubBtn);

    expect(global.open).toHaveBeenCalledWith("https://github.com/joshuagardiner", "_blank");
  });

  it("should open a new tab when clicking the LinkedIn IconButton.", () => {
    render(<Navigation title={"TEST"} />);

    const navigationLinkedInBtn = screen.getByTestId("icon-btn-navigation-linkedin");
    fireEvent.click(navigationLinkedInBtn);

    expect(global.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/joshua-gardiner",
      "_blank"
    );
  });
});
