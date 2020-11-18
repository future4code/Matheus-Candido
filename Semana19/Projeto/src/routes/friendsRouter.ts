
import express from 'express'
import { friendsController } from '../controller/friendsController/FriendsController'

export const userRoutes = express.Router()

userRoutes.post("/:id", friendsController.inviteFriend)
userRoutes.delete("/:id", friendsController.unFriend)