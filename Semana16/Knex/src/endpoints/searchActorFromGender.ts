import { Request, Response } from 'express'
import { searchActorByGender } from '../data/searchActorByGender'
import { Movie } from '../types'

export const searchActorFromGender = async (req: Request, res: Response):Promise<any> => {
    try {
        const actorByGender = await searchActorByGender(req.query.gender as string)
        res.status(200).send(actorByGender)
    } catch (error) {
        console.log(error)
    }
}