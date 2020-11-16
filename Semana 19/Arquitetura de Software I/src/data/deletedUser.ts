import { connection } from "..";

export default async function deletedtUser(
    id: string
) {
    try {
        const result = await connection('USERS_ARQ_SOFT')
            .delete()
            .where({ id })

        return result

    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}