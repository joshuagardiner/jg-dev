import { ITitleResponse } from "./responses/ITitle";

/**
 * The API Client.
 */
export class Client {
  /**
   * Responsible for getting the Title data and mapping into
   * our Title model.
   *
   * @returns the Title data.
   */
  getTitle = async (): Promise<ITitleResponse> => {
    const url = `/api/Title`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      title: data.title
    };
  };
}
