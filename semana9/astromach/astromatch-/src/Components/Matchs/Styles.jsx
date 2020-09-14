import styled from "styled-components";

// Div que contem as listas dos matches.
export const Div = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 10px 13px;
    height: 50px;
    cursor: pointer;
    :hover {
        pointer-events: none;
        background-color: rgb(254,60,114);
    }
    
`;

// Style que editaas fotos dos profiles de matches.
export const Img = styled.img`
    border-radius: 50px;
    margin-right: 5px;
    width: 3vmin;
`;