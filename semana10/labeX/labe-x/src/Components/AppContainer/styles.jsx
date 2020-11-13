import styled from "styled-components";
import background from './imgs/797.jpg'
// import background from './imgs/2262.jpg'

export const Main = styled.main`
    width: 100%;
    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: content-box;
    height: 100vmin;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 400px){
        min-height: 100vh;
    }
`;

export const Nav = styled.header`
    width: 100%;
    height: 10%;
    /* background: #fe0; */
    background-color: rgba(12, 12, 12, 0.7);
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
`;

export const Body = styled.div`
    width: 100%;
    height: 95%;
    /* background: lightblue; */
`;

export const NavFooter = styled.footer`
    width: 100%;
        height: 8%;
    /* background: orangered; */
    background-color: rgba(12, 12, 12, 0.7);
    border-top: 3px rgb(0, 255, 170) solid;
    border-radius: 5px 5px 0 0;
`;
