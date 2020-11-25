import { connection } from ".."

export const getTaskById = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `SELECT * FROM Task WHERE task_id = "${id}"`
        )
        return result[0]
    } catch (error) {
        console.log(error)
    }
}