import styled from "styled-components";

// Caso o array bugue para que o site não quebre essa dive é de um gif que aparece no lugar dos profiles.
export const ImgLoad = styled.div`
    -webkit-animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3 both;
	animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3 both;
    background: transparent;
        img {
            width: 100%;
            height: 50vh;
        }
`;

// Div que engloba o component ProfilesP.
export  const Profile = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

// Contem os cards com as fotos, titulos e bios.
export  const Cards = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Há algumas interações com o hover e background, mudança do cursor, escala do card.
export const Card2 = styled.article`
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: transparent;
    width: 100%;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
    box-sizing: border-box;
    :hover {
        box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
        transform: scale(1.10, 1.10);
        background-color: transparent;
        cursor: pointer;
        div {
            background-color: rgb(254,60,114);
        }
    }
`;

// Style da parte da imagem dentro do card do Componente ProfileP.
export  const Card_Img = styled.div`
    visibility:hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width:100%;
    height: 360px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    @media screen and (max-width: 400px){
        width: 100%;
        height: 210px;
    }
`;

// Há algumas interações com o hover e background de fundo.
export const Card_Img_Hover = styled.div`
    background-image: url(${props => props.img});
    transition: 0.2s all ease-in-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 360px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
    :hover {
        background-color: rgb(254,60,114);
        height: 100%;
        opacity: 0.5;
    }
    @media screen and (max-width: 400px){
        width: 100%;
        height: 210px;
        ;
    }
`;
// ------------------ Fim (Style da parte da imagem dentro do card do Componente ProfileP) Fim ------------------------ //

// Cardzinho de info onde dentro há o nome, idade e bio de cada profile.
export const Card_Info = styled.div`
    z-index: 2;
    background-color:rgb(254,60,114);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 10px 24px 10px 24px;
    height: 10%;
    cursor: help;
    :hover {
        height: 15%;
        position: relative;    
        h4{
            display: flex;
        }
        h6{
            display: none;
        }
    }
`;

// Contêm nome e idade dentro.
export const Card_Title = styled.h2`
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', sans-serif;
    h6{
        font-size: 10px;
        margin: 0px;
        padding: 0px;
    }
    @media screen and (max-width: 400px){
            font-size: 11px;
    }
`;

export const Bio = styled.h4`
display: none;
`;

// ---------------------------------- //

// Div que contem os botoes de like e deslike.
export const NavBottom = styled.div`
    height: 10%;
    display: flex;
    justify-content:space-evenly;
    align-items: flex-end;
    padding: 10px 0px;
    img {
        cursor: pointer;
        width: 10%;
        :hover {
            transform: scale(1.4)
        }   
    }
`;