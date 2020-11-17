import { connection } from "../../connection/connection";

export default async function selectPost(
    id: string
) {
    try {
        const queryResult: any = await connection("labook_posts")
            .select("*")
            .where({ id })
            
        return queryResult[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
} 