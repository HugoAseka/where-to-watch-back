import Joi from "joi";

export type NewUserRequest = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const registerSchema = Joi.object<NewUserRequest>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  passwordConfirmation: Joi.string().required().valid(Joi.ref("password")),
});
