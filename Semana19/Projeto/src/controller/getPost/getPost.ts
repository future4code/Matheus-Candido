import { Request, Response } from "express"
import { getPostBusiness } from '../../business/getPostBusiness/getPostBusiness'

export const getPost = async (req: Request, res: Response) => {
    try {

        const { id } = req.params

        const posts = await getPostBusiness(id)

        res.status(200).send(posts)

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}