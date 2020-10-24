import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { users } from "./account"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/contas", (req: Request, res: Response): void => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({ message: "Erro ao encontrar contas." })
    }
})

app.get("/contas/query", (req: Request, res: Response): void => {
    // const result = users.find((u) => (u.cpf === req.query.cpf) && (u.name === req.query.name))
    const result = users.find((u) => (u.name === req.query.name))

    try {
        if (!result) {
            throw new Error("Cpf não encontrado e nome não encontrado");
        }
        res.status(200).send([`${result?.name}`, `R$ ${result?.balance}`])
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.post("/create", (req: Request, res: Response): void => {
    let errorCode = 403

    const { name, cpf, birthday, balance, transactions } = req.body
    const result = users.find((u) => u.cpf === req.body.cpf)

    /* Segundo jeito de fazer a verificação de idade
    const [day, month, year] = birthday.split("/")
    const dateBirthday: Date = new Date(`${year}-${month}-${day}`)
    const ageInMilisseconds: number = Date.now() - dateBirthday.getTime()
    const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 365
    */
    try {
        if (new Date().getFullYear() - users[0].birthday.getFullYear() < 18) {
            // res.status(405).send({ message: "Precisa ter mais de 18 anos para criar a conta." })
            throw new Error("Precisa ter mais de 18 anos para criar a conta.");
        }
        if (result) {
            throw new Error("Cpf já cadastrado.");
        }

        users.push({
            name: name,
            cpf: cpf,
            birthday: birthday,
            balance: 0,
            transactions: []
        })
        res.status(200).send({ message: "User created sccessfully!" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.put("/contas/novo-saldo", (req: Request, res: Response): void => {

    const { name, cpf, birthday, balance, transactions } = req.body
    const userIndex: number = users.findIndex((u) => (u.cpf === cpf) && (u.name === name))
    try {
        if (userIndex === -1) {
            throw new Error("Cpf e ou nome não encontrado");
        }

        const newValue = users[userIndex].balance + balance
        users[userIndex].balance += balance

        res.status(200).send({ message: `Novo saldo da conta ${newValue}` })
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