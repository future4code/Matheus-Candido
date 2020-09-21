import styled from 'styled-components'

export const Main = styled.div`
height: 78vmin;
`;
export const ButtonMenu = styled.button`
    position: relative;
    top: -30px;
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
`

export const FormContainer = styled.div`
    position:absolute;
	left:50%;
	top:50%;
    transform: translate(-50%,-50%);
    background-color: rgba(12, 12, 12, 0.7);
	border-radius:3px;
    padding:30px 90px;
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
`

export const TextCenter = styled.span`
    color: #fff;
    text-transform: uppercase;
    font-size: 23px;
    padding-bottom: 40px;
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
	transition: all 0.2s ease-in-out;
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
        top:37px;
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
        background:rgba(100, 100, 100, 0.89);
        border-radius: 20px;  }
    }
`;

export const ButtonLogin = styled.button`
    color: #fff;
    background-color: blueviolet;
    outline: none;
    border: 1px transparent solid;;
    padding: 10px 20px;
    text-transform: uppercase;
    margin: 10px 0;
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
