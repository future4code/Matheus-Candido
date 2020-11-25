import { Request, Response } from "express"
import { loginBusiness } from "../business/loginBusiness"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const input = {
         email: req.body.email,
         password: req.body.password
      }
      let message = "Usuário logado!"


      const token = await loginBusiness(input)

      res.send({
         message,
         token
      })

   } catch (error) {
      let { message } = error
      console.log(message)
      if (message === "Cannot read property 'id' of undefined") {
         message = "Email informado não é inválido"
         res.statusCode = 406
      }

      if (message === "Cannot read property 'id' of undefined") {
         message = "Usuário não encontrado ou senha incorreta"
         res.statusCode = 404
      }

      if (message === "Field 'name' doesn't have a default value") {
         message = "Insira um nome para seu usuário"
         res.statusCode = 406
      }
      res.send({ message })
   }
}