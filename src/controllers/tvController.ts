import { Request, Response } from "express";
import { reqShowById, reqShowProviders } from "../services/tvService";

export async function getShowById(req: Request, res: Response) {
  const { id } = req.params;
  const { data: show } = await reqShowById(id);
  const { data } = await reqShowProviders(id);
  const providers = data.results.BR;
  res.status(200).send({ show, providers });
}
