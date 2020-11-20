import { postDatabase } from "../../data/postDatabase/PostDatabase"
import { CreatePost, Post } from "../../model/Post"
import { getTokenData } from "../../services/authenticator"
import { CustomError } from "../../services/CustomError"
import { generateId } from "../../services/idGenerator"

class PostBusiness {

    public createPost = async (input: CreatePost, tokenData: string) => {
        try {

            const id: string = generateId()

            await postDatabase.insertPost(
                id,
                input.photo,
                input.description,
                input.type,
                tokenData
            )

        } catch (error) {
            let message = error.sqlMessage || error.message
            if (message.includes("for key 'description'")) {
                throw new CustomError(400, "Description already exist!");
            }
            throw new Error(error.message);
        }
    }

    public feed = async (auth: string) => {
        try {
            let message

            if (!auth) {
                message = 'authorization must be provided'
                throw new Error(message)
            }

            await getTokenData(auth)

            const feedResult: any = await postDatabase.selectFeed()

            if (!feedResult) {
                message = "No posts founds"
                throw new Error(message)
            }

            return feedResult

        } catch (error) {
            let message = error.sqlMessage || error.message
            throw new Error(message);
        }
    }

    public getPostById = async (id: any, auth: string) => {
        try {
            let message

            if (!id) {
                message = '\"id\" must be provided'
                throw new Error(message)
            }
            if (!auth) {
                message = 'authorization must be provided'
                throw new Error(message)
            }

            await getTokenData(auth)

            const queryResult: Post = await postDatabase.selectPost(id)

            if (!queryResult) {
                message = "Post not found"
                throw new Error(message)
            }

            return queryResult

        } catch (error) {
            let message = error.sqlMessage || error.message
            throw new Error(message);
        }
    }

    public getTypePost = async (input: string | any) => {
        try {
            let message

            if (!input.authorization) {
                message = 'authorization must be provided'
                throw new Error(message)
            }

            await getTokenData(input.authorization)

            const feedResult: any = await postDatabase.selectTypePost(input.type)

            if (!feedResult) {
                message = "No posts founds"
                throw new Error(message)
            }
            return feedResult

        } catch (error) {
            let message = error.sqlMessage || error.message
            throw new Error(message);
        }
    }
}

export const postBusiness: PostBusiness = new PostBusiness()