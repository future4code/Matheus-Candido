import { BaseDatabase } from "../../connection/BaseDatabase";
import { CustomError } from "../../services/CustomError";

class FriendsDatabase extends BaseDatabase {
    private tableName: string = "Friends_list"

    public async insertFriend(id_user: string, id_friend: string) {
        try {
            const search = await BaseDatabase.connection.raw(`
                SELECT * FROM ${this.tableName}
                WHERE (id_user = '${id_user}' AND id_friend = '${id_friend}')
                OR (id_friend = '${id_friend}' AND id_user = '${id_user}')
            `)

            if (search[0].length <= 0) {
                await BaseDatabase.connection(this.tableName)
                    .insert({ id_user, id_friend })
            } else {
                throw new CustomError(404, "You are already friends!");
            }
        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message);
        }
    }

    public async deleteFriend(id_user: string, id_friend: string) {
        try {

            const search = await BaseDatabase.connection.raw(`
                SELECT * FROM ${this.tableName}
                WHERE (id_user = '${id_user}' AND id_friend = '${id_friend}')
                OR (id_friend = '${id_friend}' AND id_user = '${id_user}')
            `)

            if (search[0].length > 0) {
                await BaseDatabase.connection(this.tableName)
                    .delete(`${id_user} OR ${id_friend}`)
            } else {
                throw new CustomError(404, "Você não tem ele como amigo!");
            }
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

export const friendsDatabase: FriendsDatabase = new FriendsDatabase()