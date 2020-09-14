
import styled from "styled-components";

// Main que recebe os componentes.
export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center; 
    min-height: 100vh;
    background-color: #4158D0;
    background-image: linear-gradient(190deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    @media screen and (max-width: 400px){
        width: 100%;
    }
`;

// Div que contem o primeiro Card da tela onde ele recebe dentro dele o componente NavBar, ProfilesP e Matches.
export const Card = styled.div`
    width: 350px;
    min-height: 550px;
    border: 3px solid black;
    border-radius: 10px;
    box-shadow: 15px 15px 20px 1px black;
    font-size: 15px;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    @media screen and (max-width: 400px){
        width: 60%;
        min-height: 380px;
    }
`;

// Style que edita o tamanho do componente NavBar recebido dentro do Card.
export const Nav = styled.div`
    display: flex;
    background-color: rgb(254,60,114);
    height: 10%;
    border-bottom: 1px solid black;
    border-radius: 8px 8px 0 0;
    justify-content: center;
`;

// Style que edita o tamanho do componente Profiles/Matches recebido dentro do Card.
export const Center = styled.div`
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    height: 86.5%;
    @media screen and (max-width: 400px){
        height: 100%;
    }
`;

// Style que edita o tamanho do botão de clean que está presente fora do Card.
export const Reset = styled.div`
    width: 3%;
    position: fixed;
    top: 0;
    right: 0;
    img {
        width: 100%;
        :hover {
            cursor: pointer;
            transform: scale(1.1)
            }
        }
`;