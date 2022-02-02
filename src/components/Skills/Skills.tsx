import React from "react";
import { Text, Title } from "@joshuagardiner/typescript-component-library";
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
      <Title fontSize={"2vw"} marginTop={"7.5%"} text={"Skills"} />
      <ul className={styling.skills} data-testid={"skills-list"}>
        {skillsArray.map((skill) => (
          <li data-testid={"technical-skill"} key={skill}>
            {<Text fontSize={"1.125vw"} text={skill} />}
          </li>
        ))}
        {softSkillsArray.map((softSkill) => (
          <li data-testid={"soft-skill"} key={softSkill}>
            {<Text fontSize={"1.125vw"} text={softSkill} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
