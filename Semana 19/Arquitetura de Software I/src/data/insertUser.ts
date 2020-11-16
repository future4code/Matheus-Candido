import { connection } from "../index";
import { USER_ROLES } from "../types/roles";

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
) {
    await connection.insert({
        id,
        name,
        email,
        password,
        role
    }).into('USERS_ARQ_SOFT')
}