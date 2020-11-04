import { Profession } from "./Profession";

export type User = {
   id: string,
   name: string,
   email: string,
   type: Profession[]
}
export type inputData = {
   name: string,
   type: string,
   orderByName: string,
   orderByType: string
}