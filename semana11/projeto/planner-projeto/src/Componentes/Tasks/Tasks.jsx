import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components";
import { useAxiosConfigs } from '../../AxiosConfigs/AxiosConfigs';

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
    const { putEdit, deletTask } = useAxiosConfigs()
    const [riscar, setRiscar] = useState(false)
    const [segunda, setSegunda] = useState("")

    const riscado = () => {
        setRiscar(!riscar)
    }

    const edit = (id) => {
        putEdit(id)
    }

    const delet = (id) => {
        deletTask(id)
    }


    // {
    //     tasks.map((list) => {

    //             setSegunda(list.text)

    //     })
    // }

    return (
        <Main>
            {/* {segunda} */}

            <div>
                <h3>Segunda</h3>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Segunda" &&
                                <Div key={list.id} riscado={riscar} id={list.id} >
                                    <b>{list.text}</b>
                                    <button onClick={() => delet(list.id)} >Deletar</button>
                                    <button onClick={() => edit(list.id)}>Editar</button>
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
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b>{list.text}</b>
                                    {/* <button onClick={() => delet(list.id)} >Deletar</button> */}
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
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text}</b>
                                    {/* <button onClick={() => delet(list.id)} >Deletar</button> */}
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
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text}</b>
                                    {/* <button onClick={() => delet(list.id)} >Deletar</button> */}
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
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text}</b>
                                    {/* <button onClick={() => delet(list.id)} >Deletar</button> */}
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
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text}</b>
                                    <button onClick={() => delet(list.id)} >Deletar</button>
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
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text}</b>
                                    <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
                {/* <button onClick={() => delet()} >Deletar</button> */}
            </div>
        </Main>
    )
}