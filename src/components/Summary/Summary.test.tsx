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

    const summaryImage = screen.getByAltText("jg_avatar");
    const summaryTitle = screen.getByTestId("summary-title");
    const summaryRole = screen.getByTestId("summary-role");
    const summaryAddress = screen.getByTestId("summary-contact-address");
    const summaryEmail = screen.getByTestId("summary-contact-email");
    const summaryTelephone = screen.getByTestId("summary-contact-telephone");
    const summaryGitHubBtn = screen.getByTestId("summary-github-btn");
    const summaryLinkedInBtn = screen.getByTestId("summary-linkedin-btn");
    const summaryDescription = screen.getByTestId("summary-description");
    const summaryDescriptionContents = screen.getAllByTestId("summary-description-content");

    expect(summaryImage).toBeDefined();
    expect(summaryTitle.textContent).toEqual("Harry Potter");
    expect(summaryRole.textContent).toEqual("Auror");
    expect(summaryAddress.textContent).toEqual("4 Privet Drive, Little Whinging, Surrey");
    expect(summaryEmail.textContent).toEqual("Harry.Potter@MoM.co.uk");
    expect(summaryTelephone.textContent).toEqual("+44 1234 567 890");
    expect(summaryGitHubBtn).toBeDefined();
    expect(summaryLinkedInBtn).toBeDefined();
    expect(summaryDescription).toBeDefined();
    expect(summaryDescriptionContents[0].textContent).toEqual("Test paragraph 1.");
    expect(summaryDescriptionContents[1].textContent).toEqual("Test paragraph 2.");
  });

  it("should open a new tab when clicking the GitHub IconButton.", () => {
    render(<Summary summary={summary} />);

    const summaryGitHubBtn = screen.getByTestId("summary-github-btn");
    fireEvent.click(summaryGitHubBtn);

    expect(global.open).toHaveBeenCalledWith("https://github.com/joshuagardiner", "_blank");
  });

  it("should open a new tab when clicking the LinkedIn IconButton.", () => {
    render(<Summary summary={summary} />);

    const summaryLinkedInBtn = screen.getByTestId("summary-linkedin-btn");
    fireEvent.click(summaryLinkedInBtn);

    expect(global.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/joshua-gardiner",
      "_blank"
    );
  });
});
