import { Request, Response } from "express";
import selectRecipe from "../data/selectRecipe";

export default async function getRecipe(
   req: Request,
   res: Response
) {
   try {
      const result = await selectRecipe(req.params.id)

      if (!result) {
         throw new Error("Receita não encontrada!")
      }

      res.status(200).send({ result })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}