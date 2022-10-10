import { query, Request, Response } from "express";
import { reqSearch } from "../services/searchService";

export async function getSearchList(req: Request, res: Response) {
  const { query } = req.query;
  console.log(query);
  const searchList = await reqSearch(query);
  res.status(200).send(searchList.data);
  // const { data: movie } = await reqMovieById(id);
  // const { data } = await reqMovieProviders(id);
  // const providers = data.results.BR;
  // res.status(200).send({ movie, providers });
}
