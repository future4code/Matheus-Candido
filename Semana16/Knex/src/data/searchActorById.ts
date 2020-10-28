import { connection } from '..'

export async function searchActorById(id: string): Promise<any> {
    try {
        const result = await connection.raw(`SELECT * FROM Actor WHERE id = ${id}`)
        return result
    } catch (error) {
        console.log(error)
    }
}