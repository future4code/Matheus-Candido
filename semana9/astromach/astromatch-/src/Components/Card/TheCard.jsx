import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../NavBar/NavBar';
import ProfilesP from '../ProfilesP/ProfilesP'
import Matches from '../Matchs/Matches';
import { clear } from '../../Axios/Axios'
import reset from '../ProfilesP/imgs/reset.png'
import { Main, Card, Nav, Center, Reset } from './Styles'

export default function TheCard() {
    const [currentPage, setCurrentPage] = useState('Profiles') //Estado que verifica a página atual e alterna entre o componentes Matches e ProfilesP.
    const [profiles, setProfiles] = useState([]) //Array que recebe os dados da Api.

    // Função de clicks para alternar entre os componetes Matches e ProfilesP dentro do Card principal.
    const onClickProfiles = () => {
        setCurrentPage('Profiles')
    }
    const onClickMatches = () => {
        setCurrentPage('Matches')
    }
    // ------------------------------------------ //

    // Função que executa o clean da api no array dos card com o axios put.
    const clean = () => {
        const body = {
            id: profiles.id
        }
        axios.put(clear, body)
            .then(r => {
                console.log(r)
            }).catch(e => {
                console.log(e)
            })
    }

    return (
        <Main>
            <Card>
                <Nav>
                    {/* Envia em forma de props o estado de página atual e as funções de alternar alternar as páginas. */}
                    <NavBar currentPage={currentPage} pageProfiles={onClickProfiles} pageMatches={onClickMatches} />
                </Nav>
                {profiles ?
                    <Center>
                        {/* Ternário que altera o componente atual dentro do Card. */}
                        {currentPage === 'Profiles' ? <ProfilesP /> : <Matches />}
                        <Reset><img src={reset} onClick={clean} /></Reset>
                    </Center> : null}
            </Card>
        </Main >
    )
}