import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";

export const getUserFromId = async (req: Request, res: Response) => {
    try {
        const result = await getUserById(req.params.id)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
    }
}