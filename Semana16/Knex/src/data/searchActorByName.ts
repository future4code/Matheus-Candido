import { connection } from '..'

export async function searchActorByName(name: string): Promise<any> {
    try {
        const result = await connection.raw(`SELECT * FROM Actor WHERE name LIKE "%${name}%"`)
        return result
    } catch (error) {
        console.log(error)
    }
}