import { Request, Response } from "express"
import { inviteFriendBusiness } from "../../business/inviteFriend/inviteFriendBusiness"
import { AuthenticationData } from "../../model/AuthenticationData"
import { getTokenData } from "../../services/authenticator"

export const inviteFriend = async (req: Request, res: Response) => {
    try {
        let message = "New friend conquisted!"

        const input = {
            authorization: req.headers.authorization as string
        }
        const {id} = req.params

        const tokenId: AuthenticationData = await getTokenData(input.authorization)

        await inviteFriendBusiness(tokenId.id, id)

        res.status(201).send({ message })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}