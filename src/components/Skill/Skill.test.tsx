import { render, screen } from "@testing-library/react";
import { SkillType } from "./ISkillProps";
import { Skill } from "./Skill";

describe("Skill", () => {
  it("renders the Skill component correctly, with a soft skill.", () => {
    render(<Skill skill="TEST" type={SkillType.Soft} />);
    expect(screen.getByTestId("soft-skill").textContent).toEqual("TEST");
    expect(screen.queryByTestId("technical-skill")).not.toBeInTheDocument;
  });

  it("renders the Skill component correctly, with a technical skill.", () => {
    render(<Skill skill="TEST" type={SkillType.Technical} />);
    expect(screen.queryByTestId("soft-skill")).not.toBeInTheDocument;
    expect(screen.getByTestId("technical-skill").textContent).toEqual("TEST");
  });
});
