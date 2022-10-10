import * as searchController from "../controllers/searchController";
import { Router } from "express";

const searchRouter = Router();

searchRouter.get("/search", searchController.getSearchList);


export default searchRouter;