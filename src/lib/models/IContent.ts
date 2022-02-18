import { ISkills } from "./ISkills";
import { ISummary } from "./ISummary";

/**
 * The Content model.
 */
export interface IContent {
  /**
   * The skills content.
   */
  skills: ISkills;

  /**
   * The summary content.
   */
  summary: ISummary;
}
