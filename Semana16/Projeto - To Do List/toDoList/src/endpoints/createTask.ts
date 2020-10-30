import { Request, Response } from "express";
import { createNewTask } from "../data/createNewTask";

export const createTask = async (req: Request, res: Response) => {
    const [day, month, year] = req.body.limit_date.split("/")
    const data = req.body.limit_date

    const date: Date = new Date(`${day}-${month}-${year}`)

    const dia = date.getDay()
    const mes = date.getMonth()
    const ano = date.getFullYear()
    const dataToda: Date | string | any = (`${dia}-${mes}-${ano}`)
    try {
        const result = await createNewTask(req.body.title, req.body.description, data, req.body.id_user, req.body.name_user)

        // console.log({ dia, mes, ano })

        console.log(data)


        res.status(200).send({ message: "Tarefa criada com sucesso!" })
    } catch (error) {
        console.log(ano)
    }
}