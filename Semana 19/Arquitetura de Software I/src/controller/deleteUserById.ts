import { Request, Response } from "express";
import deletedtUserById from "../data/deletedUserById";
import { getTokenData } from "../services/authenticator";

export default async function deleteUserById(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string;

      const authenticationData = getTokenData(token);
      const user = await deletedtUserById(req.params.id)

      if (authenticationData.role !== 'ADMIN') {
         throw new Error("Acesso não autorizado a usuários não ADMIN!");
      }

      if (!authenticationData) {
         throw new Error("Token informado está incorreto!");
      }

      if (!user) {
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({ message: "Usuário apagado com sucesso!" })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}