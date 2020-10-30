import { Request, Response } from "express";
import { getTaskById } from "../data/getTaskFromId";

export const getTaskFromId = async (req: Request, res: Response) => {
    try {
        const result = await getTaskById(req.params.id)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
    }
}