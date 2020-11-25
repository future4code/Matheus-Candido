import { connection } from '..'

export async function updateSalaryActor(id: string, salary: number): Promise<any> {
    try {
        const result = await connection.raw(`UPDATE Actor SET salary = ${salary} WHERE id= ${id}`)
        return result
    } catch (error) {
        console.log(error)
    }
}