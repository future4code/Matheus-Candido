import { connection } from "../../connection/connection";

class UserDatabase {
    private tableName: string = "labook_users"

    public async insertUser(
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

    public async loginUser(
        email: string
    ): Promise<any> {
        try {
            const queryResult: any = await connection(this.tableName)
                .select("*")
                .where({ email })

            return queryResult[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

export const userDatabase: UserDatabase = new UserDatabase()