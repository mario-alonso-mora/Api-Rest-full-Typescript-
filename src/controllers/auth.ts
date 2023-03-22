

import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.services";



const registerCtrl = async ({ body }: Request, res: Response) => {

  const responseUser = await registerNewUser(body);
  res.send(responseUser);

};

const loginCtrl = async ({ body }: Request, resp: Response) => {

  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    resp.status(403);
    resp.send(responseUser);
  } else {
    resp.send(responseUser);
  }
  
};

export { loginCtrl, registerCtrl };