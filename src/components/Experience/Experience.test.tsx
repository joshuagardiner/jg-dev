import { render, screen } from "@testing-library/react";
import { IExperience } from "../../lib/models/IExperience";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders the Experience component correctly.", () => {
    const exp: IExperience = {
      id: "1",
      priority: true,
      role: "Minister for Magic",
      company: "Ministry of Magic",
      tenure: "May '05 - Present",
      content: [{ id: "1", value: "The Minister for Magic across the Wizarding World." }]
    };

    render(
      <Experience
        company={exp.company}
        content={exp.content}
        id={exp.id}
        priority={exp.priority}
        role={exp.role}
        tenure={exp.tenure}
      />
    );

    const experienceRole = screen.getByTestId("experience-role");
    const experienceCompany = screen.getByTestId("experience-company");
    const experienceTenure = screen.getByTestId("experience-tenure");
    const experienceContent = screen.getAllByTestId("experience-content");

    expect(experienceRole.textContent).toEqual("Minister for Magic");
    expect(experienceCompany.textContent).toEqual("Ministry of Magic");
    expect(experienceTenure.textContent).toEqual("May '05 - Present");
    expect(experienceContent).toHaveLength(1);
    expect(experienceContent[0].textContent).toEqual(
      "The Minister for Magic across the Wizarding World."
    );
  });
});
