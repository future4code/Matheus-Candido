import { connection } from ".."

export const deleteActor = async (id: string): Promise<void | number> => {
    try {
        const result = await connection("Actor")
            .delete()
            .where("id", id);
        return result
    } catch (error) {
        console.log(error)
    }
}; 