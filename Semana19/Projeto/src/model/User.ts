export type CreateUser = [
    name: string,
    email: string,
    password: string
]



// export class CreateUser {

//     constructor(
//         private name: string,
//         private email: string,
//         private password: string
//     ) { }
//     public postName = (): string => this.name
//     public postEmail = (): string => this.email
//     public postPassword = (): string => this.password

// }

export class User {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
    ) { }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password
}