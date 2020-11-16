import { Request, Response } from "express";
import selectUserById from "../data/selectAllUsers";
import { getTokenData } from "../services/authenticator";

export default async function getAllUsers(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string;


      const authenticationData = getTokenData(token);
      const user = await selectUserById()

      if (!token) {
         throw new Error("Informe o token de acesso!");
      }

      if (!authenticationData) {
         throw new Error("Token informado está incorreto!");
      }

      res.status(200).send(user)

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}