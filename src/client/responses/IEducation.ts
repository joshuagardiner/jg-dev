/**
 * The response object the API returns.
 */
export interface IEducationResponse {
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
  grades?: IGrade[];

  /**
   * The identifier.
   */
  id: string;

  /**
   * The tenure of study.
   */
  tenure: string;
}

/**
 * The response object the API returns.
 */
interface IGrade {
  /**
   * The identifier.
   */
  id: string;

  /**
   * The value.
   */
  value: string;
}
