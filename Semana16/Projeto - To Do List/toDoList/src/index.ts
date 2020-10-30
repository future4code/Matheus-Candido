import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from './endpoints/createUser'
import { getUserFromId } from "./endpoints/getUserFromId";
import { putUserFromId } from "./endpoints/putUserFromId";
import { createTask } from "./endpoints/createTask";
import { getTaskFromId } from "./endpoints/getTaskById";

/**************************************************************/

dotenv.config();

/**************************************************************/

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

app.post("/user", createUser);

app.get("/user/:id", getUserFromId);

app.put("/user/edit/:id", putUserFromId);

app.post("/task", createTask);

app.get("/task/:id", getTaskFromId)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}