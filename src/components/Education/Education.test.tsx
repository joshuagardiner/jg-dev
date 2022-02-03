import { render, screen } from "@testing-library/react";
import { Education } from "./Education";

describe("Education", () => {
  it("renders the Education component correctly.", () => {
    render(<Education />);

    const educationTitles = screen.getAllByTestId("title");
    const educationText = screen.getAllByTestId("text");

    expect(educationTitles).toHaveLength(6);
    expect(educationTitles[0].textContent).toEqual("Education");
    expect(educationTitles[1].textContent).toEqual("BSc (Hons) COMPUTING");
    expect(educationTitles[2].textContent).toEqual("Manchester Metropolitan University");
    expect(educationTitles[3].textContent).toEqual("September '11 - June '16");
    expect(educationTitles[4].textContent).toEqual("The Brooksbank School and Sixth Form");
    expect(educationTitles[5].textContent).toEqual("September '03 - June '10");

    expect(educationText).toHaveLength(3);
    expect(educationText[0].textContent).toEqual("A-level's: Information technology, Geography");
    expect(educationText[1].textContent).toEqual(
      "AS-level's: Business studies, Physical education"
    );
    expect(educationText[2].textContent).toEqual("GCSE's: 10 [A-C]");
  });

  it("renders the Education component unchanged.", () => {
    const { container } = render(<Education />);
    expect(container).toMatchSnapshot();
  });
});
