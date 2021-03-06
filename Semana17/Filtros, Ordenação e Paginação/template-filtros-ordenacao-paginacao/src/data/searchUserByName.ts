import { connection } from "..";
import { User } from "../types/User";

export default async function searchUserByName(name: string): Promise<any> {
    const result: User[] = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%";
   `)

    return result[0]
}