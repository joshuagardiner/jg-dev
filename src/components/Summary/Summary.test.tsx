import { render, screen } from "@testing-library/react";
import { Summary } from "./Summary";

describe("Summary", () => {
  it("renders the Summary component correctly.", () => {
    render(<Summary />);

    const summaryImage = screen.getByAltText("jg_avatar");
    const summaryTitles = screen.getAllByTestId("title");
    const summaryContactInfo = screen.getByTestId("summary-contact");
    const summaryAddress = screen.getByTestId("summary-contact-address");
    const summaryEmail = screen.getByTestId("summary-contact-email");
    const summaryTelephone = screen.getByTestId("summary-contact-telephone");
    const summaryText = screen.getAllByTestId("text");

    expect(summaryImage).toBeDefined();
    expect(summaryTitles).toHaveLength(2);
    expect(summaryTitles[0].textContent).toEqual("Joshua Gardiner");
    expect(summaryTitles[1].textContent).toEqual(
      "Software Development Engineer"
    );
    expect(summaryContactInfo).toBeDefined();
    expect(summaryAddress.textContent).toEqual(
      "37 Oakwood Gardens, Halifax, HX28HB"
    );
    expect(summaryEmail.textContent).toEqual("joshuagardiner@live.com");
    expect(summaryTelephone.textContent).toEqual("+44 7947 633 294");
    expect(summaryText).toHaveLength(2);
    expect(summaryText[0].textContent).toEqual(
      "An experienced software development engineer with a passion for developing web applications. Well-versed in a variety of technologies and writing code to create applications that are reliable and user-friendly."
    );
    expect(summaryText[1].textContent).toEqual(
      "A budding leader with a proven ability to mentor and motivate colleagues, who can communicate confidently, problem-solve effectively and utilise initiative to deliver applications that are tailored to organizational needs using best practices and the best tool for the job."
    );
  });

  it("renders the Summary component unchanged.", () => {
    const { container } = render(<Summary />);
    expect(container).toMatchSnapshot();
  });
});
