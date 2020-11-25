import { Request, Response } from "express";
import selectOtherProfile from "../data/selectOtherProfile";
import { getTokenData } from "../services/authenticator";

export default async function getOtherProfile(
    req: Request,
    res: Response
) {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getTokenData(token);

        if (authenticationData.role !== 'ADMIN') {
            throw new Error("Only a normal user can access this funcionality");
        }

        const user = await selectOtherProfile(req.params.id as string)
        if (!user.length) {
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(user)

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage,
            auth: req.headers.auth
        })
    }

}