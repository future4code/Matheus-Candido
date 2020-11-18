import selectTypePost from "../../data/selectTypePost/selectTypePost"
import { getTokenData } from "../../services/authenticator"

export const getTypePostBusiness = async (input: string | any) => {
    try {
        let message

        if (!input.authorization) {
            message = 'authorization must be provided'
            throw new Error(message)
        }

        await getTokenData(input.authorization)

        const feedResult: any = await selectTypePost(input.type)

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