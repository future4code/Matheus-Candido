import { USER_ROLES } from "./roles";

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}
