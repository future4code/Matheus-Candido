import { Request, Response } from 'express'
import { searchActorByName } from '../data/searchActorByName'
import { Movie } from '../types'

export const searchActorFromName = async (req: Request, res: Response):Promise<any> => {
    try {
        const actorByName = await searchActorByName(req.query.name as string)
        res.status(200).send(actorByName)
    } catch (error) {
        console.log(error)
    }
}