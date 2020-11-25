import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    text-align: center;
    button {
            border: 1px solid rgb(244,125,31);
            border-radius: 3px;
            padding: 5px 15px;
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
`