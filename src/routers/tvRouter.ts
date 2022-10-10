import * as tvController from "../controllers/tvController";
import { Router } from "express";

const tvRouter = Router();

tvRouter.get("/tv/:id", tvController.getShowById);

export default tvRouter;
