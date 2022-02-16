// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { response } from "./examples/Title";

/**
 * The type of Data returned from the handler.
 */
type Data = {
  title: {
    name: string;
  };
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