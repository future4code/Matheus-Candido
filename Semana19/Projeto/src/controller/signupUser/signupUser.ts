import { Request, Response } from "express"
import { signupUserBusiness } from "../../business/signupUserBusiness/signupUserBusiness"
import { CreateUser } from "../../model/User"

export const signupUser = async (req: Request, res: Response) => {
    try {
        let message = "Success!"

        const input: CreateUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const token = await signupUserBusiness(input)

        res.status(201).send({ message, token })

    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message

        res.send({ message })
    }
}