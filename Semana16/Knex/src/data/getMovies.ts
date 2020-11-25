import { connection } from '..'
import { Movie } from '../types'

export async function getMovies(): Promise<Movie[]> {
    try {
        const result = await connection.raw("SELECT * FROM Filmes")

        console.log(result[0])

        return result[0]
    } catch (error) {
        console.log(error)
        return []
    }
}