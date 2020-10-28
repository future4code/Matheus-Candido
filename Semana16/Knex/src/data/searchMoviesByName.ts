import { connection } from '..'
import { Movie } from '../types'

export async function searchMovieByName(name: string): Promise<Movie[]> {
    try {
        const result = await connection.raw(`SELECT * FROM Filmes WHERE name LIKE %${name}%`)

        console.log(result)

        return result
    } catch (error) {
        console.log(error)
        return []
    }
}