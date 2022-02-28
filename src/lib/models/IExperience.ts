/**
 * The Experience model.
 */
export interface IExperience {
  /**
   * The company.
   */
  company: string;

  /**
   * The content.
   */
  content: IExperienceContent[];

  /**
   * The identifier.
   */
  id: string;

  /**
   * The content's priority.
   */
  priority: boolean;

  /**
   * The role.
   */
  role: string;

  /**
   * The tenure.
   */
  tenure: string;
}

/**
 * The ExperienceContent model.
 */
export interface IExperienceContent {
  /**
   * The identifier.
   */
  id: string;

  /**
   * The value.
   */
  value: string;
}
