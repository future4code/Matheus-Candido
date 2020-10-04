import styled from 'styled-components'

export const Nav = styled.header`
    height: 100%;
    display: flex;
`;

export const LogoTitle = styled.div`
    width: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
    b{
        :hover{
            cursor: pointer;
        }
    }
    img{ 
        width: 5vmin;
        padding: 0 10px;
        :hover{
            cursor: pointer;
        }
    }
`;

export const Buttons = styled.div`
    width: 10%;
    display: flex;
    justify-content:center;
    align-items: center;
    button {
        border: 1px solid rgb(244,125,31);
        border-radius: 3px;
        padding: 5px 10px;
        background: transparent;
        text-transform: uppercase;
        font-family: 'Sansita Swashed', cursive;
        font-weight: bolder;
        :hover{
            cursor: pointer;
            background: rgb(246,175,86);
        }
        :focus{
            outline:transparent;
        }
    }
    @media screen and (max-width: 420px){
        button{
            padding: 3px 5px;
        } 
        width: 30%
    }
`;




