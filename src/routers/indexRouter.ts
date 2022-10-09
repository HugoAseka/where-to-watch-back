import authRouter from "./authRouter";
import { Router } from "express";
import trendRouter from "./trendingsRouter";
import movieRoute from "./moviesRouter";

const router = Router();

router.use(authRouter, trendRouter, movieRoute);

export default router;
