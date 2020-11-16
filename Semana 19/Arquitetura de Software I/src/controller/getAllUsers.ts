import { Request, Response } from "express";
import { selectUserBusiness } from "../business/selectUserBusiness";
import { getTokenData } from "../services/authenticator";

export default async function getAllUsers(
   req: Request,
   res: Response
) {
   try {

      const input = {
         id: req.params.id,
         token: req.headers.authorization
      }

      const user = await selectUserBusiness(input)

      const token = getTokenData(input.token as string)

      res.status(200).send(user)

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}