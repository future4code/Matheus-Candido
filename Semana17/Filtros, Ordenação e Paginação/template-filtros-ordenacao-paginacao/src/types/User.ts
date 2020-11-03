import { Profission } from "./profission";

export type User = {
   id: string,
   name: string,
   email: string,
   type: Profission[]
}
export type inputData = {
   name: string,
   type: string
}