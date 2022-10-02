

import { Request, Response } from "express";
import { TypeNewUser } from "../repositories/authRepository";
import * as authService from "../services/authService";



export async function signUp(req: Request, res: Response) {
  const data: TypeNewUser = req.body;

  await authService.createUser(data);

  res.sendStatus(201);
}

// export async function signIn(req: Request, res: Response) {
//   const { email, password } = req.body;

//   const token = await authService.login(email, password);

//   res.status(200).send(token);
// }