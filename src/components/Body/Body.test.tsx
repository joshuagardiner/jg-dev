import { render, screen } from "@testing-library/react";
import { Body } from "./Body";

describe("Body", () => {
  it("renders the Body component correctly.", () => {
    render(<Body />);

    const bodyComponent = screen.getByTestId("body-component");
    const summaryComponent = screen.getByTestId("summary-component");
    const skillsComponent = screen.getByTestId("skills-component");
    const experienceComponent = screen.getByTestId("experience-component");
    const educationComponent = screen.getByTestId("education-component");

    expect(bodyComponent).toBeDefined();
    expect(summaryComponent).toBeDefined();
    expect(skillsComponent).toBeDefined();
    expect(experienceComponent).toBeDefined();
    expect(educationComponent).toBeDefined();
  });

  it("renders the Body component unchanged.", () => {
    const { container } = render(<Body />);
    expect(container).toMatchSnapshot();
  });
});
