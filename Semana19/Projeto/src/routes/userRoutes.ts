import express from 'express'
import { userController } from '../controller/userController/UserController'

export const userRoutes = express.Router()

userRoutes.post("/signup", userController.signup)
userRoutes.post("/login", userController.login)