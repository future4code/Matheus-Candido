import { connection } from ".."

export const createNewUser = async (name: string, nickname: string, email: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `INSERT INTO User (name,nickname,email)
            VALUES(
                "${name}",
                "${nickname}",
                "${email}"
            )
            `
        )
        return result
    } catch (error) {
        console.log(error)
    }
}