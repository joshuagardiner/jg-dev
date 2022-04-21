import { IEducation } from "../../lib/models/IEducation";
import { IExperience } from "../../lib/models/IExperience";
import { ISkills } from "../../lib/models/ISkills";
import { ISummary } from "../../lib/models/ISummary";

/**
 * The response object returned from the API.
 */
export interface ICurriculumVitae {
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
