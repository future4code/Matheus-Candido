enum transaction {

}

export type account = {
    name: string
    age: Date
    transactions: Array<transaction>
}

export let users: account[] = [
    {
        name: "Josivaldo",
        age: new Date(Date.UTC(1999, 12, 20)),
        transactions: []
    }
]