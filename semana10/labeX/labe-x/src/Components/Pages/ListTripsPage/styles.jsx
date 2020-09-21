import styled from 'styled-components'
import background from '../../../imgs/star-background.jpg'

export const Main = styled.main`
    height: 73vmin;
    padding: 20px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const DivMenu = styled.div`  
    display: flex;
    span{
        margin: 0;
        font-size: 40px;
        font-weight: 900;
        color: #fff;
        position: absolute;
        top: 4%;
        left: 45%;
        font-weight: bold;
    }
`;

export const ButtonsMenu = styled.button`
    position: relative;
    top: -240px;
    left: 91%;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    background-color: rgb(0, 255, 170);
    color:rgb(12, 12, 12);
    font-weight: 700;
    transition: all 500ms;
    cursor: pointer;          
    :hover {
        background-color: rgb(0, 0, 0);
        color: floralwhite;
    }
    :active {
        top: -245px;
    }
`;

export const DivMap = styled.div`
    background: url(${background});
    background-size: cover;
/* background-color: rgba(12, 12, 12, 0.7); */
    border-radius: 7px;
    margin: 20px 50px;
    font-weight: 400;
    text-align: center;
    padding: 20px 10px;
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
    h1,h2 {
        margin: 0;
        padding: 20px 0;
        width: 100%;
        text-align: center;
        font-weight: 700;
        margin-bottom: 1.25rem;
        text-shadow: 4px 4px 3px rgb(12, 12, 12);
        pointer-events: stroke;
        cursor: help;
    }
    display: relative; 
    left: 50%;
    top: 50%;
`;

export const Buttons = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 15px;
    background-color: rgb(0, 255, 170);
    color:rgb(12, 12, 12);
    font-weight: 700;
    transition: all 500ms;
    cursor: pointer;          
    :hover {
        background-color: rgb(0, 0, 0);
        color: floralwhite;
    }
    :active {
        margin-bottom: -7px;
        margin-top: 7px;
    }
`;