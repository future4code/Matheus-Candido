import { Request, Response } from "express";
import { putUserById } from "../data/putUserById";

export const putUserFromId = async (req: Request, res: Response) => {
    try {
        const result = await putUserById(req.params.id, req.body.name, req.body.nickname)
        res.status(200).send({message: "Usuário editado com sucesso!"})
    } catch (error) {
        console.log(error)
    }
}