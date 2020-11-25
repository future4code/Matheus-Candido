import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const DivForm = styled.div`
    text-align: center;   
    /* background: white; */
    width: 700px;
    margin: 10px 0;
    border-radius: 10px;
    h2{
        margin: 30px 0 20px ;
        justify-content: start;
    }
    span{
        display: block;
        margin: 20px;
        b{
            :hover{
                color: blueviolet;
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
            width: 700px;
            height: 30px;
            margin: 10px;
            font-family: 'Sansita Swashed', cursive;
            :focus{
                outline: none;
            }
        }
        textarea{
            width: 700px;
            height: 100px;
            resize:none;
            margin: 20px;
            border-bottom: 2px solid rgb(244,125,31);
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            font-family: 'Sansita Swashed', cursive;
            :focus{
                outline: none;
            }
        }
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
    }

    @media screen and (max-width: 400px){
        width: 300px;
        form{
            input {
                width: 300px;
            }
            textarea{
                width: 300px;
            }
        }
    }
`;