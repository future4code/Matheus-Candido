import { connection } from '..'

export async function countActorByGender(gender: string): Promise<any> {
    try {
        const result = await connection.raw(`SELECT count(*) FROM Actor WHERE gender LIKE ${gender}`)
        return result[0]
    } catch (error) {
        console.log(error)
    }
}