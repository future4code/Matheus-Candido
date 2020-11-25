import { connection } from ".."

export const putUserById = async (id: string, name: string, nickname: string): Promise<any> => {
    try {
        const result = await connection.raw(
            `UPDATE User
                Set 
                name = "${name}",
                nickname = "${nickname}"
                WHERE id = "${id}"
            `
        )
        return result
    } catch (error) {
        console.log(error)
    }
}