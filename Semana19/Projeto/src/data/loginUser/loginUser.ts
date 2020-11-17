import { connection } from "../../connection/connection";

export default async function loginUser(
    email: string
): Promise<any> {
    try {
        const queryResult: any = await connection("labook_users")
            .select("*")
            .where({ email })

        return queryResult[0]
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}