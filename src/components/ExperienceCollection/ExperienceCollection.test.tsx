import { render, screen } from "@testing-library/react";
import { IExperience } from "../../lib/models/IExperience";
import { ExperienceCollection } from "./ExperienceCollection";

describe("ExperienceCollection", () => {
  it("renders the ExperienceCollection component correctly.", () => {
    const experiences: IExperience[] = [
      {
        id: "1",
        priority: true,
        role: "Minister for Magic",
        company: "Ministry of Magic",
        tenure: "May '05 - Present",
        content: [{ id: "1", value: "The Minister for Magic across the Wizarding World." }]
      },
      {
        id: "2",
        priority: false,
        role: "Auror",
        company: "Ministry of Magic",
        tenure: "Aug '97 - May '05",
        content: [{ id: "1", value: "Auror at the Ministry of Magic." }]
      },
      {
        id: "3",
        priority: false,
        role: "Horcrux Hunter",
        company: "S/E",
        tenure: "Jun '95 - Apr '97",
        content: [{ id: "1", value: "Hunting Horcruxes to defeat Lord Voldemort." }]
      }
    ];

    render(<ExperienceCollection experiences={experiences} />);

    expect(screen.getByTestId("experience-collection")).toBeDefined();
    expect(screen.getByTestId("experience-collection-title").textContent).toEqual("Experience");
    expect(screen.queryByTestId("experience-collection-no-results")).not.toBeInTheDocument;
  });

  it("renders no results when there are no Experiences passed to the ExperienceCollection component.", () => {
    const experiences: IExperience[] = [];
    render(<ExperienceCollection experiences={experiences} />);
    expect(screen.queryByTestId("experience-collection")).not.toBeInTheDocument;
    expect(screen.getByTestId("experience-collection-no-results")).toBeDefined();
  });
});
