import { render, screen } from "@testing-library/react";
import { IEducation } from "../../lib/models/IEducation";
import { EducationCollection } from "./EducationCollection";

describe("EducationCollection", () => {
  it("renders the EducationCollection component correctly.", () => {
    const education: IEducation[] = [
      {
        id: "1",
        course: "University",
        grades: [],
        faculty: "Bedroom under the stairs",
        tenure: "6 weeks"
      },
      {
        id: "2",
        course: "School",
        grades: [{ id: "1", value: "10 A's" }],
        faculty: "Classroom",
        tenure: "5 years"
      }
    ];

    render(<EducationCollection education={education} />);

    const educationComponent = screen.getByTestId("education-component");
    const educationTitle = screen.getByTestId("education-title");
    const educationCourses = screen.getAllByTestId("education-course");
    const educationFaculties = screen.getAllByTestId("education-faculty");
    const educationTenures = screen.getAllByTestId("education-tenure");
    const educationGrades = screen.getAllByTestId("education-grade");

    expect(educationComponent).toBeDefined();
    expect(educationTitle.textContent).toEqual("Education");
    expect(educationCourses).toHaveLength(2);
    expect(educationFaculties).toHaveLength(2);
    expect(educationTenures).toHaveLength(2);
    expect(educationGrades).toHaveLength(1);
  });
});
