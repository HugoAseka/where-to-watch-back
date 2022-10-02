import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import validateObjectMiddleware from "../middlewares/validateObj";
import signInSchema from "../schemas/signInSchema";
import { registerSchema } from "../schemas/signUpSchema";

const authRouter = Router();

authRouter.post("/signup", validateObjectMiddleware(registerSchema), signUp);
authRouter.post("/signin", validateObjectMiddleware(signInSchema), signIn);

export default authRouter;
