import { connection } from ".."

export const getUserById = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `SELECT * FROM User WHERE id = "${id}"`
        )
        return result[0]
    } catch (error) {
        console.log(error)
    }
}