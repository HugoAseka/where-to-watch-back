import authRouter from "./authRouter";
import { Router } from "express";
import trendRouter from "./trendingsRouter";
import movieRoute from "./moviesRouter";
import tvRouter from "./tvRouter";

const router = Router();

router.use(authRouter, trendRouter, movieRoute, tvRouter);

export default router;
