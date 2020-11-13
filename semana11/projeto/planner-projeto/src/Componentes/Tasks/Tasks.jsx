import React from 'react'
import trash from './imgs/trash.png'
import { Div, List, Main } from './styles'

export default function Tasks(props) {
    return (
        <Main>
            {/* É feito um map para cada dia da semana. */}
            {/* Dentro de cada map, dentro de seu return, é feito uma lógica de curto cicurto, 
            onde se o dia pego no map recebido da lista é igual ao dia correspondente ele mapea todas as tarefas daquele dia. */}
            <List>
                <h3>Segunda</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Segunda" &&
                                <Div key={list.id} id={list.id} data-testid={'list'}>
                                    <b>{list.text}</b>
                                    <img src={trash} onClick={() => props.deletTask(list.id)} alt="Deletar tarefa"/>
                                </Div>
                            }
                        </>
                    )
                })}
            </List>

            <List>
                <h3>Terça</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Terça" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <img src={trash} onClick={() => props.deletTask(list.id)} alt="Deletar tarefa"/>
                                </Div>
                            }
                        </>
                    )
                })}
            </List>

            <List>
                <h3>Quarta</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quarta" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <img src={trash} onClick={() => props.deletTask(list.id)} alt="Deletar tarefa"/>
                                </Div>
                            }
                        </>
                    )
                })}
            </List>

            <List>
                <h3>Quinta</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quinta" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <img src={trash} onClick={() => props.deletTask(list.id)} alt="Deletar tarefa"/>
                                </Div>
                            }
                        </>
                    )
                })}
            </List>

            <List>
                <h3>Sexta</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sexta" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <img src={trash} onClick={() => props.deletTask(list.id)} alt="Deletar tarefa"/>
                                </Div>
                            }
                        </>
                    )
                })}
            </List>

            <List>
                <h3>Sábado</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sábado" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <img src={trash} onClick={() => props.deletTask(list.id)} alt="Deletar tarefa"/>
                                </Div>
                            }
                        </>
                    )
                })}
            </List>

            <List>
                <h3>Domingo</h3>
                {/* Map das tasks */}

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Domingo" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <img src={trash} onClick={() => props.deletTask(list.id)} alt="Deletar tarefa"/>
                                </Div>
                            }
                        </>
                    )
                })}
            </List>
        </Main>
    )
}