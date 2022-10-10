import {
  reqMovieById,
  reqMovieProviders,
  reqMoviesInTheater,
} from "../services/moviesService";
import { Request, Response } from "express";

export async function getMovieById(req: Request, res: Response) {
  const { id } = req.params;
  const { data: movie } = await reqMovieById(id);
  const { data } = await reqMovieProviders(id);
  const providers = data.results.BR;
  res.status(200).send({ movie, providers });
}

export async function getMoviesInTheater(req: Request, res: Response) {
  const movies = await reqMoviesInTheater();
  res.status(200).send(movies.data);
}
