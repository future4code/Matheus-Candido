import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";

export default async function createRecipe(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string;


      const authenticationData = getTokenData(token);

      if (
         !req.body.name ||
         !req.body.igredients ||
         !req.body.instructions
      ) {
         throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
      }

      const date = new Date()

      const id: string = generateId()

      await insertRecipe(
         id,
         req.body.name,
         req.body.igredients,
         req.body.instructions,
         authenticationData.id,
         date
      )

      res.status(400).send({
         message: "Tarefa criada com sucesso!",
         id
      })

   } catch (error) {
      let message = error.sqlMessage || error.message

      if (message.includes("date")) {
         message = "'deadline' deve ser uma data válida, no formato aaaa-mm-dd"
      }

      res.status(400).send({ message })
   }
}