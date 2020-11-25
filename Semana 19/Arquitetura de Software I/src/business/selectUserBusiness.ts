import selectAllUsers from "../data/selectAllUsers";
import { getTokenData } from "../services/authenticator";

export const selectUserBusiness = async (input: any): Promise<any> => {
    try {

        const authenticationData = getTokenData(input.token);

        const selectUsers = selectAllUsers()

        if (!input.token) {
            throw new Error("Informe o token de acesso!");
        }

        if (!authenticationData) {
            throw new Error("Token informado está incorreto!");
        }
        return selectUsers
    } catch (error) {

    }
}