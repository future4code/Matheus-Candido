/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRoutes } from "./routes/userRoutes"
import { postRoutes } from "./routes/postRoutes"
import { friendsRoutes } from "./routes/friendsRouter"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/user", userRoutes)
app.use("/friends", friendsRoutes)
app.use("/post", postRoutes)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})