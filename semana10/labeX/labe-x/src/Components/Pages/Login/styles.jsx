import styled from 'styled-components'

export const Main = styled.div`
    position:fixed;
	left:50%;
	top:50%;
    transform: translate(-50%,-50%);
/* background-color: rgba(100, 100, 100, 0.89); */
    background-color: rgba(12, 12, 12, 0.7);
	border-radius:3px;
    padding:0px 50px 30px;
    border-bottom: 3px blueviolet solid;
    border-radius: 0 0 5px 5px;
`;

export const TextCenter = styled.span`
    color: #fff;
    text-transform: uppercase;
    font-size: 23px;
    padding: 20px 0;
    display: block;
`;

export const ButtonsMenu = styled.button`
    position: relative;
    top: -247px;
    right: -871px;
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
        top: -180px;
        right: -720px;
    }
`;

export const ButtonsMenuSignUp = styled.button`
    position: relative;
    top: -258px;
    right: -871px;
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
        top: -190px;
        right: -720px;
    }
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
        border-bottom:1px solid blueviolet;  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
        color:#fff;
        :focus {
            border:none;	
            outline:none;
            border-bottom:1px solid rgb(0, 255, 170);	
            }
        }  
    :focus~label,
    input:valid~label{
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
    margin: 10px 0;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        border: 1px black solid;
    }
`;

export const SpanSignUp = styled.span`
    cursor: pointer;
    font-weight: 700;
    :hover{
        color: blueviolet;
    }
`;