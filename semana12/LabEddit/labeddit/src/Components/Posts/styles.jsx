import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    font-family: 'Sansita Swashed', cursive;
`;

export const Container = styled.div`
    width: 702px;
    b{
        text-align: start;
    }
    @media screen and (max-width: 400px){
        width: 302px;
    }
`;

export const DivDetail = styled.div`
    width: 100%;
    padding: 20px;
    background: white;
    h5{
        margin: 10px 0px 0px;
        text-decoration:underline;
    }
`

export const MapPosts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: justify;
    box-sizing: border-box;
`;

export const Div = styled.div`
    display: flex;
    border: 1px solid rgb(246,175,86);
    width: 700px;
    border-radius: 10px;
    margin: 10px 0;
    @media screen and (max-width: 400px){
        width: 300px;   
        margin: 30px 0 0;
    }
`;

export const DivPost = styled.div`
    width: 100%;
    padding: 0px 20px 20px;
    background: white;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    h3{
        margin: 20px 0px 10px;
    }
    h5{
        margin: 0px 0px 20px;
        text-decoration:underline;
    }
    p{
        font-weight: normal;
        word-wrap: break-word;
        text-overflow:ellipsis;
        max-width: 500px;
    }
    button{
        background: none;
        border: 1px solid rgb(244,125,31);
        font-weight: bold;
        :focus{
            border: none;
            outline: transparent;
        }
        :hover{
            cursor: pointer;
        }
    }
`

export const DivVotes = styled.div`
    width: 5%;
    display: flex;
    flex-direction: column;
    div{
        text-align:center;
        img{
            width: 30px;
            height: 30px;
            :hover{
                cursor: pointer;
            }
        }
    }
    img{
        width: 30px;
        height: 30px;
        :hover{
            cursor: pointer;
        }
    }
    @media screen and (max-width: 400px){
        width: 11%;
    }
`