import { Request, Response } from "express"
import { loginBusiness } from "../../business/loginBusiness/loginBusiness"

export const login = async (req: Request, res: Response) => {
    try {
        let message = "Success!"

        const input = {
            email: req.body.email,
            password: req.body.password
        }

        if (!input.email || !input.password) {
            res.statusCode = 406
            message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const token = await loginBusiness(input)

        res.status(200).send({ message, token })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}