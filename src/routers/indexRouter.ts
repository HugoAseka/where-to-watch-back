import authRouter from "./authRouter";
import { Router } from "express";
import trendRouter from "./trendingsRouter";
import movieRoute from "./moviesRouter";
import tvRouter from "./tvRouter";
import searchRouter from "./searchRouter";

const router = Router();

router.use(authRouter, trendRouter, movieRoute, tvRouter, searchRouter);

export default router;
