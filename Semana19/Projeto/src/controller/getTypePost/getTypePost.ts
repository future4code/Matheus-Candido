import { Request, Response } from "express"
import { getTypePostBusiness } from "../../business/getTypePostBusiness/getTypePostBusiness"

export const getTypePost = async (req: Request, res: Response) => {
    try {

        const input = {
            type: req.query.type,
            authorization: req.headers.authorization as string
        }

        const feed = await getTypePostBusiness(input)

        res.status(200).send(feed)

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}