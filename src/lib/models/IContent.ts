import { IExperience } from "./IExperience";
import { ISkills } from "./ISkills";
import { ISummary } from "./ISummary";

/**
 * The Content model.
 */
export interface IContent {
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
