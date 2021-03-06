import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/authenticationData"
const expiresIn = "100min"

export function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn
      }
   )
}

// Jeito 1
export function getTokenData(
   token: string
): AuthenticationData {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as AuthenticationData
}

// Jeito 2
// export const getData = (token: string): AuthenticationData => {
//    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
//    const result = {
//       id: payload.id,
//       role: payload.role
//    };
//    console.log(result)
//    return result;
// };