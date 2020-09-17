import React from 'react'
import user from './imgs/user.png'
import matchHeart from './imgs/match-heart.png'
import { Header, ImgProfile, ImgHeart } from './Styles';

export default function NavBar(props) {
    return (
        <Header>
            <ImgProfile>
                {/* Ternário de props do estado que indica a página atual, onde se a página for 'Matches' 
            ele renderiza seu icone de profiles para que o usuario possa voltar a página de profiles. */}
                {props.currentPage === 'Matches' ? <img src={user} alt="" onClick={props.pageProfiles} /> : null}
            </ImgProfile>
            <h2>Astromatch</h2>
            <ImgHeart>
                {/* Esse ternário é a mesma coisa só que quando estiver na página 'Profiles  ele renderiza um icone para o usuário ir para a página de matches. */}
                {props.currentPage === 'Profiles' ? <img src={matchHeart} alt="" onClick={props.pageMatches} /> : null}
            </ImgHeart>
        </Header>
    )
}