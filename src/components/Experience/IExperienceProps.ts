import { IExperienceContent } from "../../lib/models/IExperience";

/**
 * The properties available for the Experience component.
 */
export interface IExperienceProps {
  /**
   * The company of employment.
   */
  company: string;

  /**
   * The experiences gained.
   */
  content: IExperienceContent[];

  /**
   * The role of employment.
   */
  role: string;

  /**
   * The timeframe of employment.
   */
  tenure: string;
}
