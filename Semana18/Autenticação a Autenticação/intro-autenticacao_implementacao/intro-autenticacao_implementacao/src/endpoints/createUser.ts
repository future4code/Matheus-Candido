import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname
        ) {
            throw new Error('Preencha os campos "name" e \"nickname\"')
        }

        if (!req.body.email ||
            req.body.email.indexOf("@") === -1
        ) {
            throw new Error("Invalid email");
        }
        if (!req.body.password ||
            req.body.password.length < 6
        ) {
            throw new Error("Invalid password");
        }

        const id: string = generateId()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            req.body.password
        )

        const token: string = generateToken({
            id
        })

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}