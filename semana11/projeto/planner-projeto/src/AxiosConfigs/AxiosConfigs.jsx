import axios from "axios"
import { useState } from "react"

export const useAxiosConfigs = () => {
    //Crio um estado para guardar a lista recebi da api em um array por hora vázio.
    const [tasks, setTasks] = useState([])
    //Função que executa a requisição get na api recebendo todas as tarefas e armazenando-as dentro do estado tasks com o setTasks criado acima.
    const getTasks = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido")
            .then((response) => {
                setTasks(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    //Função que executa a o método delete na api recebendo como parametro no seu url um id para poder deletar uma tarefa específica.
    const deletTask = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido/${id}`)
            .then((response) => {

                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    //Retorna as duas funções do axios e o estado contendo a lista armazenada dentro.
    return { getTasks, tasks, deletTask}
}
