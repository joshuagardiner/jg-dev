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

    expect(screen.getByTestId("education-collection")).toBeDefined();
    expect(screen.getByTestId("education-collection-title").textContent).toEqual("Education");
    expect(screen.queryByTestId("education-collection-no-results")).not.toBeInTheDocument;
  });

  it("renders no results when there are no Education passed to the EducationCollection component.", () => {
    const education: IEducation[] = [];
    render(<EducationCollection education={education} />);
    expect(screen.queryByTestId("education-collection")).not.toBeInTheDocument;
    expect(screen.getByTestId("education-collection-no-results")).toBeDefined();
  });
});
