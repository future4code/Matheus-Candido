import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background: whitesmoke;
`;

export const DivForm = styled.div`
    text-align: center;   
    background: white;
    width: 270px;
    height:400px;  
    border-radius: 10px;
    h2{
        margin: 30px 0 20px ;
        justify-content: start;
    }
    span{
        display: block;
        margin: 10px;
        div{
            display: inline;
            :hover{
                color: rgb(246,175,86);
                cursor: pointer;
            }
        }
    }
form{
    display: flex;
    align-items: center;
    flex-direction: column;
    input{
        border: none;
        border-bottom: 2px solid rgb(244,125,31);
        border-bottom-left-radius: 6px;
        background: transparent;
        padding-left: 5px;
        height: 35px;
        margin: 15px;
        :focus{
            outline: none;
        }
    }
        button {
            border: 1px solid rgb(244,125,31);
            border-radius: 2px;
            padding: 5px 15px;
            background: transparent;
            text-transform: uppercase;
            font-weight: bolder;
            margin: -60px 0 0;
            outline: none;
            :hover{
                cursor: pointer;
            }
            :focus{
                outline:transparent;
            }
        }
        span{
            img{
                width: 21px;
                margin: 15px;
                :hover{
                    cursor: pointer;
                }
            }
        }
}
`;

export const ShowPass = styled.span`
    position: relative;
    bottom: 70px;
    right: -70px;
    z-index: 1111111111;
`;