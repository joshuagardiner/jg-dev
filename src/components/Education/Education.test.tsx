import { render, screen } from "@testing-library/react";
import { Education } from "./Education";

describe("Education", () => {
  it("renders the Education component correctly.", () => {
    render(<Education />);

    const educationComponent = screen.getByTestId("education-component");
    const educationTitle = screen.getByTestId("education-title");
    const educationCourse = screen.getByTestId("education-course");
    const educationFaculties = screen.getAllByTestId("education-faculty");
    const educationTenures = screen.getAllByTestId("education-tenure");
    const educationGrades = screen.getByTestId("education-grades");

    expect(educationComponent).toBeDefined();
    expect(educationTitle.textContent).toEqual("Education");
    expect(educationCourse.textContent).toEqual("BSc (Hons) COMPUTING");
    expect(educationFaculties).toHaveLength(2);
    expect(educationTenures).toHaveLength(2);
    expect(educationFaculties[0].textContent).toEqual("Manchester Metropolitan University");
    expect(educationTenures[0].textContent).toEqual("September '11 - June '16");
    expect(educationFaculties[1].textContent).toEqual("The Brooksbank School and Sixth Form");
    expect(educationTenures[1].textContent).toEqual("September '03 - June '10");
    expect(educationGrades.textContent).toEqual(
      "A-level's: Information technology, GeographyAS-level's: Business studies, Physical educationGCSE's: 10 [A-C]"
    );
  });

  it("renders the Education component unchanged.", () => {
    const { container } = render(<Education />);
    expect(container).toMatchSnapshot();
  });
});
