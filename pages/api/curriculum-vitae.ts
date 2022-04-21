// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { response } from "./examples/curriculum-vitae";

/**
 * Responsible for handling the API Route.
 *
 * @param _req an instance of http.IncomingMessage, plus some pre-built middlewares.
 * @param res an instance of http.ServerResponse, plus some helper functions.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json(response());
}
