import insertUser from "../../data/insertUser/insertUser"
import { CreateUser } from "../../model/User"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"

export const signupUserBusiness = async (input: CreateUser) => {
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
            throw new Error("Email already exists!");
        }
        if (error.message.includes("for key 'name'")) {
            throw new Error("Name already exists!");
        }
        throw new Error(error.message);
    }
}