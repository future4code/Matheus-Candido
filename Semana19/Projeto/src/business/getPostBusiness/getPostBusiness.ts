import selectPost from "../../data/selectPost/selectPost"

export const getPostBusiness = async (id: any) => {
    try {
        let message = "Success!"

        if (!id) {
            message = '\"id\" must be provided'
            throw new Error(message)
        }

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