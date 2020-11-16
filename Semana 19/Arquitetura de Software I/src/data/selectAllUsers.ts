import { connection } from "../connection/connection"

export default async function selectAllUsers() {
    try {
        const result = await connection.raw(`
        SELECT * FROM USERS_ARQ_SOFT
    `)
        return result[0]

    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}