import { Request, Response } from "express"
import searchUserByName from "../data/searchUserByName"
import selectAllUsers from "../data/selectAllUsers"
import { Profission } from "../types/profission"
import { User, inputData } from "../types/User"

export default async function searchUserFromName(
    req: Request,
    res: Response
): Promise<void> {
    console.log(req.query)
    try {
        if (!req.query.name) {
            throw new Error("Verifique o parametro passado!");
        }
        const data: inputData = {
            name: (req.query.name as string).toLowerCase(),
            type: (req.query.type as string).toLowerCase() || '',
        }

        if (!data.name) {
            throw new Error('Você deve inserir um valor para \'name\'')
        }
        const result = await searchUserByName(data.name)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}