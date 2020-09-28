import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const List = styled.div`
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border-bottom: 3px solid rgba(89, 70, 102, 1);
    padding: 10px 0;
    color: whitesmoke;
    h3{
        padding: 0 20px;
        margin: 15px 0;
        width: 200px;
    }
`;

export const Div = styled.div`
    background: whitesmoke;
    display: flex;
    margin: 10px;
    border: none;
    border-right: 1px solid purple;
    border-left: 1px solid purple;
    border-radius: 10px;
    padding: 5px;
    b{  
        color: black;
        width: 90%;
        text-align: start;
        padding-right: 5px;
    }
    img{
        width: 3vmin;
        :hover{
            cursor: pointer;
            transform: scale(1.1);
        }
        :active{
            transform: scale(0.9);
        }
    }
`;