import { connection } from "..";

export default async function selectProfile(
    role: string
): Promise<any> {
    const result = await connection.raw(`
        SELECT id_user, name, email FROM Cookenu_Users
        WHERE role = '${role}';
    `)

    return result[0][0]
}