import { BaseDatabase } from "../../connection/BaseDatabase"

class PostDatabase extends BaseDatabase {
    private tableName: string = "labook_posts"

    public async insertPost(
        id: string,
        photo: string,
        description: string,
        type: string,
        author_id: string
    ) {
        try {
            await BaseDatabase.connection(this.tableName)
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

    public async selectPost(
        id: string
    ) {
        try {
            const queryResult: any = await BaseDatabase.connection(this.tableName)
                .select("*")
                .where({ id })

            return queryResult[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async selectTypePost(type: string) {
        try {
            const feed = await BaseDatabase.connection.raw(`
                SELECT * FROM labook_posts
                WHERE type = '${type}'
                ORDER BY created_at DESC
            `)

            return feed[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async selectFeed() {
        try {
            const feed = await BaseDatabase.connection.raw(`
                SELECT * FROM labook_posts
                ORDER BY created_at DESC
            `)

            return feed[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
export const postDatabase: PostDatabase = new PostDatabase()