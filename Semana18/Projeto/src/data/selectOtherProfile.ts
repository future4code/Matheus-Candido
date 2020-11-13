import { connection } from ".."
import { User } from "../types/User"

export default async function selectOtherProfile(
   id: string
): Promise<any> {
   try {
      const result = await connection.raw(`
      SELECT id_user, name, email FROM Cookenu_Users
      WHERE id_user = '${id}';
   `)

      return result[0]

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}