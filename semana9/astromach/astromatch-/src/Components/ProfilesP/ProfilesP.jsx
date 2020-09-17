import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { choose_Person, profile_To_Choose } from '../../Axios/Axios'
import logo2 from '../Load/imgs/load1.gif'
import like from './imgs/like.png'
import dislike from './imgs/broken_heart.png'
import { ImgLoad, Profile, Cards, Card2, Card_Img, Card_Img_Hover, Card_Info, Card_Title, Bio, NavBottom } from './Styles.jsx'


export default function ProfilesP() {
    const [profiles, setProfiles] = useState([]) // Estado que recebe o array da Api.

    // Método de receber os profiles da Api com o get axios.
    const getProfile = () => {
        axios.get(profile_To_Choose)
            .then(r => {
                setProfiles(r.data.profile)
            }).catch(e => {
                console.log(e)
            })
    }

    // Método de dar match na Api com o post axios.
    const postProfile = () => {
        const body = {
            id: profiles.id,
            choice: true
        }
        axios.post(choose_Person, body)
            .then(r => {
                console.log(r)
            }).catch(e => {
                console.log(e)
            })
    }

    // Função onde se a opção clicada for o like ele irá executar o get axios para mostrar um novo profuile,
    // se for a outra opção ele irá executar o get e o post para mostrar um novo profile e ver se deu match com o profile escolhido.
    const choose = (option) => {
        if (option === 'dislike') {
            getProfile()
        }
        if (option === 'like') {
            postProfile()
            getProfile()
        }
    }

    // Renderiza a lista que foi pego na Api ao iniciar a aplicação (novamente eu do futuro, não se esqueça desse [] vázio).
    useEffect(() => {
        getProfile()
    }, [])

    // If onde se o array bugar e der como null, ao invéz de quebrar o site ele irá mostrar um gif dentro do Card no componente 'TheCard'.
    if (profiles === null) {
        return <ImgLoad><img src={logo2} /></ImgLoad>
    }

    return (
        <div>
            {profiles ?
                <Profile >
                    <Cards>
                        <Card2>
                            <Card_Img></Card_Img>
                            <Card_Img_Hover img={profiles.photo}></Card_Img_Hover>
                            <Card_Info>
                                <Card_Title><b>{profiles.name}</b>, {profiles.age} <h6>(Ler mais...)</h6></Card_Title>
                                <Bio>{profiles.bio}</Bio>
                            </Card_Info>
                        </Card2>
                    </Cards>
                    <NavBottom>
                        <img src={dislike} onClick={() => choose('dislike')} option='dislike' alt="" />
                        <img src={like} onClick={() => choose('like')} option='like' alt="" />
                    </NavBottom>
                </Profile>
                : null}
        </div >
    )
}