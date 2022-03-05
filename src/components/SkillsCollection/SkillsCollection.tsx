import React from "react";
import { SkillType } from "../Skill/ISkillProps";
import { Skill } from "../Skill/Skill";
import { ISkillsCollectionProps } from "./ISkillsCollectionProps";
import styles from "./SkillsCollection.module.scss";

/**
 * The SkillsCollection component is reponsible for rendering a list of technical
 * and soft skills within the application body.
 *
 * @props the properties that can be passed into the component.
 * @returns the SkillsCollection component.
 */
export const SkillsCollection: React.FC<ISkillsCollectionProps> = (
  props: ISkillsCollectionProps
) => {
  const { skills } = props;

  return skills ? (
    <div data-testid={"skills-component"}>
      <h2 className={styles.title} data-testid={"skills-title"}>
        Skills
      </h2>
      <ul className={styles.skills} data-testid={"skills-list"}>
        {skills.technical.map((skill) => (
          <Skill key={skill} skill={skill} type={SkillType.Technical} />
        ))}
        {skills.soft.map((softSkill) => (
          <Skill key={softSkill} skill={softSkill} type={SkillType.Soft} />
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};
