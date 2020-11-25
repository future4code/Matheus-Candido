import { Request, Response } from "express";
import selectProfile from "../data/selectProfile";
import { getTokenData } from "../services/authenticator";

export default async function getProfile(
    req: Request,
    res: Response
) {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getTokenData(token);

        if (authenticationData.role === 'NORMAL') {
            throw new Error("Acesso não autorizado");
        }

        const result = await selectProfile(authenticationData.role)

        if (!result) {
            console.log(result.role)
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}