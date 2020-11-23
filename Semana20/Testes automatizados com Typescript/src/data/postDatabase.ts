import { BaseDatabase } from "./BaseDatabase";

class PostDatabase extends BaseDatabase {
    private tableName: string = "labook_posts"

    public async insertPost(
        post: any
    ): Promise<any> {
        try {
            await BaseDatabase.connection(this.tableName)
                .insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.type,
                    author_id: post.author_id
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

}
export const postDatabase: PostDatabase = new PostDatabase()