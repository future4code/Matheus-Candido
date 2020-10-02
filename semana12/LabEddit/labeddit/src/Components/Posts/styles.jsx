import styled from 'styled-components'

export const Container = styled.div`
    width: 402px;
    /* text-align: center; */
    b{
        text-align: start;
    }
`;

export const DivDetail = styled.div`
width: 400px;
margin: 20px 0;
`


export const Create = styled.div`
    flex-grow: 1;
`;


export const Div = styled.div`
    display: flex;
    border: 1px black solid;
    width: 400px;
    /* min-height: 200px; */
    border-radius: 10px;
    margin: 10px 0;
`;

export const DivPost = styled.div`
width: 85%;
padding: 0px 20px 20px;

`

export const DivVotes = styled.div`
width: 7%;
display: flex;
flex-direction: column;
justify-content: center;
`


export const MapPosts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: justify;
    box-sizing: border-box;
    p{
        
    }
`;

export const DivLoading = styled.div`
width: 100%;
height: 50vmin;
`


export const Main = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
`;