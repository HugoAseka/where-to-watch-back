import { reqMovieById } from "../services/moviesService";
import { Request, Response } from "express";

export async function getMovieById(req: Request, res: Response) {
  const { id } = req.params;

  const { data: movie } = await reqMovieById(parseInt(id));
  console.log(movie);
  res.status(200).send(movie);
}
