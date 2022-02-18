import { render, screen } from "@testing-library/react";
import React from "react";
import { ISummary } from "../../lib/models/ISummary";
import { Summary } from "./Summary";

describe("Summary", () => {
  it("renders the Summary component correctly.", () => {
    const summary: ISummary = {
      name: "Harry Potter",
      role: "Auror",
      address: "4 Privet Drive, Little Whinging, Surrey",
      email: "Harry.Potter@MoM.co.uk",
      telephone: "+44 1234 567 890",
      content: { p1: "Test paragraph 1.", p2: "Test paragraph 2." }
    };

    render(<Summary summary={summary} />);

    const summaryImage = screen.getByAltText("jg_avatar");
    const summaryTitle = screen.getByTestId("summary-title");
    const summaryRole = screen.getByTestId("summary-role");
    const summaryContent = screen.getByTestId("summary-content");
    const summaryAddress = screen.getByTestId("summary-contact-address");
    const summaryEmail = screen.getByTestId("summary-contact-email");
    const summaryTelephone = screen.getByTestId("summary-contact-telephone");
    const summaryDescription = screen.getByTestId("summary-description");
    const summaryDescriptionContents = screen.getAllByTestId("summary-description-content");

    expect(summaryImage).toBeDefined();
    expect(summaryTitle.textContent).toEqual("Harry Potter");
    expect(summaryRole.textContent).toEqual("Auror");
    expect(summaryContent).toBeDefined();
    expect(summaryAddress.textContent).toEqual("4 Privet Drive, Little Whinging, Surrey");
    expect(summaryEmail.textContent).toEqual("Harry.Potter@MoM.co.uk");
    expect(summaryTelephone.textContent).toEqual("+44 1234 567 890");
    expect(summaryDescription).toBeDefined();
    expect(summaryDescriptionContents[0].textContent).toEqual("Test paragraph 1.");
    expect(summaryDescriptionContents[1].textContent).toEqual("Test paragraph 2.");
  });
});
