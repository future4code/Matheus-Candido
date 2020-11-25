import { Request, Response } from 'express'
import { searchActorById } from '../data/searchActorById'

export const searchActorFromId = async (req: Request, res: Response):Promise<any> => {
    try {
        const actorByName = await searchActorById(req.params.id)
        res.status(200).send(actorByName)
    } catch (error) {
        console.log(error)
    }
}