import { Request, Response } from "express"
import { feedBusiness } from "../../business/feedBusiness/feedBusiness"

export const feed = async (req: Request, res: Response) => {
    try {
        
        const input = {
            authorization: req.headers.authorization as string
        }

        const posts = await feedBusiness(input.authorization)

        res.status(200).send(posts)

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}