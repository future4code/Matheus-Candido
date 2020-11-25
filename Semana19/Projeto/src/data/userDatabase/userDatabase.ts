import { BaseDatabase } from "../../connection/BaseDatabase";
import { User } from "../../model/User";

class UserDatabase extends BaseDatabase {

    private tableName: string = "labook_users"

    public async insertUser(
        id: string,
        name: string,
        email: string,
        password: string
    ) {
        try {
            await BaseDatabase.connection(this.tableName)
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

    public async login(
        email: string
    ): Promise<User> {
        try {
            const queryResult: any = await BaseDatabase.connection(this.tableName)
                .select("*")
                .where({ email })

            return new User(
                queryResult[0].id,
                queryResult[0].name,
                queryResult[0].email,
                queryResult[0].password
            )
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

export default new UserDatabase()