import { reqMovieById, reqMoviesInTheater } from "../services/moviesService";
import { Request, Response } from "express";

export async function getMovieById(req: Request, res: Response) {
  const { id } = req.params;
  const { data: movie } = await reqMovieById(id);
  res.status(200).send(movie);
}

export async function getMoviesInTheater(req: Request, res: Response) {
  const movies = await reqMoviesInTheater();
  console.log(movies);
  res.status(200).send(movies.data);
}
