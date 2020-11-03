import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"
import { Profission } from "../types/profission"
import { User } from "../types/User"

export default async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const users: User[] = await selectAllUsers()

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}