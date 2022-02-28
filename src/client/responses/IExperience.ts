import { IDetail } from "./common/IDetail";

/**
 * The response object the API returns.
 */
export interface IExperienceResponse {
  /**
   * The company.
   */
  company: string;

  /**
   * The identifier.
   */
  id: string;

  /**
   * The priority content.
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

  /**
   * The content.
   */
  text: IDetail[];
}
