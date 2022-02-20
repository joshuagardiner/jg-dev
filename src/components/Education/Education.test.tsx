import { render, screen } from "@testing-library/react";
import { IEducation } from "../../lib/models/IEducation";
import { Education } from "./Education";

describe("Education", () => {
  it("renders the Education component correctly.", () => {
    const education: IEducation[] = [
      {
        courseOfStudy: "University",
        grades: [],
        placeOfStudy: "Bedroom under the stairs",
        tenure: "6 weeks"
      },
      {
        courseOfStudy: "School",
        grades: ["A's", "B's", "C's"],
        placeOfStudy: "Classroom",
        tenure: "5 years"
      }
    ];
    render(<Education education={education} />);

    const educationComponent = screen.getByTestId("education-component");
    const educationTitle = screen.getByTestId("education-title");
    const educationCourse = screen.getByTestId("education-course");
    const educationFaculties = screen.getAllByTestId("education-faculty");
    const educationTenures = screen.getAllByTestId("education-tenure");
    const educationGrades = screen.getByTestId("education-grades");

    expect(educationComponent).toBeDefined();
    expect(educationTitle.textContent).toEqual("Education");
    expect(educationCourse.textContent).toEqual("University");
    expect(educationFaculties).toHaveLength(2);
    expect(educationTenures).toHaveLength(2);
    expect(educationFaculties[0].textContent).toEqual("Bedroom under the stairs");
    expect(educationTenures[0].textContent).toEqual("6 weeks");
    expect(educationFaculties[1].textContent).toEqual("Classroom");
    expect(educationTenures[1].textContent).toEqual("5 years");
    expect(educationGrades.textContent).toEqual("A'sB'sC's");
  });
});
