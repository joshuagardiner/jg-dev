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

    expect(screen.getByTestId("experience-role").textContent).toEqual("Minister for Magic");
    expect(screen.getByTestId("experience-company").textContent).toEqual("Ministry of Magic");
    expect(screen.getByTestId("experience-tenure").textContent).toEqual("May '05 - Present");
    expect(screen.getAllByTestId("experience-content")).toHaveLength(1);
    expect(screen.getAllByTestId("experience-content")[0].textContent).toEqual(
      "The Minister for Magic across the Wizarding World."
    );
  });
});
