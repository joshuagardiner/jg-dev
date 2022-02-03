import { ITitleResponse } from "./responses/ITitle";

/**
 * Responsible for getting the Title data and mapping into
 * our Title model.
 *
 * @returns the Title data.
 */
export const getTitle = async (): Promise<ITitleResponse> => {
  const url = `/api/Title`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    title: data.title.name
  };
};
