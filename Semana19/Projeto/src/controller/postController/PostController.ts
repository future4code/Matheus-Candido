import { Request, Response } from "express"
import { postBusiness } from "../../business/postBusiness/PostBusiness"
import { AuthenticationData } from "../../model/AuthenticationData"
import { CreatePost } from "../../model/Post"
import { getTokenData } from "../../services/authenticator"

class PostController {
    public createPost = async (req: Request, res: Response) => {
        try {
            let message = "Success!"

            const input: CreatePost = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                authorization: req.headers.authorization as string
            }

            const tokenData: AuthenticationData = await getTokenData(input.authorization)

            await postBusiness.createPost(input, tokenData.id)

            res.status(201).send({ message })

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }

    public feed = async (req: Request, res: Response) => {
        try {

            const input = {
                authorization: req.headers.authorization as string
            }

            const posts = await postBusiness.feed(input.authorization)

            res.status(200).send(posts)

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }

    public getTypePost = async (req: Request, res: Response) => {
        try {

            const input = {
                type: req.query.type,
                authorization: req.headers.authorization as string
            }

            const feed = await postBusiness.getTypePost(input)

            res.status(200).send(feed)

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }

    public getPost = async (req: Request, res: Response) => {
        try {
            const input = {
                authorization: req.headers.authorization as string
            }

            const { id } = req.params

            const posts = await postBusiness.getPostById(id, input.authorization)

            res.status(200).send(posts)

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }
}

export const postController: PostController = new PostController()