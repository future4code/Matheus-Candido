import insertUser from "../../data/insertUser/insertUser"
import { CreateUser } from "../../model/User"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"

export const signupUserBusiness = async (input: CreateUser) => {
    try {
        let message = "Success!"

        // if (!input.email || !input.password) {
        //     message = '"email" and "password" must be provided'
        //     throw new Error(message)
        // }

        const id: string = generateId()

        const cypherPassword = await hash(input.password)

        await insertUser(
            id,
            input.name,
            input.email,
            cypherPassword
        )

        const token: string = generateToken({ id })

        return token

    } catch (error) {
        if (error.message.includes("for key 'email'")) {
            throw new Error("Este email já existe!");
        }
        if (error.message.includes("for key 'name'")) {
            throw new Error("Este name já existe!");
        }
        if (error.message.includes("for key 'role'")) {
            throw new Error("Este role já existe!");
        }
        throw new Error(error.message);
    }
}