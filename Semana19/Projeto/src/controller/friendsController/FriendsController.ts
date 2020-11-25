import { Request, Response } from "express"
import { friendsBusiness } from "../../business/friendsBusiness/FriendsBusiness"
import { AuthenticationData } from "../../model/AuthenticationData"
import { getTokenData } from "../../services/authenticator"

class FriendsController {

    public inviteFriend = async (req: Request, res: Response) => {
        try {
            let message = "New friend conquisted!"

            const input = {
                authorization: req.headers.authorization as string
            }
            const { id } = req.params

            const tokenId: AuthenticationData = await getTokenData(input.authorization)

            await friendsBusiness.inviteFriend(tokenId.id, id)

            res.status(201).send({ message })

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }

    public unFriend = async (req: Request, res: Response) => {
        try {
            let message = "Friend deleted!"

            const input = {
                authorization: req.headers.authorization as string
            }
            const { id } = req.params

            const tokenId: AuthenticationData = await getTokenData(input.authorization)

            await friendsBusiness.unFriend(tokenId.id, id)

            res.status(201).send({ message })

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }
}

export const friendsController: FriendsController = new FriendsController()