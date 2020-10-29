import { connection } from '..'

export async function avgSalaryActorByGender(gender: string): Promise<any> {
    try {
        const result = await connection.raw(`SELECT AVG(salary) FROM Actor WHERE gender LIKE ${gender}`)
        return result[0].average
    } catch (error) {
        console.log(error)
    }
}