import { Request, Response } from "express"
import { unFriendBusiness } from "../../business/unFriendBusiness/unFriendBusiness"
import { AuthenticationData } from "../../model/AuthenticationData"
import { getTokenData } from "../../services/authenticator"

export const unFriend = async (req: Request, res: Response) => {
    try {
        let message = "Friend deleted!"

        const input = {
            authorization: req.headers.authorization as string
        }
        const { id } = req.params

        const tokenId: AuthenticationData = await getTokenData(input.authorization)

        await unFriendBusiness(id)

        res.status(201).send({ message })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}