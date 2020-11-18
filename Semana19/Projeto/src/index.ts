/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRoutes } from "./routes/userRoutes"
import { inviteFriend } from "./controller/inviteFriend/inviteFriend"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/user", userRoutes)
app.use("/post", userRoutes)
app.use("/friends", userRoutes)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})