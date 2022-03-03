import React from "react";
import { ISkillsProps } from "./ISkillsProps";
import styles from "./Skills.module.scss";

/**
 * The Skills component is reponsible for rendering a list of technical
 * and soft skills within the application body.
 *
 * @props the properties that can be passed into the component.
 * @returns the Skills component.
 */
export const Skills: React.FC<ISkillsProps> = (props: ISkillsProps) => {
  const { skills } = props;

  return skills ? (
    <div data-testid={"skills-component"}>
      <h2 className={styles.title} data-testid={"skills-title"}>
        Skills
      </h2>
      <ul className={styles.skills} data-testid={"skills-list"}>
        {skills.technical.map((skill) => (
          <li className={styles.skill} data-testid={"technical-skill"} key={skill}>
            <p>{skill}</p>
          </li>
        ))}
        {skills.soft.map((softSkill) => (
          <li className={styles.skill} data-testid={"soft-skill"} key={softSkill}>
            <p>{softSkill}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};
