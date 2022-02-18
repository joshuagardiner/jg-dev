import { IEducation } from "./IEducation";
import { IExperience } from "./IExperience";
import { ISkills } from "./ISkills";
import { ISummary } from "./ISummary";

/**
 * The Content model.
 */
export interface IContent {
  /**
   * The education content.
   */
  education: IEducation[];

  /**
   * The experiences content.
   */
  experiences: IExperience[];

  /**
   * The skills content.
   */
  skills: ISkills;

  /**
   * The summary content.
   */
  summary: ISummary;
}
