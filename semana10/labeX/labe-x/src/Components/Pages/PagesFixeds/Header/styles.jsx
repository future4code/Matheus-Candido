import styled from "styled-components";

export const Main = styled.header`
    width: 100%;
    height: 100%;
    h2{
        margin: 0;
        color: #fff;
        font-size: 45px;
        font-weight: 900;
        text-shadow: 9px 9px 2px rgb(12, 12, 12);
        position: absolute;
        top: 1%;
        left: 13%;
    }
`;

export const Logo = styled.div`
    width:40%;
    display: flex;
    padding: 0px 20px;
    img{
        position: relative;
        z-index: 111;
        width: 20%;
        height: 17%;
        /* padding-right: 10px; */
        border-bottom: 3px rgb(0, 255, 170) solid;
        border-radius: 0 0 5px 5px;
    }
    
`;