import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import '../../App.css';
import { useForm } from '../../Hooks/Hooks';
import Tasks from '../Tasks/Tasks';
import { Main } from './styles';


export default function Planner(props) {
    // Custom hook chamado para criar o formulário que irá contar no corpo do post.
    const { form, onChange, resetState } = useForm({
        text: "",
        day: ""
    })

    //Função que recebe o método post e contem o body com o formulário criado na chamada do custom hook acima.
    const postTasks = () => {
        const body = {
            text: form.text,
            day: form.day
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido", body)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }
    //Função que recebe o onChange do custom hook do useForm e manipula e controla os inputs e select.
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }
    //Função que serve para agrupar outras funções e chamar em uma única ação do usuário.
    const handleSubimission = (event) => {
        // Utilizado para previnir que o formulário recarregue a página após o seu envio.
        event.preventDefault()
        postTasks()
        //Função recebida do custom hook com o objetivo de limpar os campos de select e input após o envio do formulário, deixando-os no seu estado inicial.
        resetState()
    }
    useEffect(() => {
        /*Usado para que toda vez que uma tarefa for criada ou deletada, 
        no caso a lista ou estado seja mudado, useEffects atualiza o componente para que as alterações sejam atualizadas e visíveis.*/
        props.getTasks()
    })

    return (
        <Main className="App">
            <h1>Crie uma tarefa</h1>
            {/* Form que irá conter todas as informações a serem enviadas na requisição do axios.post. */}
            <form onSubmit={handleSubimission}>
                {/* Input contendo as informações necessárias para receber os dados digitados pelo usuário e enviá-los após conclusão desta ação. */}
                <input name="text" value={form.text} onChange={handleInputChange} type="text" placeholder="Digite a tarefa" required />

                {/* Select contendo as informações necessárias para identificar os valores digitados pelo usuário e enviá-los após conclusão desta ação. */}
                <select
                    data-testid={'select-day'}
                    name="day"
                    value={form.day}
                    onChange={handleInputChange}
                    required
                >
                    {/* Opções do select contendo cada opção com um valor único referente a cada dia da semana. */}
                    <option value="none">Selecione um dia da semana</option>
                    <option value="Segunda" >Segunda</option>
                    <option value="Terça" >Terça</option>
                    <option value="Quarta" >Quarta</option>
                    <option value="Quinta" >Quinta</option>
                    <option value="Sexta" >Sexta</option>
                    <option value="Sábado" >Sábado</option>
                    <option value="Domingo" >Domingo</option>
                </select>
                <button>Criar Task</button>
            </form>

            <h2>Todas as tarefas</h2>

            {/* Ao mesmo tempo que recebe o import do componente Tasks também envia pra esse componente tres informações em forma de props e recebidas do componente pai - App.
            Nesse caso as duas funções de requisição do axios e um estado contendo a lista com todas as tarefas a ser renderizada na tela no componente Tasks. */}
            <Tasks tasks={props.tasks} deletTask={props.deletTask} putEdit={props.putEdit} />

        </Main>
    );
}


