/**
 * The response object the API returns.
 */
export interface IEducation {
  /**
   * The course studied.
   */
  course?: string;

  /**
   * The faculty studied at.
   */
  faculty: string;

  /**
   * The grades achieved.
   */
  grades?: string[];

  /**
   * The tenure of study.
   */
  tenure: string;
}
