import insertPost from "../../data/insertPost/insertPost"
import { CreatePost } from "../../model/Post"
import { generateId } from "../../services/idGenerator"

export const createPostBusiness = async (input: CreatePost, tokenData: string) => {
    try {

        const id: string = generateId()

        await insertPost(
            id,
            input.photo,
            input.description,
            input.type,
            tokenData
        )

    } catch (error) {
        let message = error.sqlMessage || error.message
        if (message.includes("for key 'description'")) {
            throw new Error("Description already exist!");
        }
        throw new Error(error.message);
    }
}