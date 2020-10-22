//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]


/* Exercicios (Descritivas)

1 -
a) metodo get: "/users"
b) seria aquilo que estamos manipulando no moemento, nesse caso o array de users

2 -
a) Passei dentro de um filtro com o req.params.type, porque dessa maneira ele irá filtrar os dados pelo tipo de dado que eu buscar.
b) Se não existir um tipo válido no momento de busca ele retorna nada

3 -
a) Query
b) ! Lógica presente na lista de lógicas abaixo da lista de exercícios descritivos !

4 -
a) Até então a unica mudança foi no método de post para put, de restante nesse caso parece tudo igual.
b) Não, pois o post é um método padrão para criar um dado novo,
já o put, por padrão ele é um método de edição de algum dado, que cria um dado novo que irá substituir aquele dado antigo.

5 - ! Lógica presente na lista de lógicas abaixo da lista de exercícios descritivos !


6 - ! Lógica presente na lista de lógicas abaixo da lista de exercícios descritivos !


7 - ! Lógica presente na lista de lógicas abaixo da lista de exercícios descritivos !

*/

// ----------------------- LÓGICAS ---------------------------- //

// 1)
app.get("/users", (req: Request, res: Response): void => {
    try {
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

// 2)
app.get("/users/:type", (req: Request, res: Response): void => {
    try {
        const usersByType = users.filter((user) => user.type === req.params.type
        )
        res.status(200).send(usersByType);
    }
    catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

// 3)
app.get("/users/query", (req: Request, res: Response): void => {
    const name = req.query.name;

    console.log(`O nome chegou: ${name}`);

    try {
        const user = users.filter((u) => u.name === name)

        if (!user) {
            throw new Error();
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


// 4)
app.post("/users", (req: Request, res: Response): void => {
    try {
        const { id, name, email, age, type } = req.body;

        const user = {
            id: id,
            name: name,
            email: email,
            age: age,
            type: type,
        }

        users.push(user);

        res.status(200).send({ message: "User created successfully" });
    }
    catch (error) {
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

// 4) & (5
app.put("/users/:id", (req: Request, res: Response): void => {
    let errorCode = 400
    try {
        const { id, name, email } = req.body;

        const user = {
            id: id,
            name: name,
            email: email,
        }

        const userIndex = users.findIndex((u) => u.id === id)

        if (userIndex === -1) {
            errorCode = 404
            throw new Error("Notfound");
        }

        users[userIndex].name = name
        users[userIndex].email = email

        res.status(200).send({ message: "User updated successfully" });
    }
    catch (error) {
        res.status(400).send({
            message: "Error update user"
        });
    }
})

// 6)
app.patch("/users/:id", (req: Request, res: Response): void => {
    let errorCode = 400
    try {
        const { id, name, email } = req.body;
        const user = {
            id: id,
            name: name,
            email: email,
        }

        const userIndex = users.findIndex((u) => u.id === id)
        if (userIndex === -1) {
            errorCode = 404
            throw new Error("Notfound");
        }

        users[userIndex].name = name
        users[userIndex].email = email

        res.status(200).send({ message: "User reupdated successfully." });
    }
    catch (error) {
        res.status(400).send({
            message: "Error reupdate user."
        });
    }
})

// 7)
app.delete("/users/:id", (req: Request, res: Response): void => {
    let errorCode: number = 400
    try {
        const userIndex = users.findIndex((u) => u.id === Number(req.params.id))

        if (userIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        users.splice(userIndex, 1)

        res.status(200).send({ message: "User deleted." });
    }
    catch (error) {
        res.status(400).send({
            message: "Error delete user."
        });
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});

