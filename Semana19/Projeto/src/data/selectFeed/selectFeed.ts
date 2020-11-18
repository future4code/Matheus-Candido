import { connection } from "../../connection/connection";

export default async function selectFeed() {
    try {
        const feed = await connection.raw(`
            SELECT * FROM labook_posts
            ORDER BY created_at DESC
        `)
        
        return feed[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}