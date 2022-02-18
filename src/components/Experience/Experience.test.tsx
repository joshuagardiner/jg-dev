import { render, screen } from "@testing-library/react";
import { IExperience } from "../../lib/models/IExperience";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders the Experience component correctly.", () => {
    const experiences: IExperience[] = [
      {
        role: "Minister for Magic",
        company: "Ministry of Magic",
        tenure: "May '05 - Present",
        content: ["The", "Minister", "for", "Magic", "across", "the Wizarding World."]
      },
      {
        role: "Auror",
        company: "Ministry of Magic",
        tenure: "Aug '97 - May '05",
        content: ["Auror at the Ministry of Magic."]
      },
      {
        role: "Horcrux Hunter",
        company: "S/E",
        tenure: "Jun '95 - Apr '97",
        content: ["Hunting Horcruxes to defeat Lord Voldemort."]
      }
    ];

    render(<Experience experiences={experiences} />);

    const experienceComponent = screen.getByTestId("experience-component");
    const experienceTitle = screen.getByTestId("experience-title");
    const experienceRoles = screen.getAllByTestId("experience-role");
    const experienceCompanies = screen.getAllByTestId("experience-company");
    const experienceTenures = screen.getAllByTestId("experience-tenure");
    const experienceContent = screen.getAllByTestId("experience-content");
    const experienceSubContent = screen.getAllByTestId("experience-sub-content");

    expect(experienceComponent).toBeDefined();
    expect(experienceTitle.textContent).toEqual("Experience");
    expect(experienceRoles).toHaveLength(3);
    expect(experienceCompanies).toHaveLength(3);
    expect(experienceTenures).toHaveLength(3);
    expect(experienceContent).toHaveLength(1);
    expect(experienceSubContent).toHaveLength(2);
    expect(experienceRoles[0].textContent).toEqual("Minister for Magic");
    expect(experienceCompanies[0].textContent).toEqual("Ministry of Magic");
    expect(experienceTenures[0].textContent).toEqual("May '05 - Present");
    expect(experienceRoles[1].textContent).toEqual("Auror");
    expect(experienceCompanies[1].textContent).toEqual("Ministry of Magic");
    expect(experienceTenures[1].textContent).toEqual("Aug '97 - May '05");
    expect(experienceRoles[2].textContent).toEqual("Horcrux Hunter");
    expect(experienceCompanies[2].textContent).toEqual("S/E");
    expect(experienceTenures[2].textContent).toEqual("Jun '95 - Apr '97");
    expect(experienceContent[0].textContent).toEqual(
      "TheMinisterforMagicacrossthe Wizarding World."
    );
    expect(experienceSubContent[0].textContent).toEqual("Auror at the Ministry of Magic.");
    expect(experienceSubContent[1].textContent).toEqual(
      "Hunting Horcruxes to defeat Lord Voldemort."
    );
  });
});
