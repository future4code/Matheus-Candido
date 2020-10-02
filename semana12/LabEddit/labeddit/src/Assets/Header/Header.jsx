import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { useAxios } from '../../CustomHooks/AxiosConfigs/useAxios';
import { useProtect } from '../../CustomHooks/ProtectRoute/useProtect';
import logo from '../Imgs/logo.png'

const Buttons = styled.div`
width: 30%;
    display: flex;
    justify-content:center;
    align-items: center;
`;


const LogoTitle = styled.div`
width: 70%;
display: flex;
justify-content: start;
align-items: center;
img{ 
    width: 5vmin;
    padding: 0 10px;
}
`;

const Nav = styled.header`
height: 100%;
display: flex;
`;



export default function Header() {
    const [visual, setVisual] = React.useState(false)
    const { token } = useAxios()
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem(token)
        history.push('/login')
    }
    const pathName = history.location.pathname
    console.log(visual)
    console.log(history.location)
    const botoes = () => {

    }
    React.useEffect(() => {

    }, [])

    // useProtect()
    return (
        <Nav>
            <LogoTitle>
            
                <img src={logo} alt="" />
                {/* {pathName === "/" ? <b>Feed</b> : <b>Header</b>} */}
                <b>Labbedit</b>
            
                

            </LogoTitle>
            <Buttons>
                {/* Lógica do botão de login */}
                {pathName !== "login" && pathName !== "signin" ? (token ? <button onClick={logout}>Logout</button> : <button >Login</button>) : undefined}

            </Buttons>
        </Nav>
    )
}