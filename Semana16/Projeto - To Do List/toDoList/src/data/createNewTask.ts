import { connection } from ".."

export const createNewTask = async (
    title: string,
    description: string,
    limit_date: Date,
    id_user: number,
    name_user: string
): Promise<any> => {
    try {
        const result = await connection.raw(
            `
            INSERT INTO Task (title, description, limit_date, id_user, name_user)
            VALUES (
	            "${title}",
                "${description}",
                "${limit_date}",
                ${id_user},
                "${name_user}"
            );
            `
        )
        return result[0]
    } catch (error) {
        console.log(error)
    }
}