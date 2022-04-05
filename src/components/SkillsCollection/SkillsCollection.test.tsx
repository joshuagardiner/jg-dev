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

    expect(screen.getByTestId("skills-collection")).toBeDefined();
    expect(screen.getByTestId("skills-collection-title").textContent).toEqual("Skills");
    expect(screen.getByTestId("skills")).toBeDefined();
  });
});
