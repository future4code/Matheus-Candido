import { connection } from '..'

export async function searchMovieByName(name: string): Promise<any> {
    try {
        const result = await connection.raw(`SELECT * FROM Actor name ='${name}'`)
        return result
    } catch (error) {
        console.log(error)
    }
}