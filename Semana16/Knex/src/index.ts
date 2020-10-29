import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Movie } from "./types";
import { getAllMovies } from './endpoints/getAllMovies'
import { searchMovieByName } from "./data/searchMoviesByName";
import { createMovie } from "./endpoints/createMovie";
import { searchActorFromName } from "./endpoints/searchActorFromName";
import { searchActorFromId } from "./endpoints/searchActorFromId";
import { searchActorFromGender } from "./endpoints/searchActorFromGender";
import { searchActorById } from "./data/searchActorById";
import { updateSalary } from "./endpoints/updateSalary";
import { deleteActors } from "./endpoints/deleteActors";

/**************************************************************/

dotenv.config();

/**************************************************************/

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

export const movies: Movie[] = []

app.get("/movies/all", getAllMovies);

app.get("/movies/search", searchMovieByName);

app.post("/movies/new", createMovie)

app.get("/actor/:id", searchActorFromId)

app.get("/actors/query", searchActorFromGender)

app.get("/actors/query", searchActorFromName)

app.post("/actor", updateSalary)

app.delete("/actor/:id", deleteActors)

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

// searchMovieByName("a")