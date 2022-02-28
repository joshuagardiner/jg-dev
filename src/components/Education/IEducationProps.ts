import { IGrade } from "../../lib/models/IEducation";

/**
 * The properties available to the Education component.
 */
export interface IEducationProps {
  /**
   * The course studied.
   */
  course: string;

  /**
   * The location of study.
   */
  faculty: string;

  /**
   * The grades achieved.
   */
  grades: IGrade[];

  /**
   * The timeframe of study.
   */
  tenure: string;
}
