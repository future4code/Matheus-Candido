import { CreateUser, User } from "../../model/User"
import { generateToken } from "../../services/authenticator"
import { compare, hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"
import { CustomError } from "../../services/CustomError"
import userDatabase from "../../data/userDatabase/userDatabase"

class UserBusiness {
    public signup = async (input: CreateUser) => {
        try {
            let message = "Success!"
            input.sort()

            if (!input[0] || !input[1] || !input[2]) {
                message = '"email" and "password" must be provided'
                throw new CustomError(400, message)
            }

            if (input[1].indexOf("@") === -1) {
                throw new CustomError(411, "Invalid email");
            }

            if (input[2].length < 6) {
                throw new CustomError(411, "Password must contain at last six caracters");
            }

            const id: string = generateId()

            const cypherPassword = await hash(input[2])

            await userDatabase.insertUser(
                id,
                input[0],
                input[1],
                cypherPassword
            )

            const token: string = generateToken({ id })

            return token

        } catch (error) {
            if (error.message.includes("for key 'email'")) {
                throw new CustomError(409, "Email already exists!");
            }
            if (error.message.includes("for key 'name'")) {
                throw new CustomError(409, "Name already exists!");
            }
            throw new CustomError(403, error.message);
        }
    }


    public login = async (input: any) => {
        try {
            let message = "Success!"

            if (!input.email || !input.password) {
                message = '"email" and "password" must be provided'
                throw new Error(message)
            }

            const user: User = await userDatabase.login(input.email)

            if (!user) {
                message = "Invalid credentials"
                throw new Error(message)
            }

            const passwordIsCorrect: boolean = await compare(input.password, user.getPassword())

            if (!passwordIsCorrect) {
                message = "Invalid credentials"
                throw new CustomError(401, message)
            }

            const token: string = generateToken({
                id: user.getId()
            })

            return token

        } catch (error) {
            let message = error.sqlMessage || error.message
            if (message === "Cannot read property 'id' of undefined") {
                message = "Email informado não é inválido"
            }

            if (message === "Cannot read property 'id' of undefined") {
                message = "Usuário não encontrado ou senha incorreta"
            }

            if (message === "Field 'name' doesn't have a default value") {
                message = "Insira um nome para seu usuário"
            }
        }
    }
}

export const userBusiness: UserBusiness = new UserBusiness()