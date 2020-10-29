import { Request, Response } from 'express'
import { searchMovieByName } from '../data/searchMoviesByName'
import { Movie } from '../types'

export const getSearchMovies = async (req: Request, res: Response): Promise<any> => {
    // const searchMovie: Movie[] = await getSearchMovie()
    try {
        const movies = await searchMovieByName(req.query.name as string);

        res.status(200).send({
            movies: movies,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
};