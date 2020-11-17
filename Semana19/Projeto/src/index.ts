/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRoutes } from "./routes/userRoutes"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/user", userRoutes)
app.use("/post", userRoutes)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})