import { connection } from "..";

export default async function selectAllUsers() {
    const result = await connection.raw(`
        SELECT * FROM USERS_ARQ_SOFT
    `)
    return result[0]
}