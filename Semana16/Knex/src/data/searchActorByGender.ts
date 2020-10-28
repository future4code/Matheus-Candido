import { connection } from '..'

export async function searchActorByGender(gender: string): Promise<any> {
    try {
        const result = await connection.raw(`SELECT * FROM Actor WHERE gender LIKE ${gender}`)
        return result
    } catch (error) {
        console.log(error)
    }
}