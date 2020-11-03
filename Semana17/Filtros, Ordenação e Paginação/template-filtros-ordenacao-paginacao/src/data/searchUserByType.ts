import { connection } from "..";
import { User } from "../types/User";

export default async function searchUserByType(type: string): Promise<any> {
    const result: User[] = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%";
   `)

    return result[0]
}