import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getData } from "../services/authenticator";

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string;


      const authenticationData = getData(token);
      const user = await selectUserById(authenticationData.id)

      if (!user) {
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({
         id: user.id,
         email: user.email
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}