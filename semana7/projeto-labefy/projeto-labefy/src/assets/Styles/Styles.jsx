import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

//Usado no pré loading
export const Loading = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 100vh;
    background-color: black;
img{
    height: 40vmin;
}`

//Config das divs gerais dos components
export const App = styled.main`
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: rgba(0 ,0 ,0, 0.9);
    color: white;
button{
    font-weight: bold;
}
`;

//config da lista de playlists / Input criar de playlists
export const Criar = styled.div`
    display:flex;
    justify-content: center;
    margin: 20px 0px;
    font-size: 20px;
b{
    
    cursor: pointer;
    :hover {
        color: red;
    
}
    padding-bottom: 5px;
}
input{
    font-weight: bold;
}`;

//lib input
export const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: grey[100],
        color: grey[900],
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: grey[400]
        }
    }
}))(TextField);

//input dentro da playlist
export const CriarDetalhes = styled.div`
    display:flex;
    justify-content: center;
`;

export const Cancel = styled.img`
    width: 30px;
    margin-left: 10px;
:hover {
    cursor: pointer;
    transform: scale(1.1)
}`;

export const Musicas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;