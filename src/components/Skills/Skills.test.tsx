import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders the Skills component correctly.", () => {
    render(<Skills />);

    const skillsTitle = screen.getByTestId("title");
    const skillsList = screen.getByTestId("skills-list");
    const technicalSkills = screen.getAllByTestId("technical-skill");
    const softSkills = screen.getAllByTestId("soft-skill");

    expect(skillsTitle).toBeDefined();
    expect(skillsTitle.textContent).toEqual("Skills");
    expect(skillsList).toBeDefined();
    expect(technicalSkills).toHaveLength(13);
    expect(softSkills).toHaveLength(5);
  });

  it("renders the Skills component unchanged.", () => {
    const { container } = render(<Skills />);
    expect(container).toMatchSnapshot();
  });
});
