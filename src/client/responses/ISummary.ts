import { IDetail } from "./common/IDetail";

/**
 * The response object the API returns.
 */
export interface ISummaryResponse {
  /**
   * The address.
   */
  address: string;

  /**
   * The email.
   */
  email: string;

  /**
   * The name.
   */
  name: string;

  /**
   * The role.
   */
  role: string;

  /**
   * The telephone.
   */
  telephone: string;

  /**
   * The text.
   */
  text: IDetail[];
}
