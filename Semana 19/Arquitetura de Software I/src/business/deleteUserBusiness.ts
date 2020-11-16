import deletedtUser from "../data/deletedUser";
import { getTokenData } from "../services/authenticator";

export const deleteUserBusiness = (input: { id: string, token: any }): Promise<any> => {
   {
      const deletedUser = deletedtUser(input.id)

      const authenticationData = getTokenData(input.token);

      if (authenticationData.role !== 'ADMIN') {
         throw new Error("Acesso não autorizado a usuários não ADMIN!");
      }

      if (!authenticationData) {
         throw new Error("Token informado está incorreto!");
      }

      return deletedUser
   };
}

