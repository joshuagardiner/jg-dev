/**
 * The properties available to the Skill component.
 */
export interface ISkillProps {
  /**
   * The skill.
   */
  skill: string;

  /**
   * The type of skill.
   */
  type: SkillType;
}

/**
 * Enum to represent the type of a skill.
 */
export enum SkillType {
  Soft = "soft",
  Technical = "technical"
}
