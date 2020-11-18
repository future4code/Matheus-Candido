import selectFeed from "../../data/selectFeed/selectFeed"
import { getTokenData } from "../../services/authenticator"

export const feedBusiness = async (auth: string) => {
    try {
        let message

        if (!auth) {
            message = 'authorization must be provided'
            throw new Error(message)
        }

        await getTokenData(auth)

        const feedResult: any = await selectFeed()

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