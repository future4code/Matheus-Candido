import { connection } from ".."
import { User } from "../types/User"
import { USER_ROLES } from "../types/USER_ROLES"

export default async function selectLoginEmail(
   email: string
): Promise<User> {
   try {
      const result = await connection("Cookenu_Users")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         nickname: result[0].nickname,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}