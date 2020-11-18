import { connection } from "../../connection/connection";

class FriendsDatabase {
    private tableName: string = "Friends_list"

    public async insertFriend(id_user: string, id_friend: string) {
        try {
            await connection(this.tableName)
                .insert({ id_user, id_friend })
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async deleteFriend(id_friend: string) {
        try {
            await connection(this.tableName)
                .delete(id_friend)
            //Possível erro de sintaxe ali em cima. Tente um >>> .delete({id_friend})
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

export const friendsDatabase: FriendsDatabase = new FriendsDatabase()