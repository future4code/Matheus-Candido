import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import selectProfile from "../data/selectProfile";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";

export default async function createRecipe(
   req: Request,
   res: Response
) {
   try {
      const token = req.headers.authorization as string;

      const authenticationData = getTokenData(token);

      const result = await selectProfile(authenticationData.role)

      const date = new Date()

      const id: string = generateId()

      if (
         !req.body.name ||
         !req.body.igredients ||
         !req.body.instructions
      ) {
         throw new Error('"name", "igredients", "instructions" são obrigatórios')
      }

      await insertRecipe(
         id,
         req.body.name,
         req.body.igredients,
         req.body.instructions,
         result.id_user,
         date
      )

      res.status(400).send({
         message: "Receita criada com sucesso!",
         id
      })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.status(400).send({ message })
   }
}