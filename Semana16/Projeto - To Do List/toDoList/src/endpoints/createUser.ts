import { Request, Response } from "express";
import { createNewUser } from "../data/createNewUser";

export const createUser = async (req: Request, res: Response) => {
    try {
        await createNewUser(req.body.name, req.body.nickname, req.body.email)
        res.status(200).send({message: "Usuário criado com sucesso!!!"})
    } catch (error) {
        console.log(error)
    }
}