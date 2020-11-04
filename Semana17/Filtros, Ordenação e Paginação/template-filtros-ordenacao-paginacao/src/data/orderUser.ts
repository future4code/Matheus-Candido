import { connection } from ".."
import { inputData } from "../types/User"

export const orderUser = async (filter: inputData): Promise<void> => {
    const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE name LIKE "%${filter.name}%" OR type LIKE "%${filter.type}%"
    ORDER BY "${filter.orderByName}" "${filter.orderByType}"
    `)
    return result[0]
}