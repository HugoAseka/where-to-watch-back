import { query, Request, Response } from "express";
import { reqSearch } from "../services/searchService";

export async function getSearchList(req: Request, res: Response) {
  const { query } = req.query;
  const searchList = await reqSearch(query);
  res.status(200).send(searchList.data);
}
