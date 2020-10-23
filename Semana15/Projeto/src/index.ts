import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { users } from "./account"

const app = express();

app.use(express.json());
app.use(cors());

console.log(users)

app.get("/contas", (req: Request, res: Response): void => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({ message: "Erro ao encontrar contas." })
    }
})

app.get("/contas/:name", (req: Request, res: Response): void => {
    try {
        const result = users.map((u) => u.name === req.params.name)
        if (!users.length) {
            throw new Error();

        }
    } catch (error) {
        res.status(400).send({ message: "Erro ao encontrar conta." })
    }
})

app.post("/create", (req: Request, res: Response): void => {
    let errorCode = 403
    try {
        if (new Date().getFullYear() - users[0].age.getFullYear() < 18) {
            // res.status(405).send({ message: "Precisa ter mais de 18 anos para criar a conta." })
            throw new Error("Precisa ter mais de 18 anos para criar a conta.");
        }
        const { name, age, transactions } = req.body

        const user = {
            name: name,
            age: age,
            transactions: transactions
        }

        users.push(user)
        res.status(200).send({ message: "User created sccessfully!" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})