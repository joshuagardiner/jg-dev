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

    expect(screen.getByTestId("education")).toBeDefined();
    expect(screen.getByTestId("education-course").textContent).toEqual("TEST");
    expect(screen.getByTestId("education-faculty").textContent).toEqual("WFH");
    expect(screen.getByTestId("education-tenure").textContent).toEqual("Jan - Feb");
    expect(screen.getAllByTestId("education-grade")).toHaveLength(2);
    expect(screen.getAllByTestId("education-grade")[0].textContent).toEqual("PASS");
    expect(screen.getAllByTestId("education-grade")[1].textContent).toEqual("FAIL");
  });
});
