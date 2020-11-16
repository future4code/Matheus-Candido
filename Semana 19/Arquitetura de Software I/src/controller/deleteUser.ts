import { Request, Response } from "express";
import { deleteUserBusiness } from "../business/deleteUserBusiness";


export default async function deleteUser(
   req: Request,
   res: Response
) {
   try {

      const input = {
         id: req.params.id,
         token: req.headers.authorization
      }
      const token = await deleteUserBusiness(input)

      res.status(200).send({ message: "Usuário apagado com sucesso!" })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}