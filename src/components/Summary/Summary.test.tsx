import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ISummary } from "../../lib/models/ISummary";
import { Summary } from "./Summary";

describe("Summary", () => {
  const OLD_OPEN = global.open;

  const summary: ISummary = {
    name: "Harry Potter",
    role: "Auror",
    address: "4 Privet Drive, Little Whinging, Surrey",
    email: "Harry.Potter@MoM.co.uk",
    telephone: "+44 1234 567 890",
    content: [
      { id: "1", value: "Test paragraph 1." },
      { id: "2", value: "Test paragraph 2." }
    ]
  };

  beforeEach(() => {
    global.open = jest.fn();
  });

  afterEach(() => {
    global.open = OLD_OPEN;
    jest.clearAllMocks();
  });

  it("renders the Summary component correctly.", () => {
    render(<Summary summary={summary} />);

    expect(screen.getByAltText("jg_avatar")).toBeDefined();
    expect(screen.getByTestId("summary-title").textContent).toEqual("Harry Potter");
    expect(screen.getByTestId("summary-role").textContent).toEqual("Auror");
    expect(screen.getByTestId("summary-contact-address").textContent).toEqual(
      "4 Privet Drive, Little Whinging, Surrey"
    );
    expect(screen.getByTestId("summary-contact-email").textContent).toEqual(
      "Harry.Potter@MoM.co.uk"
    );
    expect(screen.getByTestId("summary-contact-telephone").textContent).toEqual("+44 1234 567 890");
    expect(screen.getByTestId("summary-github-btn")).toBeDefined();
    expect(screen.getByTestId("summary-linkedin-btn")).toBeDefined();
    expect(screen.getByTestId("summary-description")).toBeDefined();
    expect(screen.getAllByTestId("summary-description-content")[0].textContent).toEqual(
      "Test paragraph 1."
    );
    expect(screen.getAllByTestId("summary-description-content")[1].textContent).toEqual(
      "Test paragraph 2."
    );
  });

  it("should open a new tab when clicking the GitHub IconButton.", () => {
    render(<Summary summary={summary} />);
    fireEvent.click(screen.getByTestId("summary-github-btn"));
    expect(global.open).toHaveBeenCalledWith("https://github.com/joshuagardiner", "_blank");
  });

  it("should open a new tab when clicking the LinkedIn IconButton.", () => {
    render(<Summary summary={summary} />);
    fireEvent.click(screen.getByTestId("summary-linkedin-btn"));
    expect(global.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/joshua-gardiner",
      "_blank"
    );
  });
});
