import { connection } from "../../connection/connection";

export default async function insertFriend(id_user: string, id_friend: string) {
    try {
        await connection('Friends_list')
            .insert({ id_user, id_friend })
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}