import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES,
    addresses: string[]
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role,
        addresses
    }).into('to_do_list_users')
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type addresses = {
    logradouro: string
    numero: number
    complemento: string
    bairro: string
    cidade: string
    estado: string
}