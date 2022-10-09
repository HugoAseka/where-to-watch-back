import {
  getTrendingShows,
  getTrendingsMovies,
} from "../controllers/trendingsController";
import { Router } from "express";

const trendRouter = Router();

trendRouter.get("/trendingShows", getTrendingShows);
trendRouter.get("/trendingMovies", getTrendingsMovies);

export default trendRouter;
