import loginUser from "../../data/loginUser/loginUser"
import { User } from "../../model/User"
import { generateToken } from "../../services/authenticator"
import { compare } from "../../services/hashManager"

export const loginBusiness = async (input: any) => {
    try {
        let message = "Success!"

        if (!input.email || !input.password) {
            message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const user: User = await loginUser(input.email)

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