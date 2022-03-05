import { render, screen } from "@testing-library/react";
import { SkillType } from "./ISkillProps";
import { Skill } from "./Skill";

describe("Skill", () => {
  it("renders the Skill component correctly, with a soft skill.", () => {
    render(<Skill skill="TEST" type={SkillType.Soft} />);

    const softSkill = screen.getByTestId("soft-skill");
    const technicalSkill = screen.queryByTestId("technical-skill");

    expect(softSkill.textContent).toEqual("TEST");
    expect(technicalSkill).not.toBeInTheDocument;
  });

  it("renders the Skill component correctly, with a technical skill.", () => {
    render(<Skill skill="TEST" type={SkillType.Technical} />);

    const softSkill = screen.queryByTestId("soft-skill");
    const technicalSkill = screen.getByTestId("technical-skill");

    expect(softSkill).not.toBeInTheDocument;
    expect(technicalSkill.textContent).toEqual("TEST");
  });
});
