import { connection } from "../index";
import { USER_ROLES } from "../types/USER_ROLES";

export default async function insertUser(
    id_user: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
) {
    await connection.insert({
        id_user,
        name,
        nickname,
        email,
        password,
        role
    }).into('Cookenu_Users')
}

