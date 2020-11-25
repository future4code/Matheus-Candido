import { connection } from '..'
import { Movie } from '../types'

export async function searchMovieByName(name: string): Promise<any> {
    try {
        const result = await connection.raw(`SELECT * FROM Filmes WHERE name LIKE "%${name}%"`)

        console.log(result)

        return result[0]
    } catch (error) {
        console.log(error)
    }
}