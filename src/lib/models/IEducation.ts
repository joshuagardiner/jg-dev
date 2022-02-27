/**
 * The Education model.
 */
export interface IEducation {
  /**
   * The course studied.
   */
  course: string;

  /**
   * The faculty studied at.
   */
  faculty: string;

  /**
   * The grades achieved.
   */
  grades: IGrade[];

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
 * The Grade model.
 */
export interface IGrade {
  /**
   * The identifier.
   */
  id: string;

  /**
   * The value.
   */
  value: string;
}
