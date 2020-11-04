import { Request, Response } from 'express'
import { orderUser } from '../data/orderUser';
import { inputData } from '../types/User';

export const orderUsers = async (req: Request, res: Response) => {
    console.log(req.query.name)
    try {
        const filter: inputData = {
            name: req.query.name as string,
            type: req.query.type as string,
            orderByName: req.query.orderByName as string || 'ASC',
            orderByType: req.query.orderByType as string || 'DESC',
        }
        if (!filter.name || filter.type) {
            throw new Error("Você deve inserir um valor para \'name\' ou \'type\'");
        }
        const result = await orderUser(filter)
        res.status(200).send(result)
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}