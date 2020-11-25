import selectUserByEmail from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { User } from "../types/user"

export const loginBusiness = async (input: any): Promise<any> => {
    try {

        let message = "Usuário logado!"

        if (!input.email || !input.password) {
            message = "'email' e 'senha' são obrigatórios"
            throw new Error(message)
        }

        const user: User = await selectUserByEmail(input.email)

        if (!input.email || input.email.indexOf("@") === -1) {
            message = "E-mail inválido"
            throw new Error(message);
        }

        if (!user) {
            message = "Usuário não encontrado."
            throw new Error(message)
        }

        const passwordIsCorrect: boolean = await compare(input.password, user.password)

        if (!passwordIsCorrect) {
            message = "Senha incorreta."
            throw new Error(message)
        }

        // Futura colinha, mostra o token gerado pelo código.
        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token

    } catch (error) {
        let { message } = error
        console.log(message)
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