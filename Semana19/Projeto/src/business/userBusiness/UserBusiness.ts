import { CreateUser, User } from "../../model/User"
import { generateToken } from "../../services/authenticator"
import { compare, hash } from "../../services/hashManager"
import { userDatabase } from "../../data/userDatabase/userDatabase"
import { generateId } from "../../services/idGenerator"

class UserBusiness {
    public signup = async (input: CreateUser) => {
        try {
            let message = "Success!"

            if (!input.name || !input.email || !input.password) {
                message = '"email" and "password" must be provided'
                throw new Error(message)
            }

            if (input.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }

            if (input.password.length < 6) {
                throw new Error("Password must contain at last six caracters");
            }

            const id: string = generateId()

            const cypherPassword = await hash(input.password)

            await userDatabase.insertUser(
                id,
                input.name,
                input.email,
                cypherPassword
            )

            const token: string = generateToken({ id })

            return token

        } catch (error) {
            if (error.message.includes("for key 'email'")) {
                throw new Error("Email already exists!");
            }
            if (error.message.includes("for key 'name'")) {
                throw new Error("Name already exists!");
            }
            throw new Error(error.message);
        }
    }


    public login = async (input: any) => {
        try {
            let message = "Success!"

            if (!input.email || !input.password) {
                message = '"email" and "password" must be provided'
                throw new Error(message)
            }

            const user: User = await userDatabase.loginUser(input.email)

            if (!user) {
                message = "Invalid credentials"
                throw new Error(message)
            }

            const passwordIsCorrect: boolean = await compare(input.password, user.password)

            if (!passwordIsCorrect) {
                message = "Invalid credentials"
                throw new Error(message)
            }

            const token: string = generateToken({
                id: user.id
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