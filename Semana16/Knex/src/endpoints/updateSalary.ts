import { Request, Response } from "express";
import { updateSalaryActor } from '../data/updateSalaryActor'

export const updateSalary = async (req: Request, res: Response) => {
    try {
        await updateSalaryActor(req.body.id, req.body.salary);
        res.status(200).send({
            message: "Success",
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
};