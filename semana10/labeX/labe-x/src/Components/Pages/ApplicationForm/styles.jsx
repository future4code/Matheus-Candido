import styled from 'styled-components'
import background from '../../../imgs/2262.jpg'

export const Main = styled.div`
    height: 83vmin;
    background: url(${background});
    background-size: cover;
    h2{
        position: fixed;
        top: 5px;
        left: 820px;
        color: white;
        font-weight: 900;
        margin:0;
        padding: 20px 0;
    }
    @media screen and (max-width: 1700px){
        h2 {
            left: 675px;
        }
    }
`;

export const ButtonMenu = styled.button`
    position: relative;
    top: 83px;
    color: #fff;
    background-color: blueviolet;
    outline: none;
    border: 1px transparent solid;;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        border: 1px black solid;
    }
    @media screen and (max-width: 1700px){
        top: 15px;
        
    }
`

export const FormContainer = styled.div`
    position:absolute;
	left:50%;
	top:50%;
    transform: translate(-50%,-50%);
    background-color: rgba(12, 12, 12, 0.7);
	border-radius:3px;
    padding:70px 50px;
    border-bottom: 3px blueviolet solid;
    border-radius: 0 0 5px 5px;

`

export const TextCenter = styled.span`
    color: #fff;
    text-transform: uppercase;
    font-size: 23px;
    padding-bottom: 20px;
    display: block;
`;

export const InputContainer = styled.div`
    position:relative;
	margin-bottom:39px;
    label{
        position:absolute;
	    top:-11px;
	    left:0px;
	    font-size:16px;
	    color:#fff;	
        pointer-events:none;
	    transition: all 0.3s ease-in-out;
    }
    input {
        border:0;
        border-bottom:1px solid black;  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
        color:#fff;
        :focus {
            border:none;	
            outline:none;
            border-bottom:1px solid #e74c3c;	
        }
    }
    :focus~label,
    input:valid~label{
        top:33px;
	    font-size:12px;
    }     
    select{
        border:0;
        border-bottom:1px solid black;  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
        color:#fff;
        :focus {
            border:none;	
            outline:none;
        }
        option{
            background:rgba(100, 100, 100, 0.70);
            border-radius: 20px;
        } 
    }
    :focus~label,
    select:enabled~label{
        top:33px;
	    font-size:12px;
    }
`;

export const ButtonLogin = styled.button`
    color: #fff;
    background-color: blueviolet;
    outline: none;
    border: 1px transparent solid;;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        border: 1px black solid;
    }
`;

export const SpanSignUp = styled.span`
    cursor: pointer;
    :hover{
        color: blueviolet;
    }
`;
