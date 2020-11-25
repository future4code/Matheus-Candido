import { connection } from "..";

export default async function deletedtUserById(
    id: string
) {
    const result = await connection('to_do_list_users')
        .delete()
        .from('to_do_list_user')
        .where({ id })

    return result
}