import React from 'react'
import styled from "styled-components";

const Main = styled.main`
display: flex;
justify-content: space-around;
`;

const Div = styled.div`
b{  
/* text-decoration: ${props => props.id ? "line-through" : "none"}; */
}
`;

export default function Tasks(props) {
    return (
        <Main>
            {/* É feito um map para cada dia da semana. */}
            {/* Dentro de cada map, dentro de seu return, é feito uma lógica de curto cicurto, 
            onde se o dia pego no map recebido da lista é igual ao dia correspondente ele mapea todas as tarefas daquele dia. */}
            <div>
                <h3>Segunda</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Segunda" &&
                                <Div key={list.id} id={list.id} >
                                    <b>{list.text}</b>
                                    <button onClick={() => props.deletTask(list.id)}>Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <h3>Terça</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Terça" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <button onClick={() => props.deletTask(list.id)}>Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <h3>Quarta</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quarta" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <button onClick={() => props.deletTask(list.id)}>Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <h3>Quinta</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quinta" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <button onClick={() => props.deletTask(list.id)}>Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <h3>Sexta</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sexta" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <button onClick={() => props.deletTask(list.id)}>Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <h3>Sábado</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sábado" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <button onClick={() => props.deletTask(list.id)}>Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <h3>Domingo</h3>
                {/* Map das tasks */}

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Domingo" &&
                                <Div key={list.id} id={list.id}>
                                    <b>{list.text}</b>
                                    <button onClick={() => props.deletTask(list.id)}>Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>
        </Main>
    )
}