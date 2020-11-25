import { Request, Response } from "express"
import searchUserByType from "../data/searchUserByType"

export default async function searchUserFromType(
    req: Request,
    res: Response
): Promise<void> {
    console.log(req.params.type)
    try {
        if (!req.params.type) {
            throw new Error("Verifique o parametro passado!");
        }
        const data = {
            type: (req.params.type as string).toLowerCase()
        }

        if (!data.type) {
            throw new Error('Você deve inserir um valor para \'name\'')
        }
        
        const result = await searchUserByType(data.type)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}