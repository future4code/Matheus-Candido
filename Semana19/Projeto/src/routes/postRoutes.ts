import express from 'express'
import { postController } from '../controller/postController/PostController'

export const postRoutes = express.Router()

postRoutes.post("/create", postController.createPost)
postRoutes.get("/all", postController.feed)
postRoutes.get("/search", postController.getTypePost)
postRoutes.get("/:id", postController.getPost)