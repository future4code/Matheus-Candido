export type transaction = {
    value: number,
    date: Date,
    description: string
}

export type account = {
    name: string
    cpf: string
    birthday: Date
    balance: number
    transactions: Array<transaction>
}
