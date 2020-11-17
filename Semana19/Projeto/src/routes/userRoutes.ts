import express from 'express'
import { createPost } from '../controller/createPost/createPost'
import { getPost } from '../controller/getPost/getPost'
import { login } from '../controller/login/login'
import { signupUser } from '../controller/signupUser/signupUser'

export const userRoutes = express.Router()

userRoutes.post("/signup", signupUser)
userRoutes.post("/login", login)

userRoutes.post("/create", createPost)
userRoutes.get("/:id", getPost)