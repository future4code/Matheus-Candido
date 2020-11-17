import { connection } from "../../connection/connection";

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    password: string
) {
    try {
        await connection('labook_users')
            .insert({
                id,
                name,
                email,
                password
            })
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}