import styled from 'styled-components'

export const Main = styled.footer`
    height: 100%;
    display: flex;
    img{
        width: 4%;
        height: 7%;
        position: fixed;
        bottom: 0;
        animation: spaceShip 11s linear infinite;
        @keyframes spaceShip{
            0%{left: -5%; bottom: -1%}
            15%{ bottom: 1%}
            30%{ bottom: -1%}
            45%{ bottom: 1%}
            49%{transform: rotate(0deg)}
            50%{left: 104%; transform: rotate(-45deg)}
            60%{ bottom: 1%}
            75%{ bottom: -1%}
            90%{ bottom:1%}
            99%{transform: rotate(-45deg)}
            100%{left: -5%; bottom: -1%}
        }
        @media screen and (max-width: 400px){
            width: 11%;
            height: 8%;
        }
    }
`