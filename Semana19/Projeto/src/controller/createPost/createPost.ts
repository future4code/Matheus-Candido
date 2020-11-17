import { Request, Response } from "express"
import { createPostBusiness } from "../../business/createPostBusiness/createPostBusiness"
import { AuthenticationData } from "../../model/AuthenticationData"
import { CreatePost } from "../../model/Post"
import { getTokenData } from "../../services/authenticator"

export const createPost = async (req: Request, res: Response) => {
    try {
        let message = "Success!"

        const input: CreatePost = {
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
            authorization: req.headers.authorization as string
        }

        const tokenData: AuthenticationData = await getTokenData(input.authorization)

        await createPostBusiness(input, tokenData.id)

        res.status(201).send({ message })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}