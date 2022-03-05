import { ISkillProps } from "./ISkillProps";
import styles from "./Skill.module.scss";

/**
 * The Skill component is responsible for rendering a single skill
 * within the application body.
 *
 * @props the properties that can be passed into the component.
 * @returns the Skill component.
 */
export const Skill: React.FC<ISkillProps> = (props: ISkillProps) => {
  const { skill, type } = props;

  return (
    <li className={styles.skill} data-testid={`${type}-skill`}>
      <p>{skill}</p>
    </li>
  );
};
