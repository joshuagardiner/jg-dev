import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect");
    jest.spyOn(React, "useState");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Header component correctly.", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            title: "TEST"
          })
      })
    );

    act(() => {
      render(<Header />);
    });

    expect(await screen.findByTestId("header-component")).toBeTruthy();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("/api/Title");
    expect(React.useEffect).toHaveBeenCalledTimes(2);
    expect(React.useState).toHaveNthReturnedWith(1, ["", expect.any(Function)]);
    expect(React.useState).toHaveNthReturnedWith(2, ["TEST", expect.any(Function)]);
  });

  it("renders an Error if the API has failed.", async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject("API failed."));

    act(() => {
      render(<Header />);
    });

    expect(await screen.findByTestId("header-component")).toBeTruthy();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("/api/Title");
    expect(React.useEffect).toHaveBeenCalledTimes(2);
    expect(React.useState).toHaveNthReturnedWith(1, ["", expect.any(Function)]);
    expect(React.useState).toHaveNthReturnedWith(2, ["JG.dev", expect.any(Function)]);
  });
});
