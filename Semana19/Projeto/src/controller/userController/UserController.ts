import { Request, Response } from "express"
import { userBusiness } from "../../business/userBusiness/UserBusiness"
import { CreateUser } from "../../model/User"

class UserController {

    login = async (req: Request, res: Response) => {
        try {
            let message = "Success!"

            const input = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBusiness.login(input)

            res.status(200).send({ message, token })

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }

    public signup = async (req: Request, res: Response) => {
        try {
            let message = "Success!"

            const input: CreateUser = [
                req.body.name,
                req.body.email,
                req.body.password
            ]

            const token = await userBusiness.signup(input)

            res.status(201).send({ message, token })

        } catch (error) {
            res.status(error.statusCode)
            let message = error.sqlMessage || error.message

            res.send({ message })
        }
    }
}

export const userController: UserController = new UserController()