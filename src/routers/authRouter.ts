import { Router } from "express";
import { signUp } from "../controllers/authController";
import validateObjectMiddleware from "../middlewares/validateObj";
import { registerSchema } from "../schemas/signUpSchema";

const authRouter = Router();

authRouter.post("/signup", validateObjectMiddleware(registerSchema), signUp);

export default authRouter;
