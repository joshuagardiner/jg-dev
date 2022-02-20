import { render, screen } from "@testing-library/react";
import { ISkills } from "../../lib/models/ISkills";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders the Skills component correctly.", () => {
    const skills: ISkills = {
      technical: ["Offensive spells", "Defensive spells", "Bilingual"],
      soft: ["Courage"]
    };

    render(<Skills skills={skills} />);

    const skillsTitle = screen.getByTestId("skills-title");
    const skillsList = screen.getByTestId("skills-list");
    const technicalSkills = screen.getAllByTestId("technical-skill");
    const softSkills = screen.getAllByTestId("soft-skill");

    expect(skillsTitle).toBeDefined();
    expect(skillsTitle.textContent).toEqual("Skills");
    expect(skillsList).toBeDefined();
    expect(technicalSkills).toHaveLength(3);
    expect(technicalSkills[0].textContent).toEqual("Offensive spells");
    expect(technicalSkills[1].textContent).toEqual("Defensive spells");
    expect(technicalSkills[2].textContent).toEqual("Bilingual");
    expect(softSkills).toHaveLength(1);
    expect(softSkills[0].textContent).toEqual("Courage");
  });
});
