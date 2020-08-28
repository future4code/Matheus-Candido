// Criar
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';
import { Url, Config } from './axiosConstants'
import {Principal, ColorButton} from './Styles'

export const Principal = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

export const Criar = styled.div`
display:flex;
justify-content: center;
margin: 20px 0px;
`;

export const Conteudo1 = styled.div`

`;

// lib de input
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

// Listar


export const Conteudo = styled.div`
b,button{
    cursor: pointer;
    :hover {
        color: red;
    }
}
`;



// Detalhes
export const Criar1 = styled.div`

`;

// lib de input
