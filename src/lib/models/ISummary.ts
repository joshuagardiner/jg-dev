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
  content: IContent;

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
 * The Content model.
 */
interface IContent {
  /**
   * Paragraph one.
   */
  p1: string;

  /**
   * Paragraph two.
   */
  p2: string;
}
