import styled from 'styled-components'

export const Main = styled.main`
    height: 90%;
    padding: 20px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

export const Div = styled.div`
    background-color: rgba(12, 12, 12, 0.7);
    border-radius: 7px;
    font-weight: 600;
    text-align: center;
    padding: 40px 30px;
    width: 100%;
    color: white;
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
    b{
        font-size: 20px;
        padding-right: 10px;
    }
    div{
        padding: 5px 0;
    }
    h2{
            margin: 0;
            padding: 10px;
        }
`;

export const Buttons = styled.button`
    position: relative;
    top: -40px;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    /* border-radius: 15px; */
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
        top: -30px;
    }
`;

export const DivMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
        padding: 5px 7px;
        pointer-events: none;
    }
    img{
        margin-left: 10px;
        width: 25px;
        border: solid transparent 1px;
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
}
`;
