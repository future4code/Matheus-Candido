import selectPost from "../../data/selectPost/selectPost"
import { getTokenData } from "../../services/authenticator"

export const getPostBusiness = async (id: any, auth: string) => {
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

        const queryResult: any = await selectPost(id)

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