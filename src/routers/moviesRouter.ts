import * as moviesController from "../controllers/moviesController";
import { Router } from "express";

const movieRoute = Router();

movieRoute.get("/movie/:id", moviesController.getMovieById);
movieRoute.get("/theaters", moviesController.getMoviesInTheater);

export default movieRoute;
