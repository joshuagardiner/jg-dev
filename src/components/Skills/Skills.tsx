import React from "react";
import { ISkillsProps } from "./ISkillsProps";
import styling from "./Skills.module.css";

/**
 * The Skills component is reponsible for rendering content
 * within the application Body.
 *
 * @returns the Skills component.
 */
export const Skills: React.FC<ISkillsProps> = (props: ISkillsProps) => {
  const { skills } = props;

  return skills ? (
    <div data-testid={"skills-component"}>
      <h2 className={styling.title} data-testid={"skills-title"}>
        Skills
      </h2>
      <ul className={styling.skills} data-testid={"skills-list"}>
        {skills.technical.map((skill) => (
          <li data-testid={"technical-skill"} key={skill}>
            <p>{skill}</p>
          </li>
        ))}
        {skills.soft.map((softSkill) => (
          <li data-testid={"soft-skill"} key={softSkill}>
            <p>{softSkill}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};
