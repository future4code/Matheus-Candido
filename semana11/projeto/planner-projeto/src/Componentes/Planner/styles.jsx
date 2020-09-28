import styled from "styled-components";
import background from '../../imgs/32959.jpg'

export const Main = styled.main`
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    form{
        padding: 10px 0px;
    }
    input{
        background: transparent;
        height: 30px;
        text-transform: uppercase;
        border:none;
        border-bottom: 2px solid rgba(89, 70, 102, 1);
        border-radius: 10px;
        margin-right: 10px;
        padding-left: 10px;
        :focus{
            outline: none;
        }
    }
    select{
        background: transparent;
        height: 35px;
        text-transform: uppercase;
        border:transparent;
        border-bottom: 2px solid rgba(89, 70, 102, 1);
        border-radius: 10px;
        margin-right: 10px;
        padding-left: 10px;
        :hover{
            cursor: pointer;
        }
        :focus{
            outline: none;
        }
    }
    button{
        background: transparent;
        height: 35px;
        text-transform: uppercase;
        border:none;
        border-bottom: 2px solid rgba(89, 70, 102, 1);
        border-radius: 10px;
        margin-left: 10px;
        background: transparent;
        padding: 10px 5px;
        :hover{
            cursor: pointer;
            transform: scale(1.1);
        }
        :focus{
            outline: none;
        }
        :active{
            transform: scale(0.9);
        }
    }
`;
