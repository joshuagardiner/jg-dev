import { IDetail } from "./common/IDetail";

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
  grades?: IDetail[];

  /**
   * The identifier.
   */
  id: string;

  /**
   * The tenure of study.
   */
  tenure: string;
}
