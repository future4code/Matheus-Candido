import { Request, Response } from 'express'
import { searchMovieByName } from '../data/SearchMoviesByName'
import { Movie } from '../types'

export const getSearchMovies = async (req: Request, res: Response) => {
    // const searchMovie: Movie[] = await getSearchMovie()
    try {
        const movies: Movie[] = await searchMovieByName(req.query.query as string);

        res.status(200).send({
            movies: movies,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
};