import * as moviesController from "../controllers/moviesController";
import { Router } from "express";

const movieRoute = Router();

movieRoute.get("/movie/:id", moviesController.getMovieById);


export default movieRoute;