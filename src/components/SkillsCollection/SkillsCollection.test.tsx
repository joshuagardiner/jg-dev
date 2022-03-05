import { render, screen } from "@testing-library/react";
import { ISkills } from "../../lib/models/ISkills";
import { SkillsCollection } from "./SkillsCollection";

describe("SkillsCollection", () => {
  it("renders the Skills component correctly.", () => {
    const skills: ISkills = {
      technical: ["Offensive spells", "Defensive spells", "Bilingual"],
      soft: ["Courage"]
    };

    render(<SkillsCollection skills={skills} />);

    const skillsTitle = screen.getByTestId("skills-title");
    const skillsList = screen.getByTestId("skills-list");
    const technicalSkills = screen.getAllByTestId("technical-skill");
    const softSkills = screen.getAllByTestId("soft-skill");

    expect(skillsTitle).toBeDefined();
    expect(skillsTitle.textContent).toEqual("Skills");
    expect(skillsList).toBeDefined();
    expect(technicalSkills).toHaveLength(3);
    expect(softSkills).toHaveLength(1);
  });
});
