import { Request, Response } from "express"
import { loginBusiness } from "../../business/loginBusiness/loginBusiness"

export const login = async (req: Request, res: Response) => {
    try {
        let message = "Success!"

        const input = {
            email: req.body.email,
            password: req.body.password
        }

        const token = await loginBusiness(input)

        res.status(200).send({ message, token })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}