// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IEducation } from "../../src/client/responses/IEducation";
import { IExperience } from "../../src/client/responses/IExperience";
import { ISkills } from "../../src/client/responses/ISkills";
import { ISummary } from "../../src/client/responses/ISummary";
import { response } from "./examples/Content";

/**
 * The type of Data returned from the handler.
 */
type Data = {
  education: IEducation[];
  experiences: IExperience[];
  skills: ISkills;
  summary: ISummary;
};

/**
 * Responsible for handling the API Route.
 *
 * @param req an instance of http.IncomingMessage, plus some pre-built middlewares.
 * @param res an instance of http.ServerResponse, plus some helper functions.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(response());
}
