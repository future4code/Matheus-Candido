import { account } from "./types";

export let users: account[] = [
    {
        name: "Josivaldo",
        cpf: "000.000.000-00",
        birthday: new Date(Date.UTC(1999, 12, 20)),
        balance: 0,
        transactions: [
            {
                value: 1500,
                date: new Date(Date.UTC(1999, 2, 30)),
                description: "Depósito de dinheiro"
            },
            {
                value: 1500,
                date: new Date(Date.UTC(1989, 2, 30)),
                description: "Depósito de dinheiro"
            },
            {
                value: 1000,
                date: new Date(Date.UTC(2000, 12, 30)),
                description: "Pagamento de conta"
            },
            {
                value: 500,
                date: new Date(Date.UTC(2010, 12, 30)),
                description: "Pagamento de conta"
            }
        ]
    }
]