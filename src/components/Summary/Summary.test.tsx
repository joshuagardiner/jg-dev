import { render, screen } from "@testing-library/react";
import { Summary } from "./Summary";

describe("Summary", () => {
  it("renders the Summary component correctly.", () => {
    render(<Summary />);

    const summaryImage = screen.getByAltText("jg_avatar");
    const summaryTitle = screen.getByTestId("summary-title");
    const summaryRole = screen.getByTestId("summary-role");
    const summaryContent = screen.getByTestId("summary-content");
    const summaryAddress = screen.getByTestId("summary-contact-address");
    const summaryEmail = screen.getByTestId("summary-contact-email");
    const summaryTelephone = screen.getByTestId("summary-contact-telephone");
    const summaryDescription = screen.getByTestId("summary-description");

    expect(summaryImage).toBeDefined();
    expect(summaryTitle.textContent).toEqual("Joshua Gardiner");
    expect(summaryRole.textContent).toEqual("Software Development Engineer");
    expect(summaryContent).toBeDefined();
    expect(summaryAddress.textContent).toEqual("37 Oakwood Gardens, Halifax, HX28HB");
    expect(summaryEmail.textContent).toEqual("joshuagardiner@live.com");
    expect(summaryTelephone.textContent).toEqual("+44 7947 633 294");
    expect(summaryDescription.textContent).toEqual(
      "An experienced software development engineer with a passion for developing web applications. Well-versed in a variety of technologies to create applications that are reliable and user-friendly. A budding leader with a proven ability to mentor and motivate colleagues, who can communicate confidently, problem-solve effectively and use initiative to deliver applications tailored to organizational needs using best practices and the best tool for the job."
    );
  });

  it("renders the Summary component unchanged.", () => {
    const { container } = render(<Summary />);
    expect(container).toMatchSnapshot();
  });
});
