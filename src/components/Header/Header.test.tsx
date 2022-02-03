import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the Header component correctly.", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            title: {
              name: "TEST"
            }
          })
      })
    );

    act(() => {
      render(<Header />);
    });

    const headerComponent = screen.getByTestId("header-component");
    const navigationComponent = screen.getByTestId("navigation-component");
    const navigationTitle = await screen.findByText("TEST");

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith("/api/Title");
    expect(headerComponent).toBeDefined();
    expect(navigationComponent).toBeDefined();
    expect(navigationTitle).toBeTruthy();
  });

  it("renders an Error if the API has failed.", async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject("API failed."));

    act(() => {
      render(<Header />);
    });

    const headerComponent = screen.getByTestId("header-component");
    const navigationError = await screen.findByText("Error: API failed.");

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(headerComponent).toBeDefined();
    expect(navigationError).toBeTruthy();
  });
});
