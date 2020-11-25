
import express from 'express'
import { friendsController } from '../controller/friendsController/FriendsController'

export const friendsRoutes = express.Router()

friendsRoutes.post("/:id", friendsController.inviteFriend)
friendsRoutes.delete("/:id", friendsController.unFriend)