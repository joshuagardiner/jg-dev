import { render, screen } from "@testing-library/react";
import { Education } from "./Education";

describe("Education", () => {
  it("renders the Education component correctly.", () => {
    const course = "TEST";
    const grades = [
      { id: "1", value: "PASS" },
      { id: "2", value: "FAIL" }
    ];
    const faculty = "WFH";
    const tenure = "Jan - Feb";

    render(<Education course={course} faculty={faculty} grades={grades} tenure={tenure} />);

    const expectedCourse = screen.getByTestId("education-course");
    const expectedFaculty = screen.getByTestId("education-faculty");
    const expectedTenure = screen.getByTestId("education-tenure");
    const expectedGrades = screen.getAllByTestId("education-grade");

    expect(expectedCourse.textContent).toEqual("TEST");
    expect(expectedFaculty.textContent).toEqual("WFH");
    expect(expectedGrades).toHaveLength(2);
    expect(expectedGrades[0].textContent).toEqual("PASS");
    expect(expectedGrades[1].textContent).toEqual("FAIL");
    expect(expectedTenure.textContent).toEqual("Jan - Feb");
  });
});
