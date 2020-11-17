import { connection } from "../../connection/connection";

export default async function insertPost(
    id: string,
    photo: string,
    description: string,
    type: string,
    author_id: string
) {
    try {
        await connection("labook_posts")
            .insert({
                id,
                photo,
                description,
                type,
                author_id
            })
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}