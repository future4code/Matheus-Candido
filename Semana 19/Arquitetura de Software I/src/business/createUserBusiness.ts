import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const createUserBusiness = async (input: any): Promise<any> => {
    try {

        if (
            !input.name ||
            !input.role
        ) {
            throw new Error('Preencha os campos \"name\" e \"role\"')
        }

        if (!input.email ||
            input.email.indexOf("@") === -1
        ) {
            throw new Error("Invalid email");
        }

        if (!input.password ||
            input.password.length < 6
        ) {
            throw new Error("Invalid password");
        }

        const id: string = generateId()

        const cypherPassword = await hash(input.password)

        await insertUser(
            id,
            input.name,
            input.email,
            cypherPassword,
            input.role
        )

        const token: string = generateToken({
            id,
            role: input.role
        })

        return token

    } catch (error) {
        if (error.code === 1048) {
            throw new Error("Este usuário já existe!");
        }
    }
    return ""
}