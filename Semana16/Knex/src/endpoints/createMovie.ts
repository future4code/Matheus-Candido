import { Request, Response } from 'express'
import { createNewMovie } from '../data/createNewMovie';

export const createMovie = async (req: Request, res: Response): Promise<void> => {
    try {

        // const { id, name, sinopse, release_date, evaluation, playing_limit_date } = req.body;

        // if (!(type in POKE_TYPES)) {
        //     res.statusCode = 406
        //     throw new Error("Invalid Pokemon types")
        // }

        await createNewMovie(req.body.id, req.body.name, req.body.sinopse, new Date(req.body.releaseDate), req.body.evaluation, req.body.playingLimitDate)

        res.status(200).send("New movie created!");
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}