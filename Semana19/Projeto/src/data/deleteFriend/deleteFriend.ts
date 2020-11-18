import { connection } from "../../connection/connection";

export default async function deleteFriend(id_friend: string) {
    try {
        await connection('Friends_list')
            .delete(id_friend)
        //Possível erro de sintaxe ali em cima. Tente um >>> .delete({id_friend})
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}