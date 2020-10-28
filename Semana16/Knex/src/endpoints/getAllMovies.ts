import { Request, Response } from 'express'
import { getMovies } from '../data/getMovies'
import { Movie } from '../types'

export const getAllMovies = async (req: Request, res: Response) => {
    try {

        const movies: Movie[] = await getMovies()

        if (!movies.length) {
            res.statusCode = 404
            throw new Error("No movies found")
        }

        res.status(200).send(movies)

    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}