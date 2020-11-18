import { connection } from "../../connection/connection";

export default async function selectTypePost(type: string) {
    try {
        const feed = await connection.raw(`
            SELECT * FROM labook_posts
            WHERE type = '${type}'
            ORDER BY created_at DESC
        `)

        return feed[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}