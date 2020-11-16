import { connection } from "..";

export default async function deletedtUser(
    id: string
) {
    const result = await connection('USERS_ARQ_SOFT')
        .delete()
        .where({ id })

    return result
}