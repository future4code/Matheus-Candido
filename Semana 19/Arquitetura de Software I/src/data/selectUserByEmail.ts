import { connection } from ".."
import { User } from "../types/user"

export default async function selectUserByEmail(
   email: string
): Promise<User> {
   try {
      const result = await connection("USERS_ARQ_SOFT")
         .select("*")
         .where({ email })

      return result[0]

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}