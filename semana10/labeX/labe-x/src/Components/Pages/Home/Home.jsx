import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const Main = styled.div`
/* height: 100vh; */
h2{
    margin: 0;
    padding: 20px 0;
}
`


export default function Home() {
    const history = useHistory()
    let token = window.localStorage.getItem("token")
    

    const goToList = () => {
        history.push("/trips/list")
    }
    const verifica = () => {
        if (token) {
            history.push("/adm/trips/create")
        } else {
            history.push("/adm/signin")
        }
    }
    const logout = () => {
        token = window.localStorage.removeItem("token")
        history.push("/adm/signin")
    }
    return (
        <Main>
            <h2>Home</h2>
            {token && <button onClick={verifica}>usuario</button>}
            {token ? <button onClick={logout}>logout</button> : <button onClick={verifica}>Login</button>}
            <button onClick={goToList}>Viagens</button>
        </Main>
    )
}