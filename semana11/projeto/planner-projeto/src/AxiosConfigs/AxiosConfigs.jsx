import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const useAxiosConfigs = () => {
    const [tasks, setTasks] = useState([])
    const getTasks = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido")
            .then((response) => {
                setTasks(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    const putEdit = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido/${id}`)
            .then((response) => {

                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    const deletTask = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido/${id}`)
            .then((response) => {

                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    return { getTasks, tasks, putEdit, deletTask}
}
