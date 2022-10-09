import {
  requestTrendingMovies,
  requestTrendingShows,
} from "../services/trendingsService";
import { Request, Response } from "express";

export async function getTrendingShows(req: Request, res: Response) {
  const trendings = await requestTrendingShows();
  res.status(200).send(trendings);
}

export async function getTrendingsMovies(req: Request, res: Response) {
  const trendings = await requestTrendingMovies();
  res.status(200).send(trendings);
}
