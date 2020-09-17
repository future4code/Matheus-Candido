import React, { useState, useEffect } from 'react'
import { matchs } from '../../Axios/Axios'
import axios from 'axios'
import { Div, Img } from './Styles';

export default function Matches() {
    const [matches, setMatches] = useState([]) //Estado onde contêm o array de matches recebidos da Api.

    // Função que faz o get axios da Api.
    const match = () => {
        axios.get(matchs)
            .then(r => {
                setMatches(r.data.matches)
            }).catch(e => {
                console.log(e)
            })
    }
    // Usado para carregar a Api no momento em que a aplicação é iniciada, ao final usei [] para evitar loops infinitos, 
    //importante usar (Eu do futuro não se esqueça de usar apenas [] vázios, só os vázios não dão loops.)
    useEffect(() => {
        match()
    }, [])

    return (
        <div>
            {/* Ternário para que, se o array de matches estiver vázio ele irá mostrar uma mensagem para o usuário. */}
            {matches.length > 0 ? <div>{
                // Map para mapear os objetos od array que foi recebido da Api para acessar as informações das profiles.
                matches.map((M) => {
                    return (
                        <Div key={M.id}> <Img src={M.photo} alt="" /> <b>{M.name}</b></Div>
                    )
                })
            }</div> : <b> Sem matches no momento, volte para a página de perfis e dê uns likes para ver se você encontrará a sua cara metade. ^-^</b>}
        </div>
    )
}