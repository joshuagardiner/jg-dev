import { IContentResponse } from "./responses/IContent";

/**
 * IClient.
 */
export interface IClient {
  /**
   * Responsible for getting the content data and mapping into our
   * Content model.
   */
  getContent(): Promise<IContentResponse>;
}
