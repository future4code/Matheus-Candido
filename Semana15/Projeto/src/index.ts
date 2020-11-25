import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { users } from "./account"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response): void => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({ message: "Erro ao encontrar contas." })
    }
})

app.get("/user/query", (req: Request, res: Response): void => {
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

app.put("/user/novo-saldo", (req: Request, res: Response): void => {

    const { name, cpf, birthday, balance, value, date, description } = req.body
    const userIndex: number = users.findIndex((u) => (u.cpf === cpf) && (u.name === name))
    try {
        if (userIndex === -1) {
            throw new Error("Cpf e ou nome não encontrado");
        }

        const newValue = users[userIndex].balance + balance
        users[userIndex].balance += balance

        users[userIndex].transactions.push({
            value: balance,
            date: new Date,
            description: "Depósito de dinheiro"
        })

        res.status(200).send({ message: `Novo saldo da conta ${newValue}` })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.post("/user/pagar", (req: Request, res: Response): void => {

    const { date, description, value, cpf, name } = req.body
    const userIndex: number = users.findIndex((u) => (u.cpf === cpf) && (u.name === name))
    try {
        // if (new Date().get !== date) {
        //     // res.status(405).send({ message: "Precisa ter mais de 18 anos para criar a conta." })
        //     throw new Error("A conta está vencida.");
        // }
        if (userIndex === -1) {
            throw new Error("Cpf e ou nome não encontrado");
        }

        users[userIndex].transactions.push({
            value: value,
            date: date || new Date,
            description: "Pagamento de conta"
        })

        res.status(200).send({ message: `Conta paga com sucesso!` })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.put("/user/atualizar-saldo", (req: Request, res: Response): void => {

    const { description, cpf, name } = req.body
    const userIndex: number = users.findIndex((u) => (u.cpf === cpf) && (u.name === name))
    try {
        if (userIndex === -1) {
            throw new Error("Cpf e ou nome não encontrado");
        }
        // const array = users[users[userIndex].transactions.lastIndexOf(u => u.date[-1])]
        const subs = users[userIndex].transactions.findIndex(u => u.description === "Pagamento de conta")

        if (subs && new Date() !== users[userIndex].transactions[userIndex].date) {
            users[userIndex].balance -= users[userIndex].transactions[subs].value
        }

        const adds = users[userIndex].transactions.find(u => u.description === "Depósito de dinheiro")

        if (adds && new Date() !== users[userIndex].transactions[userIndex].date) {
            users[userIndex].balance += users[userIndex].transactions[userIndex].value
        }
        console.log(users[userIndex].balance)

        res.status(200).send({ message: `Saldo atualizado.` })
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