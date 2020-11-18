import express from 'express'
import { createPost } from '../controller/createPost/createPost'
import { feed } from '../controller/feed/feed'
import { getPost } from '../controller/getPost/getPost'
import { getTypePost } from '../controller/getTypePost/getTypePost'
import { inviteFriend } from '../controller/inviteFriend/inviteFriend'
import { login } from '../controller/login/login'
import { signupUser } from '../controller/signupUser/signupUser'
import { unFriend } from '../controller/unFriend/unFriend'

export const userRoutes = express.Router()

userRoutes.post("/signup", signupUser)
userRoutes.post("/login", login)

userRoutes.post("/create", createPost)
userRoutes.get("/all", feed)
userRoutes.get("/search", getTypePost)
userRoutes.get("/:id", getPost)

userRoutes.post("/:id", inviteFriend)
userRoutes.delete("/:id", unFriend)