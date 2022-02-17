import { IContentResponse } from "./responses/IContent";
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
      title: {
        name: data.title
      }
    };
  };

  /**
   * Responsible for getting the Content data and mapping into
   * our Content model.
   *
   * @returns the Content data.
   */
  getContent = async (): Promise<IContentResponse> => {
    const url = `/api/Content`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      content: {
        summary: {
          address: data.summary.address,
          content: {
            p1: data.summary.text[0],
            p2: data.summary.text[1]
          },
          email: data.summary.email,
          name: data.summary.name,
          role: data.summary.role,
          telephone: data.summary.telephone
        }
      }
    };
  };
}
