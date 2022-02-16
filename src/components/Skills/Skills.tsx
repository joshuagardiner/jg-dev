import React from "react";
import styling from "./Skills.module.css";

/**
 * The Skills component is reponsible for rendering content
 * within the application Body.
 *
 * @returns the Skills component.
 */
export const Skills: React.FC = () => {
  /**
   * The technical skills.
   */
  const skillsArray: string[] = [
    "React",
    "TypeScript",
    "CI/CD",
    "AWS",
    "Azure",
    "TDD",
    "GitHub",
    "Jest",
    "Cypress",
    "Terraform",
    "Docker",
    "C#",
    "Golang"
  ];

  /**
   * The soft skills.
   */
  const softSkillsArray: string[] = [
    "Communication",
    "Iniative",
    "Leadership",
    "Problem solving",
    "Teamwork"
  ];

  return (
    <div data-testid={"skills-component"}>
      <h2 className={styling.title} data-testid={"skills-title"}>
        Skills
      </h2>
      <ul className={styling.skills} data-testid={"skills-list"}>
        {skillsArray.map((skill) => (
          <li data-testid={"technical-skill"} key={skill}>
            <p>{skill}</p>
          </li>
        ))}
        {softSkillsArray.map((softSkill) => (
          <li data-testid={"soft-skill"} key={softSkill}>
            <p>{softSkill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
