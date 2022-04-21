import { ICurriculumVitae } from "./responses/ICurriculumVitae";

/**
 * IClient.
 */
export interface IClient {
  /**
   * Responsible for getting the curriculum viate data and mapping
   * into our model.
   */
  getContent(): Promise<ICurriculumVitae>;
}
