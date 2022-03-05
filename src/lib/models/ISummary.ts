/**
 * The Summary model.
 */
export interface ISummary {
  /**
   * The address.
   */
  address: string;

  /**
   * The content.
   */
  content: ISummaryContent[];

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
}

/**
 * The ISummaryContent model.
 */
export interface ISummaryContent {
  /**
   * The identifier.
   */
  id: string;

  /**
   * The value.
   */
  value: string;
}
